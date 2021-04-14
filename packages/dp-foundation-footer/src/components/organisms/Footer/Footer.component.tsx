import React from 'react';
import { StyledFooter, LinksContainer, CopyRigthContainer } from './Footer.styled';
import { Link } from '@greatminds/dp-atomic-ui-lib';

interface ILink {
  href: string;
  text: string;
}
interface IFooter {
  // Defines if the footer is used in habitat apps or not
  isHabitatContext?: boolean;
  links: ILink[];
}

/**
 * Footer Component
 *
 * @param {IFooter} { isHabitatContext, links }
 * @prop {isHabitatContext}   -   defines if the footer is used in habitat apps or not
 * @prop {links}              -   Links list
 * @return {*} 
 */
export function Footer ({ isHabitatContext, links }: IFooter) {
  const currentYear = (new Date()).getFullYear();
  return(
    <StyledFooter>
      <LinksContainer>
        <ul>
          { links.map((link: ILink) => (
            <li>
              <Link href={link.href} target="_blank" key={link.text}>{link.text}</Link>
            </li>
            ))
          }
        </ul>
      </LinksContainer>

      <CopyRigthContainer>
        <p>
          {` © ${currentYear} GREAT MINDS PBC`}
        </p>
      </CopyRigthContainer>
    </StyledFooter>
  );
};