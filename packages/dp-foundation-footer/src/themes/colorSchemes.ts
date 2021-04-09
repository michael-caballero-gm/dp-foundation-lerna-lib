const eurekaMath2 = {
  colors: {
    black: '#000',
    correct: {
      base: '#67B430',
      'dark-80': '#CDD1DD',
      'light-20': '#EDEEF2',
    },
    incorrect: {
      base: '#C42A2A',
      'dark-80': '#911F1F',
      'light-20': '#F2C2C2',
    },
    neutral: {
      base: '#E6E7EC',
      'dark-60': '#CDD1DD',
      'light-20': '#FDFDFD',
      'light-30': '#F7F7F9',
      'light-40': '#EDEEF2',
    },
    primary: {
      base: '#F26A36',
      'dark-60': '#E65427',
      'dark-80': '#D93D1A',
      'light-40': '#F6A585',
      'light-50': '#F37F53',
    },
    warning: {
      base: '#EEBB0B',
      'dark-80': '#D93D1A',
      'light-20': '#E65427',
    },
    white: '#FFF',
  },
};

const colorSchemes = {
  eurekaMath2,
};

export type ColorSchemes = typeof colorSchemes;
export default colorSchemes;
