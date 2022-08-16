import { ReactElement } from "react";
import styled from "styled-components";

interface IButton {
  buttonText: string;
}

const BasicButton = styled.button`
  background-color: gray;
  border-radius: 3px;
  border: 2px solid gray;
  color: white;
  margin: 0 20px;
  padding: 0 20px;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: gray;
  }
`;

const SecondaryButton = styled(BasicButton)`
  background-color: green;
  border: 2px solid green;
  &:hover {
    background-color: white;
    color: green;
  }
`;

export const Button = ({ buttonText }: IButton): ReactElement => {
  return <BasicButton>{buttonText}</BasicButton>;
};

export const GreenButton = ({ buttonText }: IButton): ReactElement => {
  return <SecondaryButton>{buttonText}</SecondaryButton>;
};
