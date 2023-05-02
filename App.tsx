/**
 * @description App entry point
 */

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

import Boot from "./Boot";
import Providers from "@app/Providers";

const App = (): JSX.Element => {
  return (
    <Providers>
      <Boot />
    </Providers>
  );
};

export default App;
