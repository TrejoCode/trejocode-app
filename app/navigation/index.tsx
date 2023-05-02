/**
 * @description Navigation managment
 */

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, useTheme } from "native-base";
import { Feather } from "@expo/vector-icons";
import ScreenHome from "@app/screens/Home";
import ScreenSettings from "@app/screens/Settings";
import { color } from "native-base/lib/typescript/theme/styled-system";

// const StackNavigation = createNativeStackNavigator();
const TabNavigation = createBottomTabNavigator();
const sharedOptions = { headerShown: false };

const Navigation = (): JSX.Element => {
  const { colors, fontSizes } = useTheme();

  return (
    <TabNavigation.Navigator
      initialRouteName="ScreenHome"
      screenOptions={sharedOptions}
      backBehavior="initialRoute"
    >
      <TabNavigation.Screen
        name="ScreenHome"
        component={ScreenHome}
        options={{
          tabBarLabel: "Inicio",
          tabBarActiveTintColor: colors.primary.darken,
          tabBarInactiveTintColor: colors.secondary.base,
          tabBarLabelStyle: {
            fontWeight: "600",
            marginBottom: 4,
            fontSize: fontSizes.xs,
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              as={Feather}
              name="home"
              color={focused ? colors.primary.darken : colors.secondary.base}
              size="md"
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="ScreenSettings"
        component={ScreenSettings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarActiveTintColor: colors.primary.darken,
          tabBarInactiveTintColor: colors.secondary.base,
          tabBarLabelStyle: {
            fontWeight: "600",
            marginBottom: 4,
            fontSize: fontSizes.xs,
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              as={Feather}
              name="settings"
              color={focused ? colors.primary.darken : colors.secondary.base}
              size="md"
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
};

export default Navigation;
