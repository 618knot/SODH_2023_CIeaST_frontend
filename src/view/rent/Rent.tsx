import Button from "../../components/button/Button";
import DatePickerForm from "../../components/datepicker/DatePickerForm";
import Input from "../../components/input/Input";
import isLogin from "../../util/isLogin";
import "./Rent.scss";

const address = "住所";

const Rent = () => {
    isLogin();
    return (
        <div className="rent-container">
            <h1>駐車場を貸す</h1>
            <h2>{address}</h2>
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
    const inputKeys = ["start date", "fee", "comment"];

    elementsArray.forEach(element => {
        elementValues.push(element.value);
    });

    const requestData = Object.fromEntries(inputKeys.map((key, index) => [key, elementValues[index]]));
    requestData["address"] = address

}

export default Rent;