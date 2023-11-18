import { useState } from "react";
import DatePicker from "react-datepicker";
import "./PeriodPicker.scss"

type PeriodPickerProps = {
    label: string
};



const PeriodPicker = (props: PeriodPickerProps) => {
    const Today = new Date();
    const [date1, setDate1] = useState(Today);
    const [date2, setDate2] = useState(Today);

    return (
        <div className="period-picker-contaner">
            <label className="datepicker-label">{props.label}</label>
            <div className="pickers-contaner">
                <DatePicker
                    id={"period-picker"}
                    selected={ date1 }
                    onChange={ selectedDate => {setDate1(selectedDate || Today)} }
                    dateFormat={"yyyy/MM/dd"}
                />
                <h3>~</h3>
                <DatePicker
                    id={"period-picker"}
                    selected={ date2 }
                    onChange={ selectedDate => {setDate2(selectedDate || Today)} }
                    dateFormat={"yyyy/MM/dd"}
                />
            </div>
        </div>
    );
};

export default PeriodPicker;