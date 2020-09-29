import styled from '@emotion/styled'

const Footer = () => (
  <FooterSection>
    <FooterContact>
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
    <div>© {new Date().getFullYear()} Joey Dye. | All Rights Reserved.</div>
  </FooterSection>
)

const FooterSection = styled.div``

const FooterContact = styled.div`
  display: flex;
  justify-content: space-around;
`

export default Footer
