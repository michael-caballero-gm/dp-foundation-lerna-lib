import React from 'react';
import styled, { css } from 'styled-components';
import baseTheme from '../../themes/cortexTheme';

const { colors, typography } = baseTheme;

const FontSampleTitle = styled.h3`
  font-size: 20.25px;
  font-weight: ${typography.weights.book};
  line-height: ${32 / 20.25};
  margin-bottom: 24px;
`;

const FontSampleText = styled.h2(({ fontFamily }) => {
  return css`
    font-family: ${fontFamily};
    font-size: 136px;
    margin-bottom: 64px;
  `;
});

const FontSampleLetters = styled.p(({ fontFamily }) => {
  return css`
    font-family: ${fontFamily};
    font-size: 16px;
    letter-spacing: 8px;
    line-height: ${32 / 16};
  `;
});

export const FontSample = ({ fontFamily, children }) => {
  return (
    <div style={{ marginBottom: '160px' }}>
      <FontSampleTitle>{children}</FontSampleTitle>
      <FontSampleText fontFamily={fontFamily}>{fontFamily}</FontSampleText>
      <FontSampleLetters>
        A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w
        X x Y x Z z
      </FontSampleLetters>
    </div>
  );
};

export const TyposBoxTitle = styled.h2`
  font-weight: ${typography.weights.book};
  font-size: 28.43px;
  line-height: calc(56 / 28.43);
`;

export const TyposBoxSubtitle = styled.h3`
  margin-bottom: 32px;

  font-weight: ${typography.weights.book};
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const TyposBox = styled.div`
  max-width: 1280px;

  padding: 64px;

  background: ${colors.n['04']};
`;

const TypoWrapper = styled.div`
  margin-bottom: 56px;

  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TypoSampleText = styled.div(({ fontProps }) => {
  const { fontFamily, fontWeight, fontSize, lineHeight, color, minorTitle, textLink } = fontProps;

  return css`
    margin-bottom: 16px;

    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${color ? color : 'inherit'};

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${minorTitle &&
      css`
        text-transform: uppercase;
        letter-spacing: 0.4175em;
      `}

    ${textLink &&
      css`
        text-decoration: underline;
      `}
  `;
});

const TypoStyleInfo = styled.div`
  font-weight: ${typography.weights.book};
  font-size: 14px;
  color: ${colors.n['60']};
`;

export const Typo = ({ children, fontProps, styleInfo }) => {
  return (
    <TypoWrapper>
      <TypoSampleText fontProps={fontProps}>
        {children} The quick brown fox jumps over the lazy dog.
      </TypoSampleText>
      <TypoStyleInfo>
        font-family: {styleInfo.fontFamily}; font-size: {fontProps.fontSize} - {styleInfo.fontSize};
        font-weight: {styleInfo.fontWeight}; color: {styleInfo.color}; Usage: {styleInfo.usage}
      </TypoStyleInfo>
    </TypoWrapper>
  );
};

const TypoExampleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
`;

const TypoExampleText = styled.div(({ fontProps }) => {
  const {
    fontFamily,
    fontWeight,
    fontSize,
    lineHeight,
    color,
    minorTitle,
    textLink,
    isButton,
  } = fontProps;

  return css`
    max-width: 650px;
    width: 100%;

    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    color: ${color ? color : 'inherit'};

    ${isButton &&
      css`
        width: 120px;

        padding: 8px;

        text-align: center;

        border-radius: 4px;
        background: ${colors.primary.base};
      `}

    ${minorTitle &&
      css`
        text-transform: uppercase;
        letter-spacing: 0.4175em;
      `}

    ${textLink &&
      css`
        text-decoration: underline;
      `}
  `;
});

const TypoExampleStyleInfo = styled.div`
  min-width: 165px;

  margin-left: 32px;

  > h3 {
    margin-bottom: 4px;

    font-weight: ${typography.weights.bold};
    font-size: 16px;
  }

  > p {
    font-weight: ${typography.weights.book};
    font-size: 12px;

    white-space: nowrap;
  }
`;

export const TypoExample = ({ children, fontProps, styleInfo, marginBottom }) => {
  return (
    <TypoExampleWrapper style={{ marginBottom: marginBottom ? marginBottom : 0 }}>
      <TypoExampleText fontProps={fontProps}>{children}</TypoExampleText>
      <TypoExampleStyleInfo>
        <h3>{styleInfo.textStyle}</h3>
        <p>
          {fontProps.fontFamily} {fontProps.fontSize} - {styleInfo.fontSize}
        </p>
      </TypoExampleStyleInfo>
    </TypoExampleWrapper>
  );
};
