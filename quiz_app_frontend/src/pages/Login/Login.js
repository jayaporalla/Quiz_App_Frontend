import { Fragment } from "react/jsx-runtime";
import { AuthLogin, Navbar } from "../../components/index";

export const Login = () => {
    return (
        <Fragment>
            <Navbar route="login"/>
            <AuthLogin />
        </Fragment>
    )
}