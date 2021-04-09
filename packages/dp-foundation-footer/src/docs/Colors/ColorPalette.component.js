import React from 'react';
import { DocsWrapper, DocsIntro } from '../Docs.styled';
import { Row } from './Colors.styled';
import baseTheme from '../../themes/cortexTheme';

const { colors } = baseTheme;

const primaryVariants = [
  {
    backgroundColor: colors.primary.base,
    name: 'PrimaryBase',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.primary['180'],
    name: 'Primary180',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.primary['140'],
    name: 'Primary140',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.primary['120'],
    name: 'Primary120',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.primary['100'],
    name: 'Primary100',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.primary['20'],
    name: 'Primary20',
    passList: [true, true, false, false],
  },
];

const miscColors = [
  {
    backgroundColor: colors.terracotta['160'],
    name: 'Terracotta160',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.terracotta['100'],
    name: 'Terracotta100',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.olive['160'],
    name: 'Olive160',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.olive['100'],
    name: 'Olive100',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.khaki['180'],
    name: 'Khaki180',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.khaki['100'],
    name: 'Khaki100',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.beige['180'],
    name: 'Beige180',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.beige['120'],
    name: 'Beige120',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.beige['100'],
    name: 'Beige100',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.beige['60'],
    name: 'Beige60',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.beige['40'],
    name: 'Beige40',
    passList: [true, true, false, false],
  },
];

const errorVariants = [
  {
    backgroundColor: colors.error['120'],
    name: 'Error120',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.error['100'],
    name: 'Error100',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.error['20'],
    name: 'Error20',
    passList: [true, true, false, false],
  },
];

const warningVariants = [
  {
    backgroundColor: colors.warning['120'],
    name: 'Warning120',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.warning['100'],
    name: 'Warning100',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.warning['20'],
    name: 'Warning20',
    passList: [true, true, false, false],
  },
];

const successVariants = [
  {
    backgroundColor: colors.success['120'],
    name: 'Success120',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.success['100'],
    name: 'Success100',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.success['20'],
    name: 'Success20',
    passList: [true, true, false, false],
  },
];

const em1Variants = [
  {
    backgroundColor: colors.em1.base,
    name: 'EM1-Base',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.em1['80'],
    name: 'EM1-80',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.em1['60'],
    name: 'EM1-60',
    passList: [false, true, false, true],
  },
  {
    backgroundColor: colors.em1['40'],
    name: 'EM1-40',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.em1['20'],
    name: 'EM1-20',
    passList: [true, true, false, false],
  },
];

const em2Variants = [
  {
    backgroundColor: colors.em2.base,
    name: 'EM2-Base',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.em2['80'],
    name: 'EM2-80',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.em2['60'],
    name: 'EM2-60',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.em2['40'],
    name: 'EM2-40',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.em2['20'],
    name: 'EM2-20',
    passList: [true, true, false, false],
  },
];

const witWisdomVariants = [
  {
    backgroundColor: colors.witWisdom.base,
    name: 'WitWisdom-Base',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.witWisdom['80'],
    name: 'WitWisdom-80',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.witWisdom['60'],
    name: 'WitWisdom-60',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.witWisdom['40'],
    name: 'WitWisdom-40',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.witWisdom['20'],
    name: 'WitWisdom-20',
    passList: [true, true, false, false],
  },
];

const phDVariants = [
  {
    backgroundColor: colors.phD.base,
    name: 'PhD-Base',
    passList: [false, true, true, true],
  },
  {
    backgroundColor: colors.phD['80'],
    name: 'PhD-80',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.phD['60'],
    name: 'PhD-60',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.phD['40'],
    name: 'PhD-40',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.phD['20'],
    name: 'PhD-20',
    passList: [true, true, false, false],
  },
];

const pVariants = [
  {
    backgroundColor: colors.pPurple['100'],
    name: 'PPurple100',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.pPurple['20'],
    name: 'PPurple20',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.pGreen['100'],
    name: 'PGreen100',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.pGreen['20'],
    name: 'PGreen20',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.pOrange['100'],
    name: 'POrange100',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.pOrange['20'],
    name: 'POrange20',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.pBlue['100'],
    name: 'PBlue100',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.pBlue['20'],
    name: 'PBlue20',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.pYellow['100'],
    name: 'PYellow100',
    passList: [true, true, false, true],
  },
  {
    backgroundColor: colors.pYellow['20'],
    name: 'PYellow20',
    passList: [true, true, false, false],
  },
];

const nVariants = [
  {
    backgroundColor: colors.n['100'],
    name: 'N100',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.n['90'],
    name: 'N90',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.n['80'],
    name: 'N80',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.n['60'],
    name: 'N60',
    passList: [false, false, true, true],
  },
  {
    backgroundColor: colors.n['50'],
    name: 'N50',
    passList: [false, true, false, true],
  },
  {
    backgroundColor: colors.n['40'],
    name: 'N40',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.n['20'],
    name: 'N20',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.n['10'],
    name: 'N10',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.n['04'],
    border: true,
    name: 'N04',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.n['02'],
    border: true,
    name: 'N02',
    passList: [true, true, false, false],
  },
  {
    backgroundColor: colors.white,
    border: true,
    name: 'White',
    passList: [true, true, false, false],
  },
];

export const ColorPalette = () => {
  return (
    <DocsWrapper>
      <DocsIntro style={{ marginBottom: '56px' }}>
        <h3>Core</h3>
        <h2>Color palette</h2>
        <p>
          Our palettes are used to convey meaning to the information they present. Colors should be
          readable and supplement the presentation of information.
        </p>
      </DocsIntro>

      <Row list={primaryVariants} />
      <Row list={miscColors} />
      <Row list={errorVariants} />
      <Row list={warningVariants} />
      <Row list={successVariants} />
      <Row list={em1Variants} />
      <Row list={em2Variants} />
      <Row list={witWisdomVariants} />
      <Row list={phDVariants} />
      <Row list={pVariants} />
      <Row list={nVariants} />
    </DocsWrapper>
  );
};

export default ColorPalette;
