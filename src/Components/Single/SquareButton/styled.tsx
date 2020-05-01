import styled from "styled-components/native";
import { Gray } from "@/constants/colors";

export const TextStyled = styled.Text({
  color: Gray.Gray100,
  fontSize: 20,
  fontWeight: `bold`,
  fontFamily: `Helvetica Neue`,
});

export interface WideButtonStyledProps {
  isActive: boolean;
  width?: number;
  marginRight?: number;
}

export const TouchableOpacityStyled = styled.TouchableOpacity<WideButtonStyledProps>(
  ({ isActive, width, marginRight }) => {
    const backgroundColor = isActive ? Gray.Gray500 : Gray.Gray800;
    return {
      backgroundColor,
      borderRadius: 10,
      height: width ?? 35,
      width: width ?? 35,
      marginRight: marginRight ?? 0,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
    };
  },
);
