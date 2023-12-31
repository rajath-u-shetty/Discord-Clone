import React from 'react'
import moment from "moment"
import { TrashIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { selectChannelId } from '../features/channelSlice';
import db, { auth } from '../firebase';

function Message({ id, message, timestamp, name, photoURL, email}) {
  const channelId =useSelector(selectChannelId)
  const [user]= useAuthState(auth);

  return (
    <div className='flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBg group'>
      <img src={photoURL} alt=" " className='h-10 rounded-full
        cursor-pointer hover:shadow-2xl' />
      <div className='flex flex-col'>
        <h4 className='flex items-center space-x-3 font-medium'>
          <span className='hover:underline text-white text-sm cursor-pointer'>{name} </span>
          <span className='text-discord_messageTimeStamp text-xs'>
            {moment(timestamp?.toDate().getTime()).format("lll")}
          </span>
        </h4>
        <p className='text-sm text-discord_message'>{message}</p>
      </div>
      {user?.email === email && (
        <div className='hover:bg-discord_deleteIcon p-1 ml-auto rounded-sm text-discord_deleteIcon hover:text-white cursor:pointer'
        onClick={() =>
            db
              .collection("channels")
              .doc(channelId)
              .collection("messages")
              .doc(id)
              .delete()
          }
          >
          <TrashIcon className='h-5 opacity-0 group-hover:opaci' />
        </div>
      )}
    </div>
  )
}

export default Message;
