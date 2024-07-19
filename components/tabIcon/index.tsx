import { View, Text, Image } from "react-native";
import TabIconProps from "./props";

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