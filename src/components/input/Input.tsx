import "./Input.scss";

type InputProps = {
    id: string;
    label: string;
    placeHolder?: string;
    comment?: string;
};

const Input = (props: InputProps) => {
    return (
        <div className="input-container">
            <label>{props.label}</label>
            {props.comment?.length != 0 && <span className="comment">{props.comment}</span>}
            <input id={props.id} placeholder={props.placeHolder}></input>
        </div>
    );
};

export default Input;

export const handleErrorMessage = (id: string, errorMessage: string): void => {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    const errorElementID: string = id + "-error";

    // エラーメッセージ要素の取得
    const errorElement = document.getElementById(errorElementID);
    
    // エラーメッセージの長さでエラーの有無を判断する
    if (errorMessage.length && errorElement === null) {
        inputElement.classList.add("error");

        const errorSpan = document.createElement("span");
        errorSpan.classList.add("input-error-message");
        errorSpan.id = errorElementID;
        errorSpan.textContent = errorMessage;

        inputElement.after(errorSpan);
    } else if (errorElement) {
        inputElement.classList.remove("error");
        errorElement.remove();
    }
}