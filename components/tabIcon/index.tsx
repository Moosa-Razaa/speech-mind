import { View, Text, Image } from "react-native";
import TabIconProps from "./props";

// The TabIcon component is a custom component that displays an icon and a text label for a tab in the tab bar.
// The component takes the following props:
// - name: The name of the tab.
// - icon: The icon of the tab.
// - color: The color of the tab icon and text label.
// - focused: A boolean value that indicates whether the tab is focused or not.
// The component is displayed in the (tabs)/_layout.tsx screen of the application.

function TabIcon({ name, icon, color, focused } : TabIconProps)
{
    return (
        <View className="flex items-center justify-center gap-1">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className={`w-4 h-4`}
            />
            <Text
                style={{ color: color }}
                className={`${focused ? "text-blue-500" : "text-gray-500"} text-xs`}
            >
                {name}
            </Text>
        </View>
    );
}

export default TabIcon;