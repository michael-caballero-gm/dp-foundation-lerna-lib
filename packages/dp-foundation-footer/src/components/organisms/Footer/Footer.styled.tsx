import styled, { css, ThemeProps } from 'styled-components';
import { BaseTheme } from '~/themes/baseTheme';

export interface IFooterProps {
  isHabitatContext: boolean;
}

export const LinksContainer = styled.nav(
  ({ theme: { measurements } }: ThemeProps<BaseTheme>) => css`
    display: flex;
    a {
      margin-right: calc(${measurements.extraLarge} * 2);
      text-decoration: none;
    }
    ul {
      padding: 0;
      display: flex;
    }
    li {
      list-style-type: none
    }
  `,
);

export const CopyRigthContainer = styled.div(
  () => css`
    display: flex;
    p {
      &:not(:first-child):before {
        content: '|';
        margin: 0 5px;
      }
    }
  `,
);

export const StyledFooter = styled.footer<IFooterProps>(
  ({ theme: { colors, typography }, isHabitatContext }) => css`
    align-items: center;
    background-color: ${isHabitatContext ? colors.beige[60] : colors.white };
    border-top: 1px solid ${colors.beige[140]};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 48px;
    padding: 12px 0;
    width: 100%;

    a,
    p {
      font-family: ${typography.fonts.primary};
      font-size: ${typography.sizes.extraSmall};
      letter-spacing: 1px;
      line-height: 1.333;
      text-transform: uppercase;
    }

    @media only screen and (min-width: 769px) {
      flex-direction: row;
      padding: 0 56px;
      justify-content: space-between;
    }
  `,
);