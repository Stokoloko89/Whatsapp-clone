// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: az4W6VXcp4Uq4NJ5GtxTg5
// Component: vi10MrC8cmIB
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: JejkMCPIcT0/component
import Layout from "../../Layout"; // plasmic-import: HTQEyBdZii/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_whatsapp_chat_app.module.css"; // plasmic-import: az4W6VXcp4Uq4NJ5GtxTg5/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: vi10MrC8cmIB/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

export const defaultHomepage__Args = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
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
            sty.root
          )}
        >
          {true ? (
            <Button
              data-plasmic-name={"logoutButton"}
              data-plasmic-override={overrides.logoutButton}
              className={classNames("__wab_instance", sty.logoutButton)}
            >
              {"Logout"}
            </Button>
          ) : null}

          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <Layout
              data-plasmic-name={"layout"}
              data-plasmic-override={overrides.layout}
              className={classNames("__wab_instance", sty.layout)}
              mainContent={
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                />
              }
            />
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "logoutButton", "mainSection", "layout", "freeBox"],
  logoutButton: ["logoutButton"],
  mainSection: ["mainSection", "layout", "freeBox"],
  layout: ["layout", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoutButton: makeNodeComponent("logoutButton"),
    mainSection: makeNodeComponent("mainSection"),
    layout: makeNodeComponent("layout"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
