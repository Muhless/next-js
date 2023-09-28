import Navbar from "../Navbar"

type AppProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppProps) => {
    const {children} = props;
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default AppShell