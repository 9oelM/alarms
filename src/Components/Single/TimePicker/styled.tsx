import styled from "styled-components/native";
import { Gray } from "@/constants/colors";
import { WithDarkMode, DarkModeProps } from "@/util/withDarkMode";
import { HELVETICA_NEUE } from '@/constants/font';

export const ContainerStyled = styled.View({
  backgroundColor: `transparent`,
  position: `absolute`,
  zIndex: 5,
  justifyContent: `center`,
  width: `100%`,
  height: `100%`,
  shadowColor: `#000`,
  shadowOpacity: `1`,
  shadowRadius: 150,
});

export const DateTimePickerContainerStyled = WithDarkMode(
  styled.View<DarkModeProps>(({ isDarkMode }) => ({
    backgroundColor: isDarkMode ? Gray.Gray700 : Gray.Gray100,
    justifyContent: `center`,
    width: `100%`,
    height: `30%`,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  })),
);

export const HeaderStyled = WithDarkMode(
  styled.View<DarkModeProps>(({ isDarkMode }) => ({
    backgroundColor: isDarkMode ? Gray.Gray700 : Gray.Gray100,
    width: `100%`,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    padding: 16,
    justifyContent: `flex-end`,
    alignItems: `flex-end`,
    borderTopWidth: 1,
    borderColor: isDarkMode ? Gray.Gray100 : Gray.Gray700,
  })),
);

export const TextStyled = WithDarkMode(
  styled.Text<DarkModeProps>(({ isDarkMode }) => ({
    fontSize: 20,
    fontWeight: `bold`,
    fontFamily: HELVETICA_NEUE,
    color: isDarkMode ? Gray.Gray200 : Gray.Gray700,
  })),
);
