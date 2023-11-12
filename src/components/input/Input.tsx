import "./Input.scss";

type InputProps = {
    id: string;
    label: string;
    comment?: string;
};

const Input = () => {
    return (
        <div className="input-container">
            <label>ラベル</label>
            <span className="comment">説明説明説明</span>
            <input placeholder="aaaa"></input>
        </div>
    );
};

export default Input;

export const handleErrorMessage = (id: string, errorMessage: string): void => {
    const inputElement = document.getElementById(id) as HTMLInputElement;
    const errorElementID: string = id + "-error";
    const errorElement = document.getElementById(errorElementID);
    
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