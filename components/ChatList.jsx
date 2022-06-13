import * as React from "react";
import { useGetChatRooms } from "../lib/supabase/chat_room";
import ChatListItem from "./ChatListItem";
import { PlasmicChatList } from "./plasmic/whatsapp_chat_app/PlasmicChatList";

function ChatList_(props, ref) {
  const { data: chatRooms, isLoading: chatRoomsLoading } = useGetChatRooms();

  return (
    <PlasmicChatList
      root={{
        ref,
      }}
      chatListWrapper={{
        wrapChildren: (children) =>
          // the below room_name has been further destructed to obtain the prop
          chatRooms?.map(({ room_name }) => (
            <ChatListItem
              roomName={room_name}
              avatar={{
                isEmpty: true,
                prefixText: room_name[0].toUpperCase(),
              }}
            ></ChatListItem>
          )),
      }}
      {...props}
      isLoading={chatRoomsLoading}
    />
  );
}

const ChatList = React.forwardRef(ChatList_);

export default ChatList;
