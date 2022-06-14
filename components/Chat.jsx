import * as React from "react";
import { useGetChatRoomDetails } from "../lib/supabase/chat_room";
import {
  useGetChatMessages,
  useCreateNewMessage,
} from "../lib/supabase/messages";
import ChatMessage from "./ChatMessage";
import { PlasmicChat } from "./plasmic/whatsapp_chat_app/PlasmicChat";

function Chat_({ roomId, ...props }, ref) {
  const [newMessage, setNewMessage] = React.useState("");

  const { data: roomDetails } = useGetChatRoomDetails(roomId);
  const { data: chatMessages } = useGetChatMessages(roomId);
  const createNewMessageMutation = useCreateNewMessage(roomId);

  async function createNewMessage() {
    if (newMessage?.length <= 0) return;
    await createNewMessageMutation.mutateAsync({
      content: newMessage,
    });
    setNewMessage("");
  }
  return (
    <PlasmicChat
      root={{ ref }}
      {...props}
      roomAvatar={{
        isEmpty: true,
        prefixText: roomDetails?.room_name[0]?.toUpperCase(),
      }}
      roomName={roomDetails?.room_name}
      body={{
        wrapChildren: (children) => {
          return chatMessages?.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              createdAt={message.created_at}
              username={
                message?.first_name
                  ? `${message?.first_name || ""} ${message?.last_name || ""}`
                  : message?.email
              }
              avatar={{
                prefixText:
                  (message?.first_name && message?.last_name[0]) ||
                  user?.email[0]?.toUpperCase(),
                isEmpty: !message?.avatar_url,
                imageUrl: message?.avatar_url,
              }}
            />
          ));
        },
      }}
      messageTextInput={{
        value: newMessage,
        onChange: (event) => {
          setNewMessage(event.target.value);
        },
        onKeyDown: async (event) => {
          if (event.keyCode === 13) {
            await createNewMessage();
          }
        },
      }}
      sendIcon={{
        onClick: async () => {
          await createNewMessage();
        },
      }}
    />
  );
}

const Chat = React.forwardRef(Chat_);

export default Chat;
