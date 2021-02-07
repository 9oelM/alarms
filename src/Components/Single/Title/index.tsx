import styled from "styled-components/native";

import { WithDarkMode, DarkModeProps } from "@/util/withDarkMode";
import { Gray } from "@/constants/colors";
import { HELVETICA_NEUE } from '@/constants/font';

export const Title = WithDarkMode(
  styled.Text<DarkModeProps>(({ isDarkMode }) => ({
    fontFamily: HELVETICA_NEUE,
    fontSize: `40px`,
    fontWeight: `bold`,
    color: isDarkMode ? Gray.Gray50 : Gray.Gray900,
    lineHeight: `38px`,
    minHeight: `40px`,
  })),
);
