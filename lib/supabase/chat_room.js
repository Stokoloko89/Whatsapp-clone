import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { supabase } from '../../utils/supabaseClient'


async function getChatRooms() {
    let { error, data } = await supabase.from('chat_rooms').select("*")
    if (error) {
        throw error
    }

    return data
}

export const useGetChatRooms = () => {
    return useQuery(
        'chat-rooms-list',
        () => getChatRooms(),
    )
}

async function createChatRoom({ room_name }) {
    let { error, data } = await supabase.from("chat_rooms").insert([{ room_name }])
    if (error) {
        throw error
    }

    return data
}

export const useCreateChatRoom = () => {
    const queryClient = useQueryClient()
    return useMutation(
        ({ room_name }) => createChatRoom({ room_name }),
        {
            onSuccess: () => {
                queryClient.refetchQueries("chat-rooms-list")
            }
        }
    )
}
