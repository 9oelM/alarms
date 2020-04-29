import styled from "styled-components/native";
import React, { FC } from "react";

export const SafeAreaViewContainer = styled.SafeAreaView({
  flex: 1,
});

export function withSafeAreaView<T>(Component: FC<T>): FC<T> {
  return (props: T & any) => (
    <SafeAreaViewContainer>
      <Component {...props} />
    </SafeAreaViewContainer>
  );
}
