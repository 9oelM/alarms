import React, { FC } from "react";
import { ViewStyled } from "./styled";
import { SafeAreaView } from "react-native";
import { Title } from "@/Components/Single/Title";
import { Normalizer } from "@/styled/Padding";
import { normalizer8px, padding25px } from "@/constants/padding";

export interface Props {
  title: string;
}
export const GeneralContainer: FC<Props> = ({ children, title }) => {
  return (
    <ViewStyled>
      <Title>{title}</Title>
      <SafeAreaView>
        {normalizer8px}
        {padding25px}
        {children}
      </SafeAreaView>
      <Normalizer height="80px" />
    </ViewStyled>
  );
};
