import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import config from 'lighthouse/lighthouse-core/config/lr-desktop-config.js';
import reportGenerator from 'lighthouse/lighthouse-core/report/report-generator.js';
import fs from 'fs';
import util from 'util';
import { performance } from 'perf_hooks';

const runPuppeteerValidation = async () => {
  console.log('Starting a11n Validation');
  const startTime = performance.now();
  const browserOptions = {
    headless: true,
    logLevel: 'info',
    output: 'json',
    disableDeviceEmulation: true,
    defaultViewport: {
      width: 1200,
      height: 900,
    },
    chromeFlags: ['--disable-mobile-emulation'],
  };
  const browser = await puppeteer.launch(browserOptions);
  const urlObject = new URL(browser.wsEndpoint());

  //https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
  const opts = {
    port: urlObject.port,
    onlyCategories: ['accessibility'],
    categories: {
      'unused-category': {
        auditRefs: [{ id: 'bypass' }],
      },
    },
  };
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:6006/', { waitUntil: 'networkidle2' });
    const coveredPages = [];
    const navigationPath = [];
    const auditErrors = [];
    await setupGenerationFolder();

    while (!coveredPages.includes(page.url())) {
      const pageUrl = page.url();
      console.log(`Validating ${pageUrl}`);
      const componentPageUrl = await page.evaluate(
        () => document.getElementById('storybook-preview-iframe').contentWindow.location.href,
      );
      navigationPath.push(componentPageUrl);
      const audit = await generateLifehouseReportInUrl(pageUrl, componentPageUrl, opts);
      if (audit.auditErrors && audit.auditErrors.length) {
        auditErrors.push(audit);
      }
      await goToNextComponent(page);
      coveredPages.push(pageUrl);
    }

    if (auditErrors.length > 0) {
      throw Error(JSON.stringify(auditErrors));
    }

    // await Promise.all(navigationPath.map(componentPageUrl => generateLifehouseReportInUrl(componentPageUrl, componentPageUrl, opts)));
  } catch (ex) {
    console.error(ex);
  } finally {
    await browser.close();
  }
  const finalTime = performance.now();

  console.warn(
    `Time spent ${finalTime - startTime} milliseconds for ${navigationPath.length} pages`,
  );

  if (auditErrors.length) {
    auditErrors.forEach(error =>
      console.error(
        `${error.component} has ${error.auditErrors.length} check ${error.htmlReportPath} for more details`,
      ),
    );
    throw Error(JSON.stringify(auditErrors));
  } else {
    console.log(`No Audit Errors Found!`);
  }
};

async function clearFocusInPage(page) {
  return page.evaluate(() => document.activeElement.blur());
}

async function setupGenerationFolder() {
  await util.promisify(fs.rmdir)('./lh/', { recursive: true });
  await util.promisify(fs.mkdir)('lh');
}

async function goToNextComponent(page, timeout = 150) {
  await Promise.all([page.keyboard.down('Alt'), page.keyboard.press('ArrowRight')]);
  await new Promise(resolve => setTimeout(resolve, timeout)).then(() => clearFocusInPage(page));
}

async function generateLifehouseReportInUrl(pageUrl, componentPageUrl, opts) {
  const results = await lighthouse(componentPageUrl, opts, config);
  const htmlReport = reportGenerator.generateReport(results.lhr, 'html');
  const jsonReport = reportGenerator.generateReport(results.lhr, 'json');
  const reportName = pageUrl.split('/').pop() || 'mainreport';

  //Write report html to the file
  await util.promisify(fs.writeFile)(`./lh/${reportName}.html`, htmlReport);

  //Write report json to the file
  await util.promisify(fs.writeFile)(`./lh/${reportName}.json`, jsonReport);
  const auditErrors = await getAuditErrors(jsonReport);

  return { component: reportName, auditErrors, htmlReportPath: `./lh/${reportName}.html` };
}

async function getAuditErrors(resultsJson) {
  const results = JSON.parse(resultsJson);
  return Object.keys(results.audits).reduce((consolidatedAudits, currentAuditKey) => {
    const currentAudit = results.audits[currentAuditKey];
    if (
      !currentAudit.details ||
      !currentAudit.details.items ||
      !currentAudit.details.items.length
    ) {
      return consolidatedAudits;
    }

    if (currentAudit.id == 'bypass') {
      return consolidatedAudits;
    }

    return [...consolidatedAudits, currentAudit];
  }, []);
}

runPuppeteerValidation().finally(() => process.exit());
