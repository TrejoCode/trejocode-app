/**
 * @description Boot app config
 */

import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Box } from "native-base";
import Navigation from "@app/navigation";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Boot = (): JSX.Element => {
  /**
   * @description Load custom fonts
   */
  const [fontsLoaded] = useFonts({
    "IBM-Regular": require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    "IBM-Medium": require("./assets/fonts/IBMPlexSans-Medium.ttf"),
    "IBM-Semi": require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
    "IBM-Bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
  });

  /**
   * @description Hide the splash screen if the fonts are ready
   */
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <Box safeAreaTop flexGrow={1} onLayout={onLayoutRootView}>
      <Navigation />
    </Box>
  );
};

export default Boot;
