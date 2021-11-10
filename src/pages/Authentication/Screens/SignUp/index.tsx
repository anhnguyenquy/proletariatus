import { Line, theme } from "../../../../core/components";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { ReactComponent as GoogleIcon } from "../../../../core/media/icons/google.svg";
import { useDeviceBreakPoint } from "../../../../core/hooks";
import {
  useStylesPC,
  useStylesTablet,
  useStylesPhone,
  useStylesExtraSmall,
} from "./styles";

export const SignUp = (): JSX.Element => {
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
            ? classesPC["sign-up"]
            : !(isPhone || isExtraSmall)
            ? classesTablet["sign-up"]
            : !isPhone
            ? classesExtraSmall["sign-up"]
            : classesPhone["sign-up"]
        }
      >
        <div className='app-info'>
          <div className='app-name'>Placeholder</div>
          <div className='app-slogan'>Find better ECAs</div>
        </div>
        <div className='credential-box'>
          <input
            type='text'
            placeholder='Email address or phone number'
            spellCheck={false}
          />
          <input type='password' placeholder='New password' />
          <input type='password' placeholder='Confirm password' />
          <div className='user-discretion'>
            By clicking Agree {`&`} Join, you agree to the Placeholder{" "}
            <span>User Agreement</span>, <span>Privacy Policy</span>, and{" "}
            <span>Cookie Policy</span>.
          </div>
          <Button
            className='join-button'
            variant='contained'
            size='small'
            color='primary'
          >
            Agree {`&`} Join
          </Button>
          <div className='or-section'>
            <Line width={"7.5rem"} />
            <>or</>
            <Line width={"7.5rem"} />
          </div>
          <Button
            variant='outlined'
            startIcon={<GoogleIcon />}
            color='secondary'
            style={{
              borderRadius: "25px",
              padding: "0.2rem",
              width: "15rem",
              textTransform: "none",
              boxSizing: "content-box",
              borderWidth: "2px",
            }}
          >
            Join with Google
          </Button>
          <div className='sign-in-prompt'>
            Already on Placeholder? <span>Sign In</span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
