import * as React from "react";
import { useGetChatRoomDetails } from "../lib/supabase/chat_room";
import {
  useGetChatMessages,
  useCreateNewMessage,
} from "../lib/supabase/messages";
import { supabase } from "../utils/supabaseClient";
import ChatMessage from "./ChatMessage";
import { PlasmicChat } from "./plasmic/whatsapp_chat_app/PlasmicChat";
import * as moment from "moment";

function Chat_({ roomId, ...props }, ref) {
  const scrollRef = React.useRef();
  const [newMessage, setNewMessage] = React.useState("");

  const { data: roomDetails } = useGetChatRoomDetails(roomId);
  const {
    data: chatMessages,
    isLoading: chatMessagesIsLoading,
    refetch: fetchMessages,
  } = useGetChatMessages(roomId);
  const createNewMessageMutation = useCreateNewMessage(roomId);

  const user = supabase.auth.user();

  React.useEffect(() => {
    const subscription = supabase
      .from("messages")
      .on("INSERT", (payload) => {
        fetchMessages();
      })
      .subscribe();

    return () => supabase.removeSubscription(subscription);
  }, []);

  React.useEffect(() => {
    if (!scrollRef.current) return;

    setTimeout(() => {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, [chatMessages?.length]);

  async function createNewMessage() {
    if (newMessage?.length <= 0) return;
    await createNewMessageMutation.mutateAsync({
      content: newMessage,
    });
    setNewMessage("");
  }

  console.log({ chatMessages, chatMessagesIsLoading });
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
          return (
            <React.Fragment>
              {chatMessages?.map((message) => (
                <ChatMessage
                  key={message.id}
                  content={message.content}
                  createdAt={moment(message.created_at).fromNow()}
                  username={
                    message?.first_name
                      ? `${message?.first_name || ""} ${
                          message?.last_name || ""
                        }`
                      : message?.email
                  }
                  avatar={{
                    prefixText:
                      (message?.first_name && message?.last_name[0]) ||
                      user?.email[0]?.toUpperCase(),
                    isEmpty: !message?.avatar_url,
                    imageUrl: message?.avatar_url,
                  }}
                  isSent={user.id === message.sender_id}
                />
              ))}
              <span ref={scrollRef}></span>
            </React.Fragment>
          );
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
