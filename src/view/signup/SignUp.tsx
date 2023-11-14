import { CSSProperties } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./SignUp.scss";

const style: CSSProperties = {
    width: "300px",
};

const SignUp = () => {
    return (
        <div className="signup-container">
            <h1>ユーザー登録</h1>
            <Input
                id="user-name"
                label="ユーザー名"
            />
            <Input
                id="email"
                label="メールアドレス"
            />
            <Input
                id="password"
                label="パスワード"
                comment="英数字を含む8文字以上"
            />
            <Button
                label="登録"
                className="primary"
                style={style}
            />
        </div>
    );
};

export default SignUp;