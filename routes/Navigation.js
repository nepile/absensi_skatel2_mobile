import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// views
import Login from "../views/auth/Login";
import Home from "../views/core/Home";
import Report from "../views/core/Report";
import Profile from "../views/core/Profile";
import UpdatePassword from "../views/modules/profile/UpdatePassword";
import Today from "../views/modules/report/Today";
import Recap from "../views/modules/report/Recap";
import { getRole, getToken } from "../utils/Session";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRole, setRole] = useState(false);

  useEffect(() => {
    checkLoginStatus();
    checkRoleStatus();
  }, []);

  const checkLoginStatus = async () => {
    const token = await getToken();
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  const checkRoleStatus = async () => {
    const role = await getRole();
    console.log(isRole);
    if (role == "User") {
      setRole(true);
      return true;
    } else {
      setRole(false);
      return false;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Login"}>
        {isAuthenticated ? (
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator
                initialRouteName={isRole ? "Report" : "Home"}
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
                  tabBarActiveTintColor: "crimson",
                  tabBarInactiveTintColor: "gray",
                  tabBarStyle: {
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
                  },
                })}
              >
                {isRole ? <Tab.Screen name="Home" component={Home} /> : null}
                <Tab.Screen name="Report" component={Report} />
                <Tab.Screen
                  name="Profile"
                  component={Profile}
                  options={{ tabBarVisible: isRole }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: null, headerShown: false }}
          />
        )}
        {!isRole && (
          <>
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        )}
        <Stack.Screen
          name="Today"
          component={Today}
          options={{ title: "Presensi Hari Ini" }}
        />
        <Stack.Screen
          name="Recap"
          component={Recap}
          options={{ title: "Rekapan Presensi Bulanan" }}
        />
        <Stack.Screen
          name="Update Password"
          component={UpdatePassword}
          options={{ title: "Update Password" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
