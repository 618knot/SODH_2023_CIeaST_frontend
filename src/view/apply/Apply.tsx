import Button from "../../components/button/Button";
import PeriodPicker from "../../components/periodpicker/PeriodPicker";
import "./Apply.scss"

const Apply = () => {
    return(
        <div className="apply-container">
            <h1>駐車場を借りる</h1>
            <h4>貸出者: 貸出太郎</h4>
            <h4>住所: 北海道札幌市中央区のどっか</h4>
            <h4>月額料金: 100000000円</h4>
            <h4>貸出者のコメント: 安すぎる</h4>
            <PeriodPicker
                label="貸出期間"
            />
            <div className="buttons-container">
                <Button
                    label="貸出者とチャットする"
                    className="secondary"
                />
                <Button
                    label="この条件で借りる"
                    className="primary"
                />
            </div>
        </div>
    );
};

export default Apply;