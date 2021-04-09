import React from 'react';
import styled, { css } from 'styled-components';
import baseTheme from '../../themes/cortexTheme';

const { colors, typography } = baseTheme;

const ColorBox = styled.div(({ backgroundColor, border }) => {
  return css`
    width: 240px;
    height: 160px;

    margin-bottom: 16px;

    position: relative;

    border: ${border ? `1px solid ${colors.n['20']}` : 'none'};
    border-radius: 4px;
    background: ${backgroundColor};
  `;
});

const ATagWrapper = styled.div`
  width: 32px;
  margin: 0 2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const ATagText = styled.div(({ small, color }) => {
  return css`
    width: 100%;

    margin-bottom: 2px;

    font-size: ${small ? '16px' : '24px'};
    color: ${color};
    text-align: center;
  `;
});

const ATagBadge = styled.div`
  width: 100%;
  height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: ${typography.weights.medium};
  font-size: 9px;
  color: ${colors.white};

  background: ${colors.n['100']};
  border-radius: 8px;
`;

const ATag = ({ small, color, pass }) => {
  return (
    <ATagWrapper>
      <ATagText small={small} color={color}>
        A
      </ATagText>
      <ATagBadge>{pass ? 'Pass' : 'Fail'}</ATagBadge>
    </ATagWrapper>
  );
};

const ATagsWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translate(-50%);

  display: flex;
`;

const ATags = ({ passList }) => {
  return (
    <ATagsWrapper>
      <ATag small={true} color={colors.n['90']} pass={passList[0]} />
      <ATag pass={false} color={colors.n['90']} pass={passList[1]} />
      <ATag small={true} color={colors.white} pass={passList[2]} />
      <ATag pass={false} color={colors.white} pass={passList[3]} />
    </ATagsWrapper>
  );
};

const ColorInfoTitle = styled.h3`
  margin-bottom: 8px;

  font-weight: ${typography.weights.black};
  font-size: 21px;
`;

const ColorInfoHex = styled.p`
  font-weight: ${typography.weights.book};
  font-size: 21px;
`;

const ColorInfo = ({ name, backgroundColor }) => {
  return (
    <div>
      <ColorInfoTitle>{name}</ColorInfoTitle>
      <ColorInfoHex>{backgroundColor}</ColorInfoHex>
    </div>
  );
};

const RowItem = styled.div`
  margin-right: 48px;

  &:last-child {
    margin-right: 0;
  }
`;

const RowWrapper = styled.div`
  margin-bottom: 96px;

  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Row = ({ list }) => {
  return (
    <RowWrapper>
      {list.map(item => (
        <RowItem>
          <ColorBox key={item.name} backgroundColor={item.backgroundColor} border={item.border}>
            <ATags passList={item.passList} />
          </ColorBox>
          <ColorInfo key={item.name} name={item.name} backgroundColor={item.backgroundColor} />
        </RowItem>
      ))}
    </RowWrapper>
  );
};
