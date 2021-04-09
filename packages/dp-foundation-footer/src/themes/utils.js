export const reverseThemeColors = theme => {
  const reversedColors = {
    colors: {
      black: theme.colors.white,
      neutral: {
        base: theme.colors.primary['light-50'],
        'dark-60': theme.colors.neutral['light-40'],
        'light-20': theme.colors.primary['dark-80'],
        'light-30': theme.colors.primary['dark-60'],
        'light-40': theme.colors.primary['light-50'],
      },
      primary: {
        base: theme.colors.white,
        'dark-60': theme.colors.primary['dark-60'],
        'dark-80': theme.colors.neutral['dark-60'],
        'light-40': theme.colors.primary['light-50'],
        'light-50': theme.colors.primary['light-40'],
      },
      white: theme.colors.primary.base,
      beige: {
        20: theme.colors.beige['180'],
        40: theme.colors.beige['120'],
        60: theme.colors.beige['100'],
        100: theme.colors.beige['60'],
        120: theme.colors.beige['40'],
        180: theme.colors.beige['20'],
      },
      n: {
        '04': theme.colors.n['100'],
        10: theme.colors.n['60'],
        20: '#CCCCCC',
        60: theme.colors.n['10'],
        100: theme.colors.n['04'],
      },
    },
  };

  return { ...theme, ...reversedColors };
};
