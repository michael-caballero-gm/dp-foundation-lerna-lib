import React from 'react';
import styled from 'styled-components';

import { Footer } from './Footer.component';

const StyledContainer = styled.div`
  > div {
    margin-left: 10px;
  }
`;

/* Storybook Footer */
export default {
  title: 'Organisms/Footer',
  component: Footer,
};

export const Default = (props) => <Footer {...props}/>;
