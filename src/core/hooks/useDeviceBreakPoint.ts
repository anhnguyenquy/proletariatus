import { useMediaQuery } from "react-responsive";
export const useDeviceBreakPoint = () => {
    const isPhone = useMediaQuery({ maxWidth: 425 });
    const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 768 });
    return {isPhone, isTablet}
}