import * as React from "react";
import { useRouter } from "next/router";
import { PlasmicLogin } from "../components/plasmic/whatsapp_chat_app/PlasmicLogin";
import enforceUnAuth from "../utils/enforceUnAuth";

function Login() {
  return <PlasmicLogin />;
}

export const getServerSideProps = enforceUnAuth();
export default Login;
