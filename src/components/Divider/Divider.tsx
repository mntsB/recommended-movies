import React from "react";
import "./Divider.scss";

interface IProps {
  vertical?: boolean;
}
export default function(props: IProps) {
  return <hr className={`divider${props.vertical ? " vertical" : ""}`} />;
}
