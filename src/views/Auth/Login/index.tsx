import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./Login.module.css"

const LoginViews =()=> {
    const router = useRouter();
    
    const handleLogin = () => {
        router.push("/products");
    };
    return(
        <div className={styles.login}>
            <h1>Login Page</h1>
            <button onClick={ () => handleLogin()}>Login</button>
            <p>Belum Punya Akun ? Registrasi <Link href={"/auth/register"}>disini</Link></p>
        </div>
    )
} 

export default LoginViews