
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { useEffect } from 'react';
import { supabase } from '../utils/supabaseClient'

function MyApp({ Component, pageProps }) {
  // Step 1, subscribe to onAuthStateChange
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      updateSupabaseCookie(event, session)

      return () => {
        authListener?.unsubscribe()
      }
    })
  })

  // Step 2, update the supabase auth cookie on server

  async function updateSupabaseCookie(event, session) {
    let apiUrl = '/api/auth/set'
    if (event === 'SIGNED_OUT') {
      apiUrl = '/api/auth/remove'
    }

    await fetch(apiUrl, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session })
    })
  }
  // Step 3, add a wrapper component on ServerSideProps to check for the supabase auth cookie and do the redirection

  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
