import { Line, NormalTextButton, theme } from "../../../../core/components";
import { ThemeProvider } from "@mui/material/styles";
import { useDeviceBreakPoint } from "../../../../core/hooks";
import {
  useStylesPC,
  useStylesTablet,
  useStylesPhone,
  useStylesExtraSmall,
} from "./styles";

export const Login = (): JSX.Element => {
  const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint();
  const classesPC = useStylesPC();
  const classesTablet = useStylesTablet();
  const classesPhone = useStylesPhone();
  const classesExtraSmall = useStylesExtraSmall();
  return (
    <ThemeProvider theme={theme}>
      <div
        className={
          !(isTablet || isPhone || isExtraSmall)
            ? classesPC.login
            : !(isPhone || isExtraSmall)
            ? classesTablet.login
            : !isPhone
            ? classesExtraSmall.login
            : classesPhone.login
        }
      >
        <div className='app-info'>
          <div className='app-name'>Placeholder</div>
          <div className='app-description'>
            Placeholder helps you find extracurricular activities like clubs,
            job offers, and internships
          </div>
        </div>
        <div className='credential-box'>
          <div className='login-area'>
            <input
              type='text'
              placeholder='Email address or phone number'
              spellCheck={false}
            />
            <input type='password' placeholder='Password' />
            <NormalTextButton
              variant='contained'
              size='small'
              color='primary'
              style={{ marginTop: "0.8rem", height: "0.8rem" }}
            >
              Login
            </NormalTextButton>
          </div>
          <button className='forgot-password'>Forgot Password?</button>
          <Line width='90%' />
          <NormalTextButton
            variant='contained'
            size='small'
            color='secondary'
            style={{ marginTop: "1rem", height: "0.8rem", width: "10rem" }}
          >
            Create New Account
          </NormalTextButton>
        </div>
      </div>
    </ThemeProvider>
  );
};
