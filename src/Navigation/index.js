import FeedScreens from "../Screens/FeedScreens";
import CreatePostScreen from "../Screens/CreatePostScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={FeedScreens} />
                <Stack.Screen name="Create Post" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;