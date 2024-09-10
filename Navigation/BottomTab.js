import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import { Media } from "../Screens/Media";
import { Account } from "../Screens/Acccount";


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
                   
                    else if (route.name === 'Media') {
                        size = focused ? 35 : 25
                        iconName = focused ? 'videocam' : 'videocam-outline';
                    }
                    else if (route.name === 'Account') {
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
            <Tab.Screen name="Media" component={Media} options={{ title: "Media" }}/>
            <Tab.Screen name="Account" component={Account} options={{ title: "Account" }}/>
            
           
        </Tab.Navigator>
    );
}