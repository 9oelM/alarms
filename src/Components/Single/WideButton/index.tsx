import React, { FC } from "react";
import { TouchableOpacityStyled, TextStyled } from "./styled";

export interface Props {
  onPress(): void;
  title: string;
}

export const WideButton: FC<Props> = ({ onPress, title }) => {
  return (
    <TouchableOpacityStyled onPress={onPress}>
      <TextStyled>{title}</TextStyled>
    </TouchableOpacityStyled>
  );
};
