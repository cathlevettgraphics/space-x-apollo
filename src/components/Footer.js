import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        <FooterLink href="https://cathlevett.com/">
          cath levett graphics
        </FooterLink>
      </FooterText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  max-width: 343px;
  border-top: 2px solid grey;
  margin: 0 auto;
  padding-top: 8px;
  background-color: #fff;
  margin-bottom: 0;
`;

const FooterText = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const FooterLink = styled.a`
  color: grey;

  &:hover {
    color: hotpink;
    text-decoration: none;
  }
`;

export default Footer;
