import { TouchableOpacityStyled, TextStyled } from "./styled";
import React, { FC } from "react";

export interface Props {
  title: string;
  onPress(): void;
  isActive: boolean;
  width?: number;
  marginRight?: number;
}

export const SquareButton: FC<Props> = ({ title, ...others }) => {
  return (
    <TouchableOpacityStyled {...others}>
      <TextStyled>{title}</TextStyled>
    </TouchableOpacityStyled>
  );
};
