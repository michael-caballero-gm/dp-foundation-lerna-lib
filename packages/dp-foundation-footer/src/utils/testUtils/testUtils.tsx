import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@theme/baseTheme';

const Providers = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const customRender = (ui, options?): RenderResult => render(ui, { wrapper: Providers, ...options });

/**
 * Window.location.href assignation for navigation triggers error when trying to execute, calling this function at the begining of your test file
 * prevents the error to happen
 */
export const preventWindowNavigationError = () => {
  delete window.location;
  window.location = {
    href: '',
  } as any;
};

/**
 * Injects in the global scope an implementation of a given hook returning the expected fake value
 * it is required to add jest.mock('~/lib/hooks'); at the beginning of your .spec file
 * @param mockHooks List of Hooks required to be mocked by a given test case
 */
export const mockCustomHooks = (mockHooks: Array<{ hook; returnedValue }>) => {
  mockHooks.forEach(({ hook, returnedValue }) => {
    hook.mockReturnValue(returnedValue);
  });
};

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
