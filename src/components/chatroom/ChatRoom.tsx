import "./ChatRoom.scss"

type ChatRoomProps = {
    username: string;
    address: string;
};

const ChatRoom = (props: ChatRoomProps) => {
    return(
        <div className="chatroom-container">
            <span className="user-name">{props.username}</span>
            <span className="address">住所: {props.address}</span>
        </div>
    );
};

export default ChatRoom;