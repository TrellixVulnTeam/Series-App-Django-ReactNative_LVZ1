import { Dimensions } from "react-native";

export default class IsPortrait{

    static isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    }

    static isLandscape = () => {
        const dim = Dimensions.get('screen');
        return dim.width >= dim.height;
    };

}