import * as React from "react";
import {
  useGetUserProfile,
  useUpdateUserProfile,
} from "../lib/supabase/profile";
import { PlasmicUserProfile } from "./plasmic/whatsapp_chat_app/PlasmicUserProfile";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/router";

function UserProfile_({ ...props }, ref) {
  const router = useRouter;
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const user = supabase.auth.user();
  const { data: userProfile, isLoading: userProfileIsLoading } =
    useGetUserProfile(user?.id);
  const updateUserProfileMutation = useUpdateUserProfile();

  // the initial render with useEffect retrieved undefined profile_name values, therefore had to use nullish coalescing operator to provide default values to silence React!
  React.useEffect(() => {
    setFirstName(userProfile?.first_name ?? "First Name");
    setLastName(userProfile?.last_name ?? "Last Name");
  }, [userProfile]);

  return (
    <PlasmicUserProfile
      root={{ ref }}
      {...props}
      uploadAvatar={{
        url: userProfile?.avatar_url,
        onUpload: async (url) => {
          await updateUserProfileMutation.mutateAsync({ avatar_url: url });
        },
        loading: userProfileIsLoading || updateUserProfileMutation.isLoading,
      }}
      firstNameInput={{
        value: firstName,
        onChange: (e) => setFirstName(e.target.value),
      }}
      lastNameInput={{
        value: lastName,
        onChange: (e) => setLastName(e.target.value),
      }}
    />
  );
}

const UserProfile = React.forwardRef(UserProfile_);

export default UserProfile;
