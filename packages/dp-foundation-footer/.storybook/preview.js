import React from 'react';
import { baseTheme } from '@greatminds/dp-atomic-ui-lib';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalFonts from '~/fonts/globalFonts';
import '@greatminds/dp-icominds-lib/dist/css/style.css';

addDecorator(StoryFn => (
  <ThemeProvider theme={baseTheme}>
    <div>
      <GlobalFonts />
      <StoryFn />
    </div>
  </ThemeProvider>
));
