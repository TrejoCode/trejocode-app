/**
 * @description Settings screen
 */

import { Box, Heading } from "native-base";

const ScreenSettings = (): JSX.Element => {
  return (
    <Box px="4" py="8" bg={"background"} flexGrow="1">
      <Heading size="2xl" color="secondary.base">
        Ajustes de la app
      </Heading>
    </Box>
  );
};

export default ScreenSettings;
