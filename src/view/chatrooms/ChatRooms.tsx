import ChatRoom from "../../components/chatroom/ChatRoom";

const ChatRooms = () => {
    return (
        <div className="chatrooms-container">
            <h1>チャットルーム一覧</h1>
            <ChatRoom
                username="駐車場 太郎"
                address="北海道札幌市中央区"
                link="/taro"
            />
            <ChatRoom
                username="駐車場 次郎"
                address="北海道札幌市中央区"
                link="/jiro"
            />
        </div>
    );
};

export default ChatRooms;