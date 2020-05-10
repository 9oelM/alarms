import styled from 'styled-components/native';
import { HELVETICA_NEUE } from '@/constants/font';
import { Gray } from '@/constants/colors';
import { WithDarkMode, DarkModeProps } from '@/util/withDarkMode';
import { CSSObject } from 'styled-components';

export const TextInputStyled = WithDarkMode(styled.TextInput<DarkModeProps>(({ isDarkMode }) => ({
  fontFamily: HELVETICA_NEUE,
  fontWeight: 'bold',
  width: '40%',
  height: 30,
  padding: 0,
  borderRadius: 10,
  fontSize: 15,
  color: isDarkMode ?  Gray.Gray50 : Gray.Gray800,
  backgroundColor: isDarkMode ? Gray.Gray800 :Gray.Gray500,
  textAlign: 'center'
})));
