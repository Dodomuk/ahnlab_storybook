import "./logo.css";

import Image from "next/image";
import JavelinLogo from "../assets/javelin_icon.png";

export interface Props {}

export const Logo = ({}: Props) => {
  return (
    <div className="logo-wrapper">
      <Image width={50} height={50} src={JavelinLogo} alt="javelin logo" />
      <div>JAVELIN</div>
    </div>
  );
};
