import styled from "styled-components";

const HeaderText = styled.h2`
  padding: 15px;
`;

const HeaderContainer = styled.section`
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>test</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
