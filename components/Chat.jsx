import * as React from "react";
import { useGetChatRoomDetails } from "../lib/supabase/chat_room";
import { PlasmicChat } from "./plasmic/whatsapp_chat_app/PlasmicChat";

function Chat_({ roomId, ...props }, ref) {
  const { data: roomDetails } = useGetChatRoomDetails(roomId);

  console.log({ roomDetails });
  return (
    <PlasmicChat
      root={{ ref }}
      {...props}
      roomAvatar={{
        isEmpty: true,
        prefixText: roomDetails?.room_name[0]?.toUpperCase(),
      }}
      roomName={roomDetails?.room_name}
    />
  );
}

const Chat = React.forwardRef(Chat_);

export default Chat;
