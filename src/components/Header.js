import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <NavText>
          <NavSpan>Falcon 9</NavSpan> The recyclable rocket
        </NavText>
      </HeaderNav>
      <HeroWrapper>
        <HeroStrapLine>Space X</HeroStrapLine>
        <HeroHeadline>Falcon 9 missions</HeroHeadline>
        <HeroStrapLine>The recyclable rocket</HeroStrapLine>
      </HeroWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;

const HeaderNav = styled.nav`
  background-color: #fff;
  padding: 16px 16px;
  margin-bottom: 0;
`;

const NavSpan = styled.span`
  font-weight: 900;
  color: hotpink;
`;

const NavText = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0;
  color: grey;
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: hotpink;
  height: 66vh;
  padding-bottom: 56px;
  margin-bottom: 32px;
`;

const HeroHeadline = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  color: white;
  padding-left: 16px;
  letter-spacing: -4px;
  line-height: 1.15;
  margin-bottom: 0;
`;

const HeroStrapLine = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: white;
  padding-left: 18px;
  margin-bottom: 0;
`;

export default Header;
