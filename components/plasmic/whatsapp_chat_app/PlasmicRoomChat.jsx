// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: az4W6VXcp4Uq4NJ5GtxTg5
// Component: fWoZSjoMIY
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Layout from "../../Layout"; // plasmic-import: HTQEyBdZii/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_whatsapp_chat_app.module.css"; // plasmic-import: az4W6VXcp4Uq4NJ5GtxTg5/projectcss
import sty from "./PlasmicRoomChat.module.css"; // plasmic-import: fWoZSjoMIY/css

export const PlasmicRoomChat__VariantProps = new Array();

export const PlasmicRoomChat__ArgProps = new Array();

export const defaultRoomChat__Args = {};

function PlasmicRoomChat__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultRoomChat__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Layout
              data-plasmic-name={"layout"}
              data-plasmic-override={overrides.layout}
              className={classNames("__wab_instance", sty.layout)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "layout"],
  freeBox: ["freeBox", "layout"],
  layout: ["layout"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRoomChat__ArgProps,
      internalVariantPropNames: PlasmicRoomChat__VariantProps
    });

    return PlasmicRoomChat__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRoomChat";
  } else {
    func.displayName = `PlasmicRoomChat.${nodeName}`;
  }
  return func;
}

export const PlasmicRoomChat = Object.assign(
  // Top-level PlasmicRoomChat renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    layout: makeNodeComponent("layout"),
    // Metadata about props expected for PlasmicRoomChat
    internalVariantProps: PlasmicRoomChat__VariantProps,
    internalArgProps: PlasmicRoomChat__ArgProps
  }
);

export default PlasmicRoomChat;
/* prettier-ignore-end */
