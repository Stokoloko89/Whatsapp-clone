import { useRouter } from "next/router";
import * as React from "react";
import { PlasmicSidebar } from "./plasmic/whatsapp_chat_app/PlasmicSidebar";

function Sidebar_(props, ref) {
  const router = useRouter();

  return (
    <PlasmicSidebar
      root={{ ref }}
      {...props}
      headerProfile={{
        onClick: () => {
          router.push("/profile");
        },
      }}
    />
  );
}

const Sidebar = React.forwardRef(Sidebar_);

export default Sidebar;
