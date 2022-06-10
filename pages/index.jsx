import { Router, useRouter } from "next/router";
import * as React from "react";
import { PlasmicHomepage } from "../components/plasmic/whatsapp_chat_app/PlasmicHomepage";
import { supabase } from "../utils/supabaseClient";

function Homepage() {
  const router = useRouter();

  return (
    <PlasmicHomepage
      logoutButton={{
        onClick: async () => {
          await supabase.auth.signOut();
          router.replace("/login");
        },
      }}
    />
  );
}

export default Homepage;
