// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: az4W6VXcp4Uq4NJ5GtxTg5
// Component: fcBeWNpBaEq
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import UploadAvatar from "../../UploadAvatar"; // plasmic-import: t6-6051BEW/component
import TextInput from "../../TextInput"; // plasmic-import: 2MaJyIaWIXg/component
import Button from "../../Button"; // plasmic-import: JejkMCPIcT0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_whatsapp_chat_app.module.css"; // plasmic-import: az4W6VXcp4Uq4NJ5GtxTg5/projectcss
import sty from "./PlasmicUserProfile.module.css"; // plasmic-import: fcBeWNpBaEq/css

export const PlasmicUserProfile__VariantProps = new Array("isError");

export const PlasmicUserProfile__ArgProps = new Array("errorMessage");

export const defaultUserProfile__Args = {};

function PlasmicUserProfile__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultUserProfile__Args, props.args);
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
        { [sty.rootisError]: hasVariant(variants, "isError", "isError") }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Update Profile"}
      </div>

      <UploadAvatar
        data-plasmic-name={"uploadAvatar"}
        data-plasmic-override={overrides.uploadAvatar}
        className={classNames("__wab_instance", sty.uploadAvatar)}
      />

      <TextInput
        data-plasmic-name={"firstNameInput"}
        data-plasmic-override={overrides.firstNameInput}
        className={classNames("__wab_instance", sty.firstNameInput, {
          [sty.firstNameInputisError]: hasVariant(
            variants,
            "isError",
            "isError"
          )
        })}
        placeholder={"Enter your first name"}
      />

      <TextInput
        data-plasmic-name={"lastNameInput"}
        data-plasmic-override={overrides.lastNameInput}
        className={classNames("__wab_instance", sty.lastNameInput, {
          [sty.lastNameInputisError]: hasVariant(variants, "isError", "isError")
        })}
        placeholder={"Enter your last name"}
      />

      <Button
        data-plasmic-name={"saveProfileButton"}
        data-plasmic-override={overrides.saveProfileButton}
        className={classNames("__wab_instance", sty.saveProfileButton, {
          [sty.saveProfileButtonisError]: hasVariant(
            variants,
            "isError",
            "isError"
          )
        })}
        color={"softGreen"}
      >
        {"Save Profile"}
      </Button>

      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button)}
        color={"link"}
        link={"/"}
      >
        {"Go back to chat"}
      </Button>

      {(hasVariant(variants, "isError", "isError") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__xaLsa, {
            [sty.freeBoxisError__xaLsAvNye]: hasVariant(
              variants,
              "isError",
              "isError"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__qbCtP, {
              [sty.freeBoxisError__qbCtPvNye]: hasVariant(
                variants,
                "isError",
                "isError"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Enter some text",
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
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "uploadAvatar",
    "firstNameInput",
    "lastNameInput",
    "saveProfileButton",
    "button"
  ],

  text: ["text"],
  uploadAvatar: ["uploadAvatar"],
  firstNameInput: ["firstNameInput"],
  lastNameInput: ["lastNameInput"],
  saveProfileButton: ["saveProfileButton"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicUserProfile__ArgProps,
      internalVariantPropNames: PlasmicUserProfile__VariantProps
    });

    return PlasmicUserProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserProfile";
  } else {
    func.displayName = `PlasmicUserProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicUserProfile = Object.assign(
  // Top-level PlasmicUserProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    uploadAvatar: makeNodeComponent("uploadAvatar"),
    firstNameInput: makeNodeComponent("firstNameInput"),
    lastNameInput: makeNodeComponent("lastNameInput"),
    saveProfileButton: makeNodeComponent("saveProfileButton"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicUserProfile
    internalVariantProps: PlasmicUserProfile__VariantProps,
    internalArgProps: PlasmicUserProfile__ArgProps
  }
);

export default PlasmicUserProfile;
/* prettier-ignore-end */
