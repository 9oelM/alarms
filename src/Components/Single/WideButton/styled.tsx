import styled from "styled-components/native";
import { Gray } from "@/constants/colors";
import { WithDarkMode } from "@/util/withDarkMode";

export const TextStyled = styled.Text({
  color: Gray.Gray100,
  fontSize: 40,
  fontWeight: `bold`,
  fontFamily: `Helvetica Neue`,
});

export interface WideButtonStyledProps {
  isActive: boolean;
  margin?: string;
}

export const TouchableOpacityStyled = WithDarkMode(
  styled.TouchableOpacity<WideButtonStyledProps>(({ isActive, margin }) => {
    const backgroundColor = isActive ? Gray.Gray500 : Gray.Gray800;
    return {
      backgroundColor,
      borderRadius: 15,
      height: 69,
      margin: margin ?? 0,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    };
  }),
);
