import React from 'react';
import { StyledFooter } from './Footer.styled';
import { Link } from '@greatminds/dp-atomic-ui-lib';

interface IFooter {
  /**
   * Defines if the footer is used in habitat apps or not
   */
  isHabitatContext?: boolean;
}

export const Footer: React.FC<IFooter> = ({isHabitatContext = true}) => {
  return(
    // StyledFooter was stolen from Cortex, DO NOT leave it like this, implement own styles
    <StyledFooter>
      {isHabitatContext ? <span>The footer should be clear</span> : <span>The footer should be dark</span>}<br/>
      here we could reuse Cortex components like <Link href="https://www.google.com" target="_blank">Link</Link>  or make our own implementation
    </StyledFooter>
  );
};

// export default Footer;
