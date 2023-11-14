import { CSSProperties } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./LogIn.scss";

const style: CSSProperties = {
    width: "300px",
};

const LogIn = () => {
    return (
        <div className="signup-container">
            <h1>ログイン</h1>
            <Input
                id="email"
                label="メールアドレス"
                placeHolder="cieast@example.com"
            />
            <Input
                id="password"
                label="パスワード"
            />
            <div className="button-container">
                <Button
                    label="登録"
                    className="primary"
                    style={style}
                />
                <Button
                    label="新規登録"
                    className="secondary"
                    style={style}
                />
            </div>
        </div>
    );
};

export default LogIn;