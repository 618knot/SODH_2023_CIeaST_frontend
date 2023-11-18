import { CSSProperties } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./LogIn.scss";
import axios from "../../util/axios";
import { errorNotification, successNotification } from "../../util/notification";
import { Cookies, useCookies } from "react-cookie";

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
                    label="ログイン"
                    className="primary"
                    style={style}
                    onClick={ onClick }
                />
                <Button
                    label="新規登録"
                    className="secondary"
                    style={style}
                    onClick={ () => { window.location.href = "/signup" } }
                />
            </div>
        </div>
    );
};

const onClick = () => {
    const inputElements = document.getElementsByTagName("input");
    const elementsArray = Array.from(inputElements);
    const elementValues: any[] = [];
    const requestKeys = ["email", "password"];

    elementsArray.forEach(element => {
        elementValues.push(element.value);
    });

    const requestData = Object.fromEntries(requestKeys.map((key, index) => [key, elementValues[index]]));

    axios.post("/sessions/login", requestData).then(
        (response) => {
            console.log(response.data)
            if(response.data["status"] == "error") {
                errorNotification(response.data["message"]);
            } else {
                successNotification("ログインに成功しました");

                // cookieの書き込み
                const cookies = new Cookies();
                cookies.set("session_id", response.data["session id"]);

                window.location.href = "/";
            }
        },
        (response) => {
            console.log(response)
            errorNotification("ログインに失敗しました");
        }
    );
};

export default LogIn;