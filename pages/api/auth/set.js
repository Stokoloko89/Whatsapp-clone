import { supabase } from '../../../utils/supabaseClient'

const handler = async (request, response) => {
    await supabase.auth.api.setAuthCookie(request, response)
}

export default handler