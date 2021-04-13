import React from 'react';
import { StyledFooter } from './Footer.styled';
import { Link } from '@greatminds/dp-atomic-ui-lib';

interface IFooter {
  /**
   * Defines if the footer is used in habitat apps or not
   */
  isHabitatContext?: boolean;
}

export function Footer ({isHabitatContext}: IFooter){
  return(
    // StyledFooter was stolen from Cortex, DO NOT leave it like this, implement own styles
    <StyledFooter>
      {isHabitatContext ? <p>The footer should be clear</p> : <p>The footer should be dark</p>}<br/>
      here we could reuse Cortex components like <Link href="https://www.google.com" target="_blank">Link</Link>  <span>or make our own implementation</span>
    </StyledFooter>
  );
};

// export default Footer;
