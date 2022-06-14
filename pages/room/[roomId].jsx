import { useRouter } from "next/router";
import * as React from "react";
import Chat from "../../components/Chat";
import { PlasmicRoomChat } from "../../components/plasmic/whatsapp_chat_app/PlasmicRoomChat";

function RoomChat() {
  const router = useRouter();
  const { roomId } = router.query;
  return (
    <PlasmicRoomChat
      layout={{
        mainContent: <Chat roomId={roomId}></Chat>,
      }}
    />
  );
}

export default RoomChat;
