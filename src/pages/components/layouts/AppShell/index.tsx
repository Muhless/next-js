import { useRouter } from "next/router";
import Navbar from "../Navbar"

type AppProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register"];


const AppShell = (props: AppProps) => {
    const { children } = props;
    const {pathname } = useRouter();
    return (
        <div>
            {!disableNavbar.includes(pathname) && <Navbar/>}
            {children}
        </div>
    )
}

export default AppShell