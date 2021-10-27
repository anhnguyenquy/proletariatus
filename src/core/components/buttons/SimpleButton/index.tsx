import { CSSProperties } from "react";
import "./style.scss";
interface Props {
  text: String;
  customStyle: CSSProperties;
}
export const SimpleButton = (props: Props): JSX.Element => {
  const { text, customStyle } = props;
  return (
    <div className="simple-button" style={customStyle}>
      {text}
    </div>
  );
};
