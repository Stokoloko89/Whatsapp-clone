import * as React from "react";
import { PlasmicAuthComponent } from "./plasmic/whatsapp_chat_app/PlasmicAuthComponent";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

function AuthComponent_(props, ref) {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authError, setAuthError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <PlasmicAuthComponent
      root={{ ref }}
      {...props}
      isError={!!authError}
      errorMessage={authError?.message}
      isLoading={loading}
      emailInput={{
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onKeyDown: (e) => {
          if (e.keyCode === 13) {
            async () => {
              setLoading(true);
              setAuthError(null);
              try {
                let authFunction = null;
                if (props.isSignUpFlow) {
                  authFunction = await supabase.auth.signUp({
                    email,
                    password,
                  });
                } else {
                  authFunction = await supabase.auth.signIn({
                    email,
                    password,
                  });
                }

                const { error } = authFunction;
                if (error) {
                  setAuthError(error);
                  return;
                }

                router.replace("/profile");
              } catch (err) {
                setAuthError(err);
              } finally {
                setLoading(false);
              }
            };
          }
        },
        onClick: async () => {
          setLoading(true);
          setAuthError(null);
          try {
            let authFunction = null;
            if (props.isSignUpFlow) {
              authFunction = await supabase.auth.signUp({ email, password });
            } else {
              authFunction = await supabase.auth.signIn({ email, password });
            }

            const { error } = authFunction;
            if (error) {
              setAuthError(error);
              return;
            }

            router.replace("/profile");
          } catch (err) {
            setAuthError(err);
          } finally {
            setLoading(false);
          }
        },
      }}
    />
  );
}

const AuthComponent = React.forwardRef(AuthComponent_);

export default AuthComponent;
