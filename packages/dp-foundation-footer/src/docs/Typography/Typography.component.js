import React from 'react';
import { DocsWrapper, DocsIntro } from '../Docs.styled';
import {
  FontSample,
  TyposBoxTitle,
  TyposBoxSubtitle,
  TyposBox,
  Typo,
  TypoExample,
} from './Typography.styled';
import baseTheme from '../../themes/cortexTheme';

const { colors, typography } = baseTheme;

const teacherHeadings = [
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.headings.h1,
      fontWeight: typography.weights.bold,
      lineHeight: 32 / 20.25,
    },
    name: 'H1',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '20.25px',
      fontWeight: 'bold',
      usage: 'All titles on header nav',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.headings.h2,
      fontWeight: typography.weights.bold,
      lineHeight: 32 / 18,
    },
    name: 'H2',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '18px',
      fontWeight: 'bold',
      usage: 'Section titles and modal titles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.headings.h3,
      fontWeight: typography.weights.bold,
      lineHeight: 24 / 16,
    },
    name: 'H3',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '16px',
      fontWeight: 'bold',
      usage: 'Sub headings',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.headings.h4,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14.22,
    },
    name: 'H4',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '14.22px',
      fontWeight: 'book',
      usage: 'Sub headings',
    },
  },
];

const studentHeadings = [
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.headings.h1,
      fontWeight: typography.weights.bold,
      lineHeight: 32 / 20.25,
    },
    name: 'H1',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '20.25px',
      fontWeight: 'bold',
      usage: 'All titles on header nav',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.headings.h2,
      fontWeight: typography.weights.bold,
      lineHeight: 32 / 18,
    },
    name: 'H2',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '18px',
      fontWeight: 'bold',
      usage: 'Section titles and modal titles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.headings.h3,
      fontWeight: typography.weights.bold,
      lineHeight: 24 / 16,
    },
    name: 'H3',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '16px',
      fontWeight: 'bold',
      usage: 'Sub headings',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.headings.h4,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14.22,
    },
    name: 'H4',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '14.22px',
      fontWeight: 'book',
      usage: 'Sub headings',
    },
  },
];

