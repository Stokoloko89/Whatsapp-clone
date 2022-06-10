// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: az4W6VXcp4Uq4NJ5GtxTg5
// Component: bTfmYOGtaw
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: vXSjmOQDKr/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_whatsapp_chat_app.module.css"; // plasmic-import: az4W6VXcp4Uq4NJ5GtxTg5/projectcss
import sty from "./PlasmicChatMessage.module.css"; // plasmic-import: bTfmYOGtaw/css

export const PlasmicChatMessage__VariantProps = new Array("isSent");

export const PlasmicChatMessage__ArgProps = new Array(
  "content",
  "createdAt",
  "username"
);

export const defaultChatMessage__Args = {};

function PlasmicChatMessage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultChatMessage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return true ? (
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
        { [sty.rootisSent]: hasVariant(variants, "isSent", "isSent") }
      )}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        size={"_45"}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"chatWrapper"}
        data-plasmic-override={overrides.chatWrapper}
        hasGap={true}
        className={classNames(projectcss.all, sty.chatWrapper, {
          [sty.chatWrapperisSent]: hasVariant(variants, "isSent", "isSent")
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__q5Yz1)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "asdasdsaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            value: args.content
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__zgqvy)}>
          {p.renderPlasmicSlot({
            defaultContents: "10 seconds ago",
            value: args.createdAt,
            className: classNames(sty.slotTargetCreatedAt)
          })}
        </div>
      </p.Stack>

      <div
        className={classNames(projectcss.all, sty.freeBox__yyWLl, {
          [sty.freeBoxisSent__yyWLltT1Fs]: hasVariant(
            variants,
            "isSent",
            "isSent"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.username,
          className: classNames(sty.slotTargetUsername, {
            [sty.slotTargetUsernameisSent]: hasVariant(
              variants,
              "isSent",
              "isSent"
            )
          })
        })}
      </div>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "chatWrapper"],
  avatar: ["avatar"],
  chatWrapper: ["chatWrapper"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicChatMessage__ArgProps,
      internalVariantPropNames: PlasmicChatMessage__VariantProps
    });

    return PlasmicChatMessage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChatMessage";
  } else {
    func.displayName = `PlasmicChatMessage.${nodeName}`;
  }
  return func;
}

export const PlasmicChatMessage = Object.assign(
  // Top-level PlasmicChatMessage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    chatWrapper: makeNodeComponent("chatWrapper"),
    // Metadata about props expected for PlasmicChatMessage
    internalVariantProps: PlasmicChatMessage__VariantProps,
    internalArgProps: PlasmicChatMessage__ArgProps
  }
);

export default PlasmicChatMessage;
/* prettier-ignore-end */
