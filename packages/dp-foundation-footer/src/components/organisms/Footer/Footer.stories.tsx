import React from 'react';

import { Footer } from './Footer.component';

/* Storybook Footer */
export default {
  title: 'Organisms/Footer',
  component: Footer,
  args: {
    links: [
      { href: 'https://greatminds.org/terms-of-service', text: 'Terms of service' },
      { href: 'https://greatminds.org/privacy-policy', text: 'Privacy policy' },
      { href: 'https://greatminds.org', text: 'Credits' },
      { href: 'https://www.requesteasy.com/5dfa66654e2a1d00045c7cdd', text: 'CA RESIDENTS: DO NOT SELL MY INFO' },
    ]
  }
};

export const Default = (props) => <Footer {...props}/>;
