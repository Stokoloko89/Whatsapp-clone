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

  React.useEffect(() => {
    setFirstName(userProfile?.first_name);
    setLastName(userProfile?.last_name);
  }, [userProfile]);

  return (
    <PlasmicUserProfile
      root={{ ref }}
      {...props}
      uploadAvatar={{
        url: userProfile?.avatar_url,
        onUpload: async (url) => {
          // update profile mutation to update the avatar_url on the backend.
          await updateUserProfileMutation.mutateAsync({
            avatar_url: url,
            loading:
              userProfileIsLoading || updateUserProfileMutation.isLoading,
          });
        },
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
