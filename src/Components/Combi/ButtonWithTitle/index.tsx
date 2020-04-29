import { WideButton } from "@/Components/Single/WideButton";
import React, { FC } from "react";
import { Title } from "@/Components/Single/Title";
import { View } from "react-native";

export interface Props {
  buttonTitle: string;
  mainTitle: string;
}

export const ButtonWithTitle: FC<Props> = ({ mainTitle, buttonTitle }) => {
  return (
    <View>
      <Title>{mainTitle}</Title>
      <WideButton onPress={() => {}} title={buttonTitle} />
    </View>
  );
};
