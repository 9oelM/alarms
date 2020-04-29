import styled from "styled-components/native";
import { Gray } from "@/constants/colors";
import { WithDarkMode } from "@/util/withDarkMode";

export const TextStyled = styled.Text({
  color: Gray.Gray100,
  fontSize: 20,
  fontWeight: `bold`,
  fontFamily: `Helvetica Neue`,
});

export interface WideButtonStyledProps {
  isActive: boolean;
}

export const TouchableOpacityStyled = WithDarkMode(
  styled.TouchableOpacity<WideButtonStyledProps>(({ isActive }) => {
    const backgroundColor = isActive ? Gray.Gray500 : Gray.Gray800;
    return {
      backgroundColor,
      borderRadius: 10,
      height: 35,
      width: 35,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    };
  }),
);
