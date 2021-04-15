import React from 'react';
import { StyledFooter, LinksContainer, CopyRigthContainer } from './Footer.styled';
import { Link } from '@greatminds/dp-atomic-ui-lib';

interface ILink {
  href: string;
  text: string;
}
interface IFooter {
  // Defines if the footer is used in habitat apps or not
  appContext?: 'habitat' | 'affirm';
  links: ILink[];
}

/**
 * Footer Component
 *
 * @param {IFooter} { appContext, links }
 * @prop {appContext}   -   defines if the footer is used in habitat apps or not
 * @prop {links}        -   Links list
 */
export function Footer ({ links, appContext }: IFooter) {
  const currentYear = (new Date()).getFullYear();
  return(
    <StyledFooter appContext={appContext} aria-label='footer' role='footer'>
      <LinksContainer aria-labelledby="secondary">
        <ul aria-label='links'>
          { links.map((link: ILink) => (
            <li>
              <Link href={link.href} target="_blank" key={link.text} >{link.text}</Link>
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

