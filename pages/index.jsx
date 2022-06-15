import * as React from "react";
import { useRouter } from "next/router";
import { PlasmicHomepage } from "../components/plasmic/whatsapp_chat_app/PlasmicHomepage";
import enforceAuth from "../utils/enforceAuth";
import { supabase } from "../utils/supabaseClient";

function Homepage() {
  const router = useRouter();
  return <PlasmicHomepage />;
}
export const getServerSideProps = enforceAuth();
export default Homepage;
