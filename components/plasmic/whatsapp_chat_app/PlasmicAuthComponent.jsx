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
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: 2MaJyIaWIXg/component
import Button from "../../Button"; // plasmic-import: JejkMCPIcT0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_whatsapp_chat_app.module.css"; // plasmic-import: az4W6VXcp4Uq4NJ5GtxTg5/projectcss
import sty from "./PlasmicAuthComponent.module.css"; // plasmic-import: uU40WrBZmX/css
import Rolling1S200PxsvgIcon from "./icons/PlasmicIcon__Rolling1S200Pxsvg"; // plasmic-import: gr_4w0Fso/icon

export const PlasmicAuthComponent__VariantProps = new Array(
  "isSignUpFlow",
  "isError",
  "isLoading"
);

export const PlasmicAuthComponent__ArgProps = new Array("errorMessage");

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
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootisError]: hasVariant(variants, "isError", "isError"),
          [sty.rootisLoading]: hasVariant(variants, "isLoading", "isLoading")
        }
      )}
    >
      <div
        data-plasmic-name={"crossBlckwllStokolokoChatApp"}
        data-plasmic-override={overrides.crossBlckwllStokolokoChatApp}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.crossBlckwllStokolokoChatApp
        )}
      >
        {"Kross & Blckwll Stokoloko ChatApp"}
      </div>

      {(hasVariant(variants, "isError", "isError") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__th73K, {
            [sty.freeBoxisError__th73KhNkpr]: hasVariant(
              variants,
              "isError",
              "isError"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox___2Hjc, {
              [sty.freeBoxisError___2HjchNkpr]: hasVariant(
                variants,
                "isError",
                "isError"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Error text goes here",
              value: args.errorMessage,
              className: classNames(sty.slotTargetErrorMessage, {
                [sty.slotTargetErrorMessageisError]: hasVariant(
                  variants,
                  "isError",
                  "isError"
                )
              })
            })}
          </div>
        </div>
      ) : null}

      <TextInput
        data-plasmic-name={"emailInput"}
        data-plasmic-override={overrides.emailInput}
        className={classNames("__wab_instance", sty.emailInput)}
        placeholder={"Enter your email"}
        type={"text"}
      />

      <TextInput
        data-plasmic-name={"passwordInput"}
        data-plasmic-override={overrides.passwordInput}
        className={classNames("__wab_instance", sty.passwordInput)}
        placeholder={"Enter your password"}
        type={"password"}
      />

      {(hasVariant(variants, "isLoading", "isLoading") ? true : true) ? (
        <Rolling1S200PxsvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg, {
            [sty.svgisLoading]: hasVariant(variants, "isLoading", "isLoading")
          })}
          role={"img"}
        />
      ) : null}
      {(hasVariant(variants, "isLoading", "isLoading") ? false : true) ? (
        <Button
          data-plasmic-name={"submitButton"}
          data-plasmic-override={overrides.submitButton}
          className={classNames("__wab_instance", sty.submitButton, {
            [sty.submitButtonisError]: hasVariant(
              variants,
              "isError",
              "isError"
            ),

            [sty.submitButtonisLoading]: hasVariant(
              variants,
              "isLoading",
              "isLoading"
            ),

            [sty.submitButtonisSignUpFlow]: hasVariant(
              variants,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })}
          color={"green"}
        >
          {hasVariant(variants, "isLoading", "isLoading")
            ? "Login"
            : hasVariant(variants, "isError", "isError")
            ? "Login"
            : hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
            ? "Sign up"
            : "Login"}
        </Button>
      ) : null}

      <div
        className={classNames(projectcss.all, sty.freeBox__m1MHr, {
          [sty.freeBoxisLoading__m1MHr5NctG]: hasVariant(
            variants,
            "isLoading",
            "isLoading"
          )
        })}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textisSignUpFlow]: hasVariant(
                variants,
                "isSignUpFlow",
                "isSignUpFlow"
              )
            }
          )}
        >
          {hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
            ? "Already have an account?"
            : "Don't have an account? "}
        </div>

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonisSignUpFlow]: hasVariant(
              variants,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })}
          color={"link"}
          link={
            hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
              ? "/login"
              : "/signup"
          }
        >
          {hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
            ? "Log in here"
            : "Sign up here"}
        </Button>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "crossBlckwllStokolokoChatApp",
    "emailInput",
    "passwordInput",
    "svg",
    "submitButton",
    "text",
    "button"
  ],

  crossBlckwllStokolokoChatApp: ["crossBlckwllStokolokoChatApp"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  svg: ["svg"],
  submitButton: ["submitButton"],
  text: ["text"],
  button: ["button"]
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
    crossBlckwllStokolokoChatApp: makeNodeComponent(
      "crossBlckwllStokolokoChatApp"
    ),

    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    svg: makeNodeComponent("svg"),
    submitButton: makeNodeComponent("submitButton"),
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicAuthComponent
    internalVariantProps: PlasmicAuthComponent__VariantProps,
    internalArgProps: PlasmicAuthComponent__ArgProps
  }
);

export default PlasmicAuthComponent;
/* prettier-ignore-end */
