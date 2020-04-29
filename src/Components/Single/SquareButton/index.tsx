import { TouchableOpacityStyled, TextStyled } from "./styled";
import React, { FC, useCallback } from "react";
import { Days } from "@/redux/actions";

export interface Props {
  title: string;
  onPress(day: Days): void;
  isActive: boolean;
}

export const SquareButton: FC<Props> = ({ title, onPress, isActive }) => {
  const handleOnPress = useCallback(onPress, []);

  return (
    <TouchableOpacityStyled onPress={handleOnPress} isActive={isActive}>
      <TextStyled>{title}</TextStyled>
    </TouchableOpacityStyled>
  );
};
