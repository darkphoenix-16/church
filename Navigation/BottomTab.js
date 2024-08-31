import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import { Connect } from "../Screens/Connect";
import { Media } from "../Screens/Media";
import { More } from "../Screens/More";

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let size;
                    if (route.name === 'Home') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'home' : 'home-outline';
                    }
                   
                    else if (route.name === 'Connect') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    else if (route.name === 'Media') {
                        size = focused ? 35 : 25
                        iconName = focused ? 'videocam' : 'videocam-outline';
                    }
                    else if (route.name === 'More') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'reorder-three' : 'reorder-three-outline';

                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // tabBarActiveTintColor: Theme.colors.primary,
                // tabBarInactiveTintColor: Theme.colors.gray,
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
            <Tab.Screen name="Connect" component={Connect} options={{ title: "Connect" }}/>
            <Tab.Screen name="Media" component={Media} options={{ title: "Media" }}/>
            <Tab.Screen name="More" component={More} options={{ title: "More" }}/>
            
           
        </Tab.Navigator>
    );
}