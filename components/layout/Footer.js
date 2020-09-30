import styled from '@emotion/styled'
import { faCentercode } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <FooterSection>
    <FooterContact>
      <FooterLogo
        src='/images/joey-dye-logo.png'
        alt='Joey Dye Fullstack Developer'
      />
      <div>
        <h3>Joey Dye</h3>
        <ul>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href='mailto:joey@gmail.com'>joey@gmail.com</a>
          </li>
          <li>Nashville, TN</li>
        </ul>
      </div>
    </FooterContact>
    <FooterCopyright>
      <p>© {new Date().getFullYear()} Joey Dye. | All Rights Reserved.</p>
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

  h3 {
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
  }

  a {
    color: var(--colorWhite);
  }
`

const FooterLogo = styled.img`
  width: 300px;
`

const FooterCopyright = styled.div`
  background: var(--colorDark);
  display flex;
  justify-content: center;
  padding: 20px 0;
  text-transform: uppercase;

  p {
    letter-spacing: 2px;
  }
`

export default Footer
