import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatepickerForm.scss";

type DatePickerFormProps = {
    id: string;
    label: string;
    comment?: string;
};

const DatePickerForm = (props: DatePickerFormProps) => {
    const Today = new Date();
    const [date, setDate] = useState(Today);

    return (
        <div className="datepicker-container">
            <label className="datepicker-label">{props.label}</label>
            {props.comment?.length != 0 && <span className="comment">{props.comment}</span>}
            <DatePicker
                id={props.id}
                selected={ date }
                onChange={ selectedDate => {setDate(selectedDate || Today)} }
                dateFormat={"yyyy/MM/dd"}
            />
        </div>
    );
}

export default DatePickerForm;