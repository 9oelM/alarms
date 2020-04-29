import styled from "styled-components/native";

import { WithDarkMode, DarkModeProps } from "@/util/withDarkMode";
import { Gray } from "@/constants/colors";

export const Title = WithDarkMode(
  styled.Text<DarkModeProps>(({ isDarkMode }) => ({
    fontFamily: `Helvetica Neue`,
    fontSize: `40px`,
    fontWeight: `bold`,
    color: isDarkMode ? Gray.Gray50 : Gray.Gray900,
    lineHeight: `38px`,
    minHeight: `40px`,
  })),
);
