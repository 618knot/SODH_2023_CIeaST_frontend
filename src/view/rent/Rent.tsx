import { useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import DatePickerForm from "../../components/datepicker/DatePickerForm";
import Input from "../../components/input/Input";
import isLogin from "../../util/isLogin";
import "./Rent.scss";
import axios from "../../util/axios";
import { errorNotification, successNotification } from "../../util/notification";
import { Cookies } from "react-cookie";

// interface State {
//     address: string;
// };

let globalAddress ="";
document.removeEventListener("click", () => {
        
});

const Rent = () => {
    isLogin();

    const location = useLocation();

    globalAddress = location.state

    
    


    return (
        <div className="rent-container">
            <h1>駐車場を貸す</h1>
            <h2>{location.state}</h2>
            <DatePickerForm
                id="start-date"
                label="貸出開始日"
            />
            <Input
                id="fee"
                label="料金"
                comment="月額(円)"
            />
            <Input
                id="comment"
                label="コメント"
            />
            <Button
                label="登録"
                className="primary"
                onClick={onClick}
            />
        </div>
    );
};

const onClick = () => {
    const inputElements = document.getElementsByTagName("input");
    const elementsArray = Array.from(inputElements);
    const elementValues: any[] = [];
    const inputKeys = ["start_date", "fee", "comment"];

    elementsArray.forEach(element => {
        elementValues.push(element.value);
    });

    const requestData = Object.fromEntries(inputKeys.map((key, index) => [key, elementValues[index]]));
    requestData["address"] = globalAddress;

    const cookies = new Cookies();
    const cookieValue = cookies.get("session_id");
    axios.post("/rent_parking/" + cookieValue, requestData).then(
        () => {
            successNotification("登録に成功しました");
            window.location.href = "/";
        },
        () => {
            errorNotification("登録に失敗しました");
        }
    );

}

export default Rent;