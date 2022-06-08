// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: az4W6VXcp4Uq4NJ5GtxTg5
// Component: uU40WrBZmX
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: 2MaJyIaWIXg/component
import Button from "../../Button"; // plasmic-import: JejkMCPIcT0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_whatsapp_chat_app.module.css"; // plasmic-import: az4W6VXcp4Uq4NJ5GtxTg5/projectcss
import sty from "./PlasmicAuthComponent.module.css"; // plasmic-import: uU40WrBZmX/css

export const PlasmicAuthComponent__VariantProps = new Array();

export const PlasmicAuthComponent__ArgProps = new Array();

export const defaultAuthComponent__Args = {};

function PlasmicAuthComponent__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultAuthComponent__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Plasmic Chat App"}
      </div>

      <TextInput
        data-plasmic-name={"emailInput"}
        data-plasmic-override={overrides.emailInput}
        className={classNames("__wab_instance", sty.emailInput)}
        placeholder={"Enter your email"}
      />

      <TextInput
        data-plasmic-name={"passwordInput"}
        data-plasmic-override={overrides.passwordInput}
        className={classNames("__wab_instance", sty.passwordInput)}
        placeholder={"Enter your password"}
      />

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
        color={"green"}
      >
        {"Login"}
      </Button>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text", "emailInput", "passwordInput", "button", "freeBox"],
  text: ["text"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  button: ["button"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAuthComponent__ArgProps,
      internalVariantPropNames: PlasmicAuthComponent__VariantProps
    });

    return PlasmicAuthComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthComponent";
  } else {
    func.displayName = `PlasmicAuthComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthComponent = Object.assign(
  // Top-level PlasmicAuthComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    button: makeNodeComponent("button"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicAuthComponent
    internalVariantProps: PlasmicAuthComponent__VariantProps,
    internalArgProps: PlasmicAuthComponent__ArgProps
  }
);

export default PlasmicAuthComponent;
/* prettier-ignore-end */
