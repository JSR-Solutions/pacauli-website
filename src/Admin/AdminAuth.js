import { reactLocalStorage } from "reactjs-localstorage";

function isAuth() {
    const admin = reactLocalStorage.getObject("pacauli-admin");
    if(admin.role === "admin") {
        console.log("ADMIN ACCESS GRANTED");
        return true;
    } else {
        console.log("ADMIN ACCESS DENIED");
        return false;
    }
}

export default isAuth;
