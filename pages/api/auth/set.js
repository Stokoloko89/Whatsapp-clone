import { supabase } from '../../../utils/supabaseClient'

const handler = async (request, response) => {
    supabase.auth.api.setAuthCookie(request, response)
}

export default handler