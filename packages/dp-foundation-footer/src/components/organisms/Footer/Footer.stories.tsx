import React from 'react';

import { Footer } from './Footer.component';

/* Storybook Footer */
export default {
  title: 'Organisms/Footer',
  component: Footer,
  args: {
    links: [
      { href: '#', text: 'Lorem' },
      { href: '#', text: 'Ipsum' },
      { href: '#', text: 'Dolor' },
      { href: '#', text: 'Sit Amet' },
    ]
  }
};

export const Default = (props) => <Footer {...props}/>;
