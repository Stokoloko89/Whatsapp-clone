// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Eclipse1S200PxsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      style={{
        margin: "auto",
        background: "rgb(241, 242, 243)",
        fill: "currentcolor",
        ...(style || {}),
      }}
      viewBox={"0 0 100 100"}
      preserveAspectRatio={"xMidYMid"}
      display={"block"}
      shapeRendering={"auto"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M10 50a40 40 0 0080 0 40 42 0 01-80 0"} fill={"currentColor"}>
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          dur={"1s"}
          repeatCount={"indefinite"}
          keyTimes={"0;1"}
          values={"0 50 51;360 50 51"}
        ></animateTransform>
      </path>
    </svg>
  );
}

export default Eclipse1S200PxsvgIcon;
/* prettier-ignore-end */
