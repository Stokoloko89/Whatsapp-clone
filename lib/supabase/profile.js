import { useMutation, useQuery } from "react-query";
import { supabase } from "../../utils/supabaseClient";

async function getUserProfile(userId) {
  let { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export const useGetUserProfile = (userId, options = {}) => {
  return useQuery(
    `user-profile-${userId}`,
    () => getUserProfile(userId),
    {
      ...options,
      enabled: Boolean(userId),
    }
  )
}
async function updateUserProfile({ avatar_url, first_name, last_name }) {
  const user = supabase.auth.user();

  let updates = {
    id: user.id,
    avatar_url,
    first_name,
    last_name,
    updated_at: new Date(),
  };

  let { error } = await supabase
    .from("profiles")
    .upsert(updates, { returning: "minimal" });
  if (error) {
    throw error;
  }
}

export const useUpdateUserProfile = () => {
  return useMutation((payload) => updateUserProfile(payload));
};
