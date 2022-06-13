import { useRouter } from "next/router";
import * as React from "react";
import { useCreateChatRoom } from "../lib/supabase/chat_room";
import { useGetUserProfile } from "../lib/supabase/profile";
import { supabase } from "../utils/supabaseClient";
import { PlasmicSidebar } from "./plasmic/whatsapp_chat_app/PlasmicSidebar";

function Sidebar_(props, ref) {
  const router = useRouter();

  const user = supabase.auth.user();
  const { data: userProfile } = useGetUserProfile(user?.id);
  const createChatRoomMutation = useCreateChatRoom();

  let username;
  if (userProfile?.first_name || userProfile?.last_name) {
    username = `${userProfile?.first_name} ${userProfile?.last_name}`;
  }

  return (
    <PlasmicSidebar
      root={{ ref }}
      {...props}
      userAvatar={{
        prefixText:
          (userProfile?.first_name &&
            userProfile?.first_name[0].toUpperCase()) ||
          (userProfile?.last_name && userProfile?.last_name[0].toUpperCase()),
        isEmpty: !userProfile?.avatar_url,
        imageUrl: userProfile?.avatar_url,
      }}
      username={username}
      headerProfile={{
        onClick: () => {
          router.push("/profile");
        },
      }}
      addNewRoomWrapper={{
        onClick: async () => {
          const roomName = prompt("Please enter a room name");
          if (!roomName) {
            return;
          }

          await createChatRoomMutation.mutateAsync({ room_name: roomName });
        },
      }}
    />
  );
}

const Sidebar = React.forwardRef(Sidebar_);

export default Sidebar;
