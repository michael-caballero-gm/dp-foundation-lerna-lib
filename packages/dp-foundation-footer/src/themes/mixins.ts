import { css, FlattenSimpleInterpolation } from 'styled-components';
import baseTheme from './baseTheme';

export const withBorder = (
  color: string = baseTheme.colors.primary.base,
  width: string = baseTheme.measurements.extraExtraSmall,
): FlattenSimpleInterpolation => css`
  border: ${width} solid ${color};
`;

export const withBorderRadius = (
  borderRadius: string = baseTheme.measurements.small,
): FlattenSimpleInterpolation => css`
  border-radius: ${borderRadius};
`;

export const withBoxShadow = (
  color: string = baseTheme.colors.transparent.black,
): FlattenSimpleInterpolation => css`
  box-shadow: 2px 4px 10px ${color};
`;

export const withPadding = (paddings: string): FlattenSimpleInterpolation => {
  const interpolated = paddings
    .split(' ')
    .reduce(
      (result: string, measure: string): string => `${result}${baseTheme.measurements[measure]} `,
      '',
    );

  return css`
    padding: ${interpolated};
  `;
};

export const withFocus = (): FlattenSimpleInterpolation => css`
  outline: none;
  -webkit-appearance: none;
  box-shadow: ${`${baseTheme.colors.white} ${baseTheme.measurements.shadows.small},
      ${baseTheme.colors.primary['light-40']} ${baseTheme.measurements.shadows.medium}`};
`;

export const withMultipleOf = (measure: string, multi = 1): string => {
  const value = baseTheme.measurements[measure].split('px')[0];
  const multiple = parseInt(value, 10) * multi;
  return `${multiple}px`;
};

export const withScreenReaderOnlyText = () => css`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const withStyledScrollBar = () => css`
  /* custom scroll */
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${baseTheme.colors.neutral['light-30']};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${baseTheme.colors.primary.base};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Handle only for Firefox */
  scrollbar-color: ${baseTheme.colors.primary.base} ${baseTheme.colors.neutral['light-30']};
  scrollbar-width: thin;
`;
