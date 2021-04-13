import React from 'react';
import { baseTheme } from '@greatminds/dp-atomic-ui-lib';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalFonts from '../fonts/globalFonts';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StoryFn => (
  <ThemeProvider theme={baseTheme}>
    <div>
      <GlobalFonts />
      <StoryFn />
    </div>
  </ThemeProvider>
));
