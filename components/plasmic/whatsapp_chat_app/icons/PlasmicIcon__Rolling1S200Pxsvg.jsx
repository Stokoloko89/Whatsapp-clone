// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Rolling1S200PxsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      style={{
        margin: "auto",
        background: "rgb(241, 242, 243)",
        stroke: "currentcolor",
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

      <circle
        cx={"50"}
        cy={"50"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"10"}
        r={"35"}
        strokeDasharray={"164.93361431346415 56.97787143782138"}
      >
        <animateTransform
          attributeName={"transform"}
          type={"rotate"}
          repeatCount={"indefinite"}
          dur={"1s"}
          values={"0 50 50;360 50 50"}
          keyTimes={"0;1"}
        ></animateTransform>
      </circle>
    </svg>
  );
}

export default Rolling1S200PxsvgIcon;
/* prettier-ignore-end */
