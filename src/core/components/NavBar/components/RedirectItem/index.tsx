import { Button, Typography } from "@mui/material";
import { useStyles } from "./style";

interface Props {
  icon?: string;
  iconObject?: JSX.Element;
  title: string;
  spaceAddress?: string;
  titleStyle?: Object;
}

export const RedirectItem = (props: Props): JSX.Element => {
  const { icon, iconObject, title, spaceAddress, titleStyle } = props;
  const classes = useStyles();
  return (
    <Button
      className={classes["redirect-item"]}
      variant='outlined'
      startIcon={
        <>
          {
            icon != undefined && icon != '' ?
              <div className='image-container'>
                <img src={icon} />
              </div>
              :
              <div className='icon-object-container'>
                {iconObject}
              </div>
          }
        </>
      }
    >
      <div className='button-text'>
        <div className='space-title' style={titleStyle}>{title}</div>
        {
          spaceAddress != '' && spaceAddress != undefined ?
            <div className='space-address'>{spaceAddress}</div>
            : <></>
        }
      </div>
    </Button>
  );
};
