import React from 'react';

import { Footer } from './Footer.component';

/* Storybook Footer */
export default {
  title: 'Organisms/Footer',
  component: Footer,
  args: {
    links: [
      { href: 'https://google.com', text: 'Google' },
      { href: 'https://en.wikipedia.org/wiki/Unicorn', text: 'Unicorns' },
      { href: 'https://en.wikipedia.org/wiki/Kitten', text: 'Kittens' },
    ]
  }
};

export const Default = (props) => <Footer {...props}/>;
