import { Line, NormalTextButton, theme, NavBar } from "../../core/components";
import { ThemeProvider } from "@mui/material/styles";
import { ReactComponent as GoogleIcon } from "../../../../media/icons/google.svg";
import { useDeviceBreakPoint } from "../../core/hooks";
import {
  useStylesPC,
  //   useStylesTablet,
  //   useStylesPhone,
  //   useStylesExtraSmall,
} from "./styles";

export const PageManager = (): JSX.Element => {
    const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint();
    const classesPC = useStylesPC();
  //   const classesTablet = useStylesTablet();
  //   const classesPhone = useStylesPhone();
  //   const classesExtraSmall = useStylesExtraSmall();

  return (
    <div className={classesPC["page-manager"]}>
      {/* <div
        className={
          !(isTablet || isPhone || isExtraSmall)
            ? classesPC["page-manager"]
            : !(isPhone || isExtraSmall)
            ? classesTablet["page-manager"]
            : !isPhone
            ? classesExtraSmall["page-manager"]
            : classesPhone["page-manager"]
        }
      > */}
      <NavBar current='pages'/>
    </div>
  );
};
