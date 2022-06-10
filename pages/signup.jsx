import * as React from "react";
import { useRouter } from "next/router";
import enforceUnAuth from "../utils/enforceUnAuth";

import { PlasmicSignup } from "../components/plasmic/whatsapp_chat_app/PlasmicSignup";

function Signup() {
  return <PlasmicSignup />;
}

export const getServerSideProps = enforceUnAuth();
export default Signup;
