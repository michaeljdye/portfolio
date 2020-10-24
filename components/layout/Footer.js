import styled from '@emotion/styled'
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { below } from '../../utils'

const Footer = () => (
  <FooterSection>
    <FooterContact>
      <FooterLogo
        src='/images/joey-dye-logo.png'
        alt='Joey Dye Fullstack Developer'
      />
      <div>
        <h3>Links</h3>
        <ul>
          <li>
            <a href='https://github.com/JoeyDye'>
              <FontAwesomeIcon icon={faGithub} />
              Github
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/dyejoey/'>
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
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="javascript:location='mailto:\u006a\u006f\u0065\u0079\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">
              <script type='text/javascript'>
                document.write('\u006a\u006f\u0065\u0079\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d')
              </script>
              <FontAwesomeIcon icon={faEnvelope} />
              Email me
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationArrow} />
            Nashville, TN
          </li>
        </ul>
      </div>
    </FooterContact>
    <FooterCopyright>
      <p>© {new Date().getFullYear()} Joey Dye | All Rights Reserved.</p>
    </FooterCopyright>
  </FooterSection>
)

const FooterSection = styled.div`
  background: var(--colorGray);
  color: var(--colorWhite);
`

const FooterContact = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px 0;

  ${below.phone`
    flex-direction: column;
    justify-content: center;
  `}

  h3 {
    text-align: center;

    &:after {
      content: '';
      display: block;
      background: var(--colorPrimary);
      width: 30px;
      height: 2px;
      margin: 10px auto 0;
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
      margin-bottom: 10px;
    }

    svg {
      margin-right: 5px;
    }
  }

  a {
    color: var(--colorWhite);
    text-decoration: none;
  }
`

const FooterLogo = styled.img`
  width: 300px;
  max-width: 100%;
  object-fit: contain;

  ${below.phone`
    margin: 0 auto;
  `}
`

const FooterCopyright = styled.div`
  background: var(--colorDark);
  display flex;
  justify-content: center;
  padding: 20px 0;
  text-transform: uppercase;

  p {
    margin: 0;
    letter-spacing: 2px;
    line-height: 1.5;
    font-size: 0.875rem;
    text-align: center;
  }
`

export default Footer
