import * as React from "react";
import { PlasmicAvatar } from "./plasmic/whatsapp_chat_app/PlasmicAvatar";

function Avatar_(props, ref) {
  return <PlasmicAvatar root={{ ref }} {...props} />;
}

const Avatar = React.forwardRef(Avatar_);

export default Avatar;
