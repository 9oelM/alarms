import styled from "styled-components/native";

import { Gray } from "@/constants/colors";
import { WithDarkMode, DarkModeProps } from "@/util/withDarkMode";
import { OUT_MOST_VIEW_PADDING } from "@/constants/padding";

export const ViewStyled = WithDarkMode(
  styled.ScrollView<DarkModeProps>(({ isDarkMode }) => ({
    backgroundColor: isDarkMode ? Gray.Gray900 : Gray.Gray50,
    height: `100%`,
    padding: `${OUT_MOST_VIEW_PADDING}px`,
  })),
);
