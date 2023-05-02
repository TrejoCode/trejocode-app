/**
 * @description Reactron debug config
 * @url https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md
 */

import Reactotron from 'reactotron-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // Controls connection & communication settings
  .useReactNative() // Add all built-in react native plugins
  .connect() // Let's connect!