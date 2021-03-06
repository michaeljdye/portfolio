import styled from '@emotion/styled'
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import Obfuscate from 'react-obfuscate'
import { faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { above } from '../../utils'

const Footer = () => (
  <FooterSection>
    <FooterContent>
      <FooterLogo
        src='/images/michael-dye-logo.png'
        alt='MIchael Dye Fullstack Developer'
      />
      <div>
        <h3>Links</h3>
        <ul>
          <li>
            <a href='https://github.com/michaeljdye'>
              <FontAwesomeIcon icon={faGithub} />
              Github
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/dyemichael/'>
              <FontAwesomeIcon icon={faLinkedinIn} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href='https://twitter.com/joey_m_dye'>
              <FontAwesomeIcon icon={faTwitter} />
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <FooterContact>
        <h3>Contact</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <Obfuscate email='joeymdye@gmail.com'>Email me</Obfuscate>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationArrow} />
            Nashville, TN
          </li>
        </ul>
      </FooterContact>
    </FooterContent>
    <FooterCopyright>
      <p>© {new Date().getFullYear()} MIchael Dye | All Rights Reserved.</p>
    </FooterCopyright>
  </FooterSection>
)

const FooterSection = styled.div`
  background: var(--colorGray);
  color: var(--colorWhite);
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.75rem 0;

  ${above.tablet`
    flex-direction: row;
    justify-content: space-around;
  `}

  h3 {
    text-align: center;

    &:after {
      content: '';
      display: block;
      background: var(--colorPrimary);
      width: 30%;
      height: 2px;
      margin: 0.625rem auto 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 0.625rem;
    }

    svg {
      margin-right: 0.3125rem;
    }
  }

  a {
    color: var(--colorWhite);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: var(--colorPrimary);
    }
  }
`

const FooterLogo = styled.img`
  width: 100%;
  max-width: 300px;
  object-fit: contain;
  margin: 0 auto;

  ${above.tablet`
    margin: 0;
  `}
`

const FooterCopyright = styled.div`
  background: var(--colorDark);
  display flex;
  justify-content: center;
  padding: 1.25rem 0;
  text-transform: uppercase;

  p {
    margin: 0;
    letter-spacing: 2px;
    line-height: 1.5;
    font-size: 0.875rem;
    text-align: center;
  }
`

const FooterContact = styled.div`
  li:first-of-type {
    transition: all 0.3s ease;

    &:hover {
      color: var(--colorPrimary);
    }
  }
`

export default Footer
