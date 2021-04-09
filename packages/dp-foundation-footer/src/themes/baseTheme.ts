const colors = {
  beige: {
    20: '#FAFBF9',
    40: '#F6F7F3',
    60: '#F2F4ED',
    100: '#EAEDE1',
    120: '#D6D7CB',
    140: '#C4C2AA',
    180: '#7A7562',
  },
  black: '#000000',
  correct: {
    base: '#67B430',
    'dark-80': '#CDD1DD',
    'light-20': '#EDEEF2',
  },
  gmBlue: {
    base: '#0F526F',
    'dark-60': '#638EA1',
    'dark-80': '#3D738A',
    'light-20': '#E6EDF0',
    'light-40': '#9FBAC5',
  },
  incorrect: {
    base: '#C42A2A',
    'dark-80': '#911F1F',
    'light-20': '#F2C2C2',
  },
  neutral: {
    base: '#E6E8EA',
    'dark-60': '#CCD3D5',
    'light-20': '#FCFCFC',
    'light-30': '#F5F6F7',
    'light-40': '#EDF0F2',
  },
  n: {
    '04': '#F5F5F5',
    10: '#E6E6E6',
    20: '#CCCCCC',
    40: '#999999',
    60: '#666666',
    80: '#333333',
    100: '#000000',
  },
  pBlue: {
    100: '#9ED4FF',
    20: '#CADEF3',
    10: '#E9F7FB',
  },
  olive: {
    160: '#606D37',
    100: '#B7C378',
    60: '#C7E07D',
  },
  primary: {
    base: '#0B212C',
    'dark-60': '#647881',
    'dark-80': '#4A5D66',
    'light-40': '#A6B5BD',
    'light-50': '#7D9099',
    'light-60': '#ABD5D8',
    0: '#407177',
    100: '#96B5AD',
    120: '#7CA3A1',
    140: '#649295',
  },
  terracotta: {
    100: '#E4844F',
  },
  transparent: {
    base: 'transparent',
    black: 'rgba(0, 0, 0, 16%)',
  },
  warning: {
    base: '#EEBB0B',
    'dark-80': '#D93D1A',
    'light-20': '#E65427',
  },
  white: '#FFFFFF',
  khaki: {
    100: '#E3DABA',
  },
};

const measurements = {
  extraExtraLarge: '20px',
  extraExtraSmall: '1px',
  extraLarge: '16px',
  extraSmall: '2px',
  large: '12px',
  medium: '8px',
  shadows: {
    'elevation-1': '0px 1px 1px 0px',
    'elevation-2': '0px 1px 3px 0px',
    'elevation-3': '0px 2px 4px 0px',
    'elevation-4': '0px 4px 8px 0px',
    'elevation-5': '0px 8px 16px 0px',
    'elevation-6': '0px 16px 24px 0px',
    medium: '0px 0px 0px 5px',
    small: '0px 0px 0px 2px',
    extraSmall: '0px 0px 0px 1px',
  },
  small: '4px',
  zero: '0',
};

const typography = {
  fonts: {
    primary: 'Circular std',
    studentExp: 'Quicksand',
    teacherExp: 'Circular Std',
  },
  rootFontSize: '16px',
  sizes: {
    extraExtraHuge: '3.5rem', // 56px
    extraExtraLarge: '1.625rem', // 26px
    extraHuge: '3.25rem', // 52px
    extraLarge: '1.375rem', // 22px
    extraSmall: '0.75rem', // 12px
    huge: '2.25rem', // 36px
    large: '1.125rem', // 18px
    medium: '1rem', // 16px
    small: '0.875rem', // 14px
  },
  weights: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
};

const iconology = {
  sizes: {
    huge: '2.rem', // 32px
    large: '1.625rem', // 26px
    medium: '1.25rem', // 20px
    small: '1.063rem', // 17px
  },
};

const baseTheme = {
  colors,
  measurements,
  typography,
  iconology,
};

export type BaseTheme = typeof baseTheme;
export default baseTheme;
