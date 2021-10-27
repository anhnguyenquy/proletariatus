import { CSSProperties } from 'react'
import { useStyles, Props } from './style'

export const Line = (props: Props): JSX.Element => {
  const classes = useStyles(props)
  return (
    <div className={classes.line}>
    </div>
  );
};
