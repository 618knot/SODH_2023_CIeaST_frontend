import { CSSProperties } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./SignUp.scss";
import { errorNotification, successNotification } from "../../util/notification";
import axios from "../../util/axios";

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
                placeHolder="cieast@example.com"
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
                onClick={ onClick }
            />
        </div>
    );
};

// TODO: フロント側のバリデーション実装
const onClick = () => {
    const inputElements = document.getElementsByTagName("input");
    const elementsArray = Array.from(inputElements);
    const elementValues: any[] = [];
    const requestKeys = ["name", "email", "password"];

    elementsArray.forEach(element => {
        elementValues.push(element.value);
    });

    const requestData = Object.fromEntries(requestKeys.map((key, index) => [key, elementValues[index]]));
    console.log(requestData)

    axios.post("/users/register", requestData).then(
        (response) => {
            console.log(response.data["status"])
            if(response.data["status"] == "error") {
                errorNotification(response.data["message"]);
            } else {
                successNotification("登録に成功しました");
                window.location.href = "/login";
            }
        },
        (response) => {
            console.log(response)
            errorNotification("登録に失敗しました");
        }
    );
}

export default SignUp;