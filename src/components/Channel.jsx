import { HashtagIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from '../features/channelSlice';

function Channel({id, ChannelName}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const setChannel = () => {
        dispatch(setChannelInfo({
            channelId: id,
            ChannelName: ChannelName,
        })
    )
    //carziest line of code
        navigate(`/channels/${id}`)
    };

return (
    <div className='font-medium flex items-center cursor-pointer 
        hover:bg-discord_channelHoverBg p-1 rounded-md hover:text-white'
        onClick={setChannel} >
        <HashtagIcon className="h-5 mr-2" />
        {ChannelName}
    </div>
)
}

export default Channel;
