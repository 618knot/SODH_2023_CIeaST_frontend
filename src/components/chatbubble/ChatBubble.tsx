import "./ChatBubble.scss"

type ChatBubbleProps = {
    who: "me" | "other";
    username?: string;
    mesage: string;
};

const ChatBubble = (props: ChatBubbleProps) => {
    return (
        <div className={"chat-bubble-container " + props.who}>
            { props.who == "other" && <label className="other">{props.username}</label> }
            { props.who == "me" && <label className="me">あなた</label> }
            <div className="message-container">
                {props.mesage}
            </div>
        </div>
    );
};

export default ChatBubble;