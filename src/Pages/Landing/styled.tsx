import styled from "styled-components/native";
import { COLORS } from "@/constants/colors";

export const Container = styled.View({
  flex: 1,
  backgroundColor: COLORS.White,
  justifyContent: `center`,
  alignItems: `center`,
  height: `100%`,
});

export const Title = styled.Text({
  fontSize: 40,
  fontWeight: 700,
  color: COLORS.Black,
});
