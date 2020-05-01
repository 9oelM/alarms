import React, { FC } from "react";
import { TouchableOpacityStyled, TextStyled } from "./styled";

export interface Props {
  onPress(): void;
  title: string;
  margin?: string;
  isActive: boolean;
}

export const WideButton: FC<Props> = ({ title, ...others }) => {
  return (
    <TouchableOpacityStyled activeOpacity={0.5} {...others}>
      <TextStyled>{title}</TextStyled>
    </TouchableOpacityStyled>
  );
};
