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
}

const links = [
  { href: 'https://greatminds.org/terms-of-service', text: 'Terms of service' },
  { href: 'https://greatminds.org/privacy-policy', text: 'Privacy policy' },
  { href: 'https://legal.greatminds.org', text: 'Credits' },
  { href: 'https://www.requesteasy.com/5dfa66654e2a1d00045c7cdd', text: 'CA Residents: Do Not Sell My Info' },
];

const Links: React.FC = () => {
  return (
    <ul>
      { links.map((link: ILink) => (
        <li>
          <Link href={link.href} target="_blank" key={link.text}>{link.text}</Link>
        </li>
      ))
      }
    </ul>
  )
}

/**
 * Footer Component
 *
 * @param {IFooter} { appContext, links }
 * @prop {appContext}   -   defines if the footer is used in habitat apps or not
 */
export function Footer({ isHabitatContext = true }: IFooter) {
  const currentYear = (new Date()).getFullYear();
  return (
    <StyledFooter isHabitatContext={isHabitatContext} role='footer' aria-label='footer'>
      <LinksContainer aria-labelledby="secondary">
        <Links />
      </LinksContainer>

      <CopyRigthContainer>
        <p>
          {` © ${currentYear} GREAT MINDS PBC`}
        </p>
      </CopyRigthContainer>
    </StyledFooter>
  );
};
