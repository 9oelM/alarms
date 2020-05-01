import { WideButton } from "@/Components/Single/WideButton";
import React, { FC } from "react";
import { Title } from "@/Components/Single/Title";
import { View } from "react-native";

export interface Props {
  buttonTitle: string;
  mainTitle: string;
  isActive?: boolean;
  onPress(): void;
}

export const ButtonWithTitle: FC<Props> = ({
  mainTitle,
  buttonTitle,
  onPress,
  isActive,
}) => {
  return (
    <View>
      <Title>{mainTitle}</Title>
      <WideButton
        isActive={Boolean(isActive)}
        onPress={onPress}
        title={buttonTitle}
      />
    </View>
  );
};
