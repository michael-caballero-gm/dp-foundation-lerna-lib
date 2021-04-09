import styled from 'styled-components';
import baseTheme from '../themes/cortexTheme';

const { colors, typography } = baseTheme;

export const DocsWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  width: 100%;

  font-family: ${typography.fonts.primary};
  color: ${colors.n['90']};

  background: ${colors.white};
`;

export const DocsIntro = styled.div`
  > h3 {
    margin-bottom: 8px;

    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 10px;
  }

  > h2 {
    margin-bottom: 40px;

    font-weight: ${typography.weights.bold};
    font-size: 40px;
  }

  > p {
    font-size: 16px;
  }
`;
