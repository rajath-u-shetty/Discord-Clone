import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import db, { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import Servericons from './Servericons';
import { ChevronDownIcon, CogIcon, MicrophoneIcon, PhoneIcon, PlusIcon } from '@heroicons/react/outline';
import Channel from './Channel';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';
// import ChannelList from './ChannelList';


const Home = () => {
    const [user] = useAuthState(auth)
    const [channels] = useCollection(db.collection("channels"));

    const handleAddChannel = () => {
        const ChannelName = prompt("enter a new channel now");

        if(ChannelName){
            db.collection("channels").add({
                ChannelName: ChannelName,
            })
        }
    }

    return (
        <>
            {!user && <Navigate to={"/"} />}
            <div className="flex h-screen">
                <div className="flex flex-col space-y-3 bg-discord_serverBg p-3 min-w-max">
                    <div className="server-default hover:bg-discord_purple">
                        <img className="h-5" src='https://rb.gy/kuaslg' />
                    </div>
                    <hr className="border-gray-700 border w-8 mx-auto"/>
                    <Servericons image="https://rb.gy/qidcpp" />
                    <Servericons image="https://rb.gy/zxo0lz" />
                    <Servericons image="https://rb.gy/qidcpp" />
                    <Servericons image="https://rb.gy/zxo0lz" />
                
                    <div className=" hover:bg-discord_green group server-default">
                        <PlusIcon className="text-discord_green h-7 group-hover:text-white"/>
                    </div>
                </div>

                <div className='bg-discord_channelsBg flex flex-col min-w-max'>
                    <h2 className='flex text-white font-bold text-sm items-center 
                    justify-between border-b border-gray-800 p-4 hover:bg-serverNameHoverBg cursor-pointer' >
                        official papa server... <ChevronDownIcon className='h-5 ml-2' />
                    </h2>
                    <div className='text-discord_channel flex-grow overflow-y-scroll scrollbar-hide'>
                        <div className='flex items-center p-2 mb-2 '>
                            <ChevronDownIcon className='h-3 mr-2'/>
                            <h4 className='font-semibold mr-20 hover:text-white'>Channels</h4>
                            <PlusIcon className='h-6 m1-auto cursor-pointer hover:text-white'
                                onClick={handleAddChannel}/>
                        </div>
                        <div className='flex flex-col space-y-2 px-2 mb-4'>
                            {channels?.docs.map((doc)=>(
                                <Channel 
                                key={doc.id} 
                                id={doc.id} 
                                ChannelName={doc.data().ChannelName} />
                            ))}
                        </div>
                    </div>
                    <div className='bg-discord_userBg p-2 flex justify-betweenspace-x-8'>
                        <div className='flex items-center space-x-1'>
                            <img src={user?.photoURL} alt=" " className='h-10 rounded-full'
                                onClick={() => auth.signOut()} />
                                <h4 className='text-white text-xs font-medium'>
                                {user?.displayName}
                                    <span className='text-discord_userId block'>#{user?.uid.substring(0, 4)}</span>
                                </h4>
                        </div>

                        <div className='text-gray-400 flex items-center'>
                            <div className='hover:bg-discord_iconHoverBg p-2 rounded-md'>
                                <MicrophoneIcon className="h-5 icon" />
                            </div>
                            <div className='hover:bg-discord_iconHoverBg p-2 rounded-md'>
                                <PhoneIcon className="h-5 icon" />
                            </div>
                            <div className='hover:bg-discord_iconHoverBg p-2 rounded-md'>
                                <CogIcon className="h-5 icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-discord_chatBg flex-grow'>
                    <Chat />
                </div>
            </div>
        </>
    );
}

export default Home;