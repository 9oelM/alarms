import { StyledComponent } from "styled-components";
import React from "react";
import { useDarkMode } from "react-native-dark-mode";

export interface DarkModeProps {
  isDarkMode: boolean;
}

export function WithDarkMode<A extends keyof JSX.IntrinsicElements | React.ComponentType<any>, B extends object, C extends keyof any = never>(
  Component: StyledComponent<A, B, DarkModeProps & any, C>,
) {
  return (props: any) => {
    // eslint does not know what it's saying
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isDarkMode = useDarkMode();

    return <Component {...props} isDarkMode={isDarkMode} />;
  };
}
