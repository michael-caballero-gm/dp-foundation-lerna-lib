import styled, { css, ThemeProps } from 'styled-components';
import { BaseTheme } from '~/themes/baseTheme';

export const StyledFooter = styled.footer(
  ({ theme: { colors, typography, measurements } }: ThemeProps<BaseTheme>) => css`
    background-color: ${colors.beige[60]};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 56px;
    min-height: 48px;
    width: 100%;
    border-top: 1px solid ${colors.beige[140]};

    a,
    p {
      font-size: ${typography.sizes.extraSmall};
      text-transform: uppercase;
      line-height: 1.333;
      letter-spacing: 1px;
      font-family: ${typography.fonts.primary};
    }

    .links {
      display: flex;
      a {
        text-decoration: none;
        margin-right: calc(${measurements.extraLarge} * 2);
      }
    }

    .copyright {
      display: flex;
      p {
        color: ${colors.n[100]};

        &:not(:first-child):before {
          content: '|';
          margin: 0 5px;
        }
      }
    }
  `,
);
