import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

// views
import Login from "../views/auth/Login";
import Home from "../views/core/Home";
import Report from "../views/core/Report";
import Profile from "../views/core/Profile";
import UpdatePassword from "../views/modules/profile/UpdatePassword";

// stack and tab navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log("token", token);
    console.log(isAuthenticated);
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
        {/* Stack screen for default access if login success */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home";
                  } else if (route.name === "Report") {
                    iconName = focused ? "pie-chart" : "pie-chart";
                  } else if (route.name === "Profile") {
                    iconName = focused ? "user" : "user";
                  }
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "crimson",
                inactiveTintColor: "gray",
              }}
              tabBarStyle={{
                backgroundColor: "#fff",
                borderTopWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: -2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Tab.Screen name="Report" component={Report} />
              <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
          )}
        </Stack.Screen>

        {/* Stack screen for update password view */}
        <Stack.Screen name="Update Password" component={UpdatePassword} />

        {/* Stack screen for login view */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: null, headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
