import styled from "styled-components/native";

import { Gray } from "@/constants/colors";
import { WithDarkMode, DarkModeProps } from "@/util/withDarkMode";
import { outMostViewPadding } from "@/constants/padding";

export const ViewStyled = WithDarkMode(
  styled.ScrollView<DarkModeProps>(({ isDarkMode }) => ({
    backgroundColor: isDarkMode ? Gray.Gray900 : Gray.Gray50,
    height: `100%`,
    padding: `${outMostViewPadding}px`,
  })),
);
