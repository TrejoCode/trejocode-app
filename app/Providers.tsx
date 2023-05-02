/**
 * @description Pila de providers utilizadas
 */

import { ReactNode } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "@app/config/theme";

const Providers = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Providers;
