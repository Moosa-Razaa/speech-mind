import { ImageSourcePropType } from "react-native";

type TabIconProps = {
    focused: boolean;
    color: string;
    name: string;
    icon: ImageSourcePropType;
    size: number
}

export default TabIconProps;