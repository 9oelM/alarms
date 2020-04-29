import React, { FC } from "react";
import { SafeAreaViewContainer, Container, Title } from "./styled";

export const Landing: FC = () => {
  return (
    <SafeAreaViewContainer>
      <Container>
        <Title>Alarms</Title>
      </Container>
    </SafeAreaViewContainer>
  );
};