const teacherStyles = [
  {
    fontProps: {
      color: colors.primary['140'],
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.huge,
      fontWeight: typography.weights.bold,
      lineHeight: 76 / 50.52,
    },
    name: 'Huge',
    styleInfo: {
      color: '@gmblue-base',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '50.52px',
      fontWeight: 'bold',
      usage: 'Planning sections',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.mainTitle,
      fontWeight: typography.weights.book,
      lineHeight: 44 / 28.43,
    },
    name: 'Main Titles',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '28.43px',
      fontWeight: 'book',
      usage: 'Some titles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.subtitle,
      fontWeight: typography.weights.book,
      lineHeight: 32 / 21.33,
    },
    name: 'Subtitles',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '21.33px',
      fontWeight: 'book',
      usage: 'subtitles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.minorTitle.teacherExp,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 12,
      minorTitle: true,
    },
    name: 'Minor Titles',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '12px',
      fontWeight: 'book',
      usage: 'minor titles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.textBase,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 16,
    },
    name: 'Text-base',
    styleInfo: {
      color: '@dark, @N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '16px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.textSmall,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14,
    },
    name: 'Text-small',
    styleInfo: {
      color: '@dark, @N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '14px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
  {
    fontProps: {
      color: colors.primary.base,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.textLink,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 16,
      textLink: true,
    },
    name: 'Text-links',
    styleInfo: {
      color: '@gmblue-dark-80',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '16px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
  {
    fontProps: {
      color: colors.n['100'],
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.button,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14,
    },
    name: 'Buttons',
    styleInfo: {
      color: '@white, @N100',
      fontFamily: typography.fonts.teacherExp,
      fontSize: '14px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
];

const studentStyles = [
  {
    fontProps: {
      color: colors.primary['140'],
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.huge,
      fontWeight: typography.weights.bold,
      lineHeight: 76 / 50.52,
    },
    name: 'Huge',
    styleInfo: {
      color: '@gmblue-base',
      fontFamily: typography.fonts.studentExp,
      fontSize: '50.52px',
      fontWeight: 'bold',
      usage: 'Planning sections',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.mainTitle,
      fontWeight: typography.weights.book,
      lineHeight: 44 / 28.43,
    },
    name: 'Main Titles',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '28.43px',
      fontWeight: 'book',
      usage: 'Some titles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.subtitle,
      fontWeight: typography.weights.book,
      lineHeight: 32 / 21.33,
    },
    name: 'Subtitles',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '21.33px',
      fontWeight: 'book',
      usage: 'subtitles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.minorTitle.studentExp,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14,
      minorTitle: true,
    },
    name: 'Minor Titles',
    styleInfo: {
      color: '@N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '14px',
      fontWeight: 'book',
      usage: 'minor titles',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.textBase,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 16,
    },
    name: 'Text-base',
    styleInfo: {
      color: '@dark, @N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '16px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
  {
    fontProps: {
      color: null,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.textSmall,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14,
    },
    name: 'Text-small',
    styleInfo: {
      color: '@dark, @N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '14px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
  {
    fontProps: {
      color: colors.primary.base,
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.textLink,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 16,
      textLink: true,
    },
    name: 'Text-links',
    styleInfo: {
      color: '@gmblue-dark-80',
      fontFamily: typography.fonts.studentExp,
      fontSize: '16px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
  {
    fontProps: {
      color: colors.n['100'],
      fontFamily: typography.fonts.studentExp,
      fontSize: typography.sizes.textStyles.button,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 14,
    },
    name: 'Buttons',
    styleInfo: {
      color: '@white, @N100',
      fontFamily: typography.fonts.studentExp,
      fontSize: '14px',
      fontWeight: 'book',
      usage: 'All-Habitat',
    },
  },
];

const teacherExamples = [
  {
    children: 'Continuos learning',
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.headings.h2,
      fontWeight: typography.weights.bold,
      lineHeight: 32 / 18,
    },
    marginBottom: '5px',
    styleInfo: {
      fontSize: '18px',
      textStyle: 'H2',
    },
  },
  {
    children: 'Great Minds in Sync',
    fontProps: {
      color: colors.primary['140'],
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.huge,
      fontWeight: typography.weights.bold,
      lineHeight: 76 / 50.52,
    },
    marginBottom: '14px',
    styleInfo: {
      fontSize: '50.52px',
      textStyle: 'Huge',
    },
  },
  {
    children:
      'A collection of customized digital and print resources for Eureka Math, Wit & Wisdom and PhD Science.',
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.subtitle,
      fontWeight: typography.weights.book,
      lineHeight: 32 / 21.33,
    },
    marginBottom: '24px',
    styleInfo: {
      fontSize: '21.33px',
      textStyle: 'Subtitles',
    },
  },
  {
    children:
      'We are on a mission to empower teachers, no matter what this year holds. That’s why we’ve taken our award-winning curricula and adapted it to meet the moment. Now, teachers can toggle seamlessly from classroom instruction to distance learning without sacrificing coherence.',
    fontProps: {
      color: null,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.textBase,
      fontWeight: typography.weights.book,
      lineHeight: 24 / 16,
    },
    marginBottom: '40px',
    styleInfo: {
      fontSize: '16px',
      textStyle: 'Text-base',
    },
  },
  {
    children: 'Default',
    fontProps: {
      color: colors.white,
      fontFamily: typography.fonts.teacherExp,
      fontSize: typography.sizes.textStyles.button,
      fontWeight: typography.weights.book,
      isButton: true,
      lineHeight: 24 / 14,
    },
    styleInfo: {
      fontSize: '14px',
      textStyle: 'Button',
    },
  },
];

const Typography = () => {
  return (
    <DocsWrapper>
      <DocsIntro style={{ marginBottom: '120px' }}>
        <h3>Core</h3>
        <h2>Typography</h2>
        <p>
          For the <b>Teacher experience</b> we use <b>Circular Std</b>; for the{' '}
          <b>Student experience</b> is <b>QuickSand</b>.
          <br />
          The scale is based on two of the harmonious scales, major second for headings, and perfect
          fourth for text styles.
        </p>
      </DocsIntro>

      <FontSample fontFamily={typography.fonts.teacherExp}>Teacher experience typeface</FontSample>
      <FontSample fontFamily={typography.fonts.studentExp}>Student experience typeface</FontSample>

      <TyposBoxTitle>Headings - Teacher experience</TyposBoxTitle>
      <TyposBoxSubtitle>Major seconds harmonius scale</TyposBoxSubtitle>
      <TyposBox style={{ marginBottom: '80px' }}>
        {teacherHeadings.map(typo => (
          <Typo key={typo.name} fontProps={typo.fontProps} styleInfo={typo.styleInfo}>
            {typo.name}
          </Typo>
        ))}
      </TyposBox>

      <TyposBoxTitle>Text styles - Teacher experience</TyposBoxTitle>
      <TyposBoxSubtitle>Perfect fourth harmonius scale</TyposBoxSubtitle>
      <TyposBox style={{ marginBottom: '80px' }}>
        {teacherStyles.map(typo => (
          <Typo key={typo.name} fontProps={typo.fontProps} styleInfo={typo.styleInfo}>
            {typo.name}
          </Typo>
        ))}
      </TyposBox>

      <br />

      <TyposBox style={{ marginBottom: '160px' }}>
        {teacherExamples.map(example => (
          <TypoExample
            key={example.children}
            fontProps={example.fontProps}
            styleInfo={example.styleInfo}
            marginBottom={example.marginBottom}
          >
            {example.children}
          </TypoExample>
        ))}
      </TyposBox>

      <TyposBoxTitle>Headings - Student experience</TyposBoxTitle>
      <TyposBoxSubtitle>Major seconds harmonius scale</TyposBoxSubtitle>
      <TyposBox style={{ marginBottom: '80px' }}>
        {studentHeadings.map(typo => (
          <Typo key={typo.name} fontProps={typo.fontProps} styleInfo={typo.styleInfo}>
            {typo.name}
          </Typo>
        ))}
      </TyposBox>

      <TyposBoxTitle>Text styles - Student experience</TyposBoxTitle>
      <TyposBoxSubtitle>Perfect fourth harmonius scale</TyposBoxSubtitle>
      <TyposBox>
        {studentStyles.map(typo => (
          <Typo key={typo.name} fontProps={typo.fontProps} styleInfo={typo.styleInfo}>
            {typo.name}
          </Typo>
        ))}
      </TyposBox>
    </DocsWrapper>
  );
};

export default Typography;
