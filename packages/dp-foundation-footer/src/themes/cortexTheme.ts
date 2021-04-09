const colors = {
  beige: {
    180: '#7A7562',
    120: '#D6D7CB',
    100: '#EAEDE1',
    60: '#F2F4ED',
    40: '#F6F7F3',
  },
  em1: {
    base: '#7EBB52',
    80: '#1A661A',
    60: '#498A28',
    40: '#B9E29C',
    20: '#DBEECD',
  },
  em2: {
    base: '#FF5B35',
    80: '#D93D1A',
    60: '#E65427',
    40: '#F78C64',
    20: '#FCDECF',
  },
  error: {
    120: '#A82424',
    100: '#C42A2A',
    20: '#F0CCCC',
  },
  khaki: {
    180: '#877329',
    100: '#E3DABA',
  },
  n: {
    100: '#000000',
    90: '#1A1A1A',
    80: '#333333',
    60: '#666666',
    50: '#808080',
    40: '#999999',
    20: '#CCCCCC',
    10: '#E6E6E6',
    '04': '#F5F5F5',
    '02': '#FAFAFA',
  },
  olive: {
    160: '#606D37',
    100: '#B7C378',
  },
  pBlue: {
    100: '#9ED4FF',
    20: '#CADEF3',
  },
  pGreen: {
    100: '#7DE071',
    20: '#BEF3B3',
  },
  pOrange: {
    100: '#FF9A48',
    20: '#FFD4A6',
  },
  pPurple: {
    100: '#C37EDA',
    20: '#F1CFFC',
  },
  pYellow: {
    100: '#F9CD19',
    20: '#FAEC8F',
  },
  phD: {
    base: '#845AA2',
    80: '#65328A',
    60: '#724494',
    40: '#B798CD',
    20: '#E7DBF0',
  },
  primary: {
    base: '#407177',
    180: '#2A5156',
    140: '#649295',
    120: '#7CA3A1',
    100: '#96B5AD',
    20: '#E3F2EE',
  },
  success: {
    120: '#008537',
    100: '#00A344',
    20: '#D4EDDE',
  },
  terracotta: {
    160: '#9C4719',
    100: '#E4844F',
  },
  warning: {
    120: '#CD920A',
    100: '#EEBB0B',
    20: '#F9EAC8',
  },
  white: '#FFFFFF',
  witWisdom: {
    base: '#7CC7F1',
    80: '#46A6DE',
    60: '#64B8E9',
    40: '#8FCFF3',
    20: '#D1EBFA',
  },
};

const typography = {
  fonts: {
    primary: 'Circular Std',
    studentExp: 'Quicksand',
    teacherExp: 'Circular Std',
  },
  sizes: {
    headings: {
      h1: '1.266em', // 20.25 : 16
      h2: '1.125em', // 18 : 16
      h3: '1em', // 16 : 16
      h4: '0.889em', // 14.22 : 16
    },
    textStyles: {
      button: '0.875em', // 14 : 16
      huge: '3.157em', // 50.52 : 16
      mainTitle: '1.777em', // 28.43 : 16
      minorTitle: {
        studentExp: '0.875em', // 14 : 16
        teacherExp: '0.75em', // 12 : 16
      },
      subtitle: '1.333em', // 21.33 : 16
      textBase: '1em', // 16 : 16
      textLink: '1em', // 16 : 16
      textSmall: '0.875em', // 14 : 16
    },
  },
  weights: {
    black: '900',
    bold: '700',
    book: '400',
    medium: '500',
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
  },
  small: '4px',
  zero: '0',
};

const cortexTheme = {
  colors,
  typography,
  measurements,
};

export type CortexTheme = typeof cortexTheme;
export default cortexTheme;
