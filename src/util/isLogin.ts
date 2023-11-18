import exp from "constants";
import Cookies from "react-cookie/es6/Cookies";

const cookies = new Cookies();

const isLogin = () => {
    const cookieValue = cookies.get("session_id");
    if (!cookieValue) {
        window.location.href = "/login";
    }
}

export default isLogin;