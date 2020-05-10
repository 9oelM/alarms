import styled from 'styled-components/native';
import { HELVETICA_NEUE } from '@/constants/font';
import { Gray } from '@/constants/colors';
import { WithDarkMode, DarkModeProps } from '@/util/withDarkMode';
import { CSSObject } from 'styled-components';

const commonStyle: ({ isDarkMode }: DarkModeProps) => CSSObject = ({ isDarkMode }) => ({
  width: '30%',
  fontFamily: HELVETICA_NEUE,
  fontSize: '20px',
  fontWeight: 'bold',
  color: isDarkMode ? Gray.Gray800 : Gray.Gray500,
  backgroundColor: isDarkMode ? Gray.Gray500 : Gray.Gray800,
});

export const TextInputStyled = WithDarkMode(styled.TextInput<DarkModeProps>(commonStyle));

// export const ButtonStyled = WithDarkMode(styled.TouchableOpacity<DarkModeProps>(commonStyle));
