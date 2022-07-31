import styled from "styled-components";

const Title = styled.h1`
  font-size: 25px;
  line-height: 27px;
  color: ${(props) => props.color};
`;

const PrimaryButton = styled.button`
  background-color: #fa4169;
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  color: #fff;
  border-radius: 15px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: #4380ff;
`;

const Header = () => {
  return (
    <div>
      <Title>Web Page Title</Title>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </div>
  );
};

export default Header;
