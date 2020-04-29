import styled from "styled-components/native";
import { outMostViewPadding } from "@/constants/padding";

export const ContainerStyled = styled.View({
  flex: 1,
  alignItems: `center`,
  justifyContent: `flex-start`,
  flexDirection: `row`,
});

export const maginNumberImNotSureAboutThatMakesPaddingCorrect = 30;

export const SwitchContainerStyled = styled.View({
  flex: 1,
  position: `absolute`,
  right: outMostViewPadding - maginNumberImNotSureAboutThatMakesPaddingCorrect,
});
