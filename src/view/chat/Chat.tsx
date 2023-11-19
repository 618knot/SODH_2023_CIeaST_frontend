import Button from "../../components/button/Button";
import ChatBubble from "../../components/chatbubble/ChatBubble";
import "./Chat.scss";

const Chat = () => {
    return (
        <div className="chat-container">
            <div className="chat-header">
                <h3>チャット</h3>
                <span>住所住所住所, 10000000円/月, 2023/11/xx~2023/12/xx</span>
            </div>
            <ChatBubble
                who="me"
                mesage="aaaaaaaaaaaaaaaaaaa"
            />
            <ChatBubble
                who="other"
                username="駐車場 太郎"
                mesage="aaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
                        <ChatBubble
                who="other"
                username="駐車場 太郎"
                mesage="aaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
                        <ChatBubble
                who="other"
                username="駐車場 太郎"
                mesage="aaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
                        <ChatBubble
                who="other"
                username="駐車場 太郎"
                mesage="aaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
                        <ChatBubble
                who="other"
                username="駐車場 太郎"
                mesage="aaaaaaaaaaaaaaaaaaabbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            />
            <div className="chat-footer">
                <input type="text" />
                <Button
                    className="primary"
                    label="送信"
                />
            </div>
        </div>
    );
};

export default Chat;