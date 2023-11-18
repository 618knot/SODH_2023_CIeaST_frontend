import Cookies from "react-cookie/es6/Cookies";

const cookies = new Cookies();

const isLogin = () => {
    const cookieValue = cookies.get("session_id");
    if (cookieValue === undefined && !(window.location.pathname == "/login" || window.location.pathname == "/signup")) {
        window.location.href = "/login";
    } else if (cookieValue && (window.location.pathname == "/login" || window.location.pathname == "/signup")) {
        window.location.href = "/";
    }
}

export default isLogin;