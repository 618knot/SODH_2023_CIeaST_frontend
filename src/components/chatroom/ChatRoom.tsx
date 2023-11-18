import { Link } from "react-router-dom";
import "./ChatRoom.scss"

type ChatRoomProps = {
    username: string;
    address: string;
    link: string;
};

const ChatRoom = (props: ChatRoomProps) => {
    return(
        <Link to={props.link} className="chatroom-container">
            <span className="user-name">{props.username}</span>
            <span className="address">住所: {props.address}</span>
        </Link>
    );
};

export default ChatRoom;