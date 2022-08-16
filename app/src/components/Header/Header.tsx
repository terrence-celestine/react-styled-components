import styled from "styled-components";
import { ReactElement } from "react";

const HeaderText = styled.h2`
  padding: 15px;
`;

const HeaderContainer = styled.section`
  text-align: center;
`;

const Header = (): ReactElement => {
  return (
    <HeaderContainer>
      <HeaderText>My Header</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
