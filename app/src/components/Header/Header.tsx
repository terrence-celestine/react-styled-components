import styled from "styled-components";

const Title = styled.h1`
  font-size: 25px;
  line-height: 27px;
  color: ${(props) => props.color};
`;

const Header = () => {
  return (
    <div>
      <Title color="red">Hello World</Title>
    </div>
  );
};

export default Header;
