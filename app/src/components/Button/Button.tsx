import { ReactElement } from "react";
import styled from "styled-components";

interface IButton {
  buttonText: string;
}

const BasicButton = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  margin: 0 20px;
  padding: 0 20px;
`;

const SecondaryButton = styled(BasicButton)`
  background-color: green;
  color: white;
  border: 2px solid green;
`;

export const Button = ({ buttonText }: IButton): ReactElement => {
  return <BasicButton>{buttonText}</BasicButton>;
};

export const GreenButton = ({ buttonText }: IButton): ReactElement => {
  return <SecondaryButton>{buttonText}</SecondaryButton>;
};
