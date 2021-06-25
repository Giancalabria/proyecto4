import { useState } from "react"
import { Input } from "../components/input/input"
import styles from "./login.module.scss"
import auriculares from "../assets/icons/auriculares.svg"
import { Button } from "../components/button/button"
export const Login = () => {
    const [username, setUsernname] = useState()
    const [password, setPassword] = useState()

    const verify = () => {
        let user = "gian"
        let pass = "hola"
        if (username === user && password === pass){
            window.location.replace("http://localhost:3000/main");
        }  
    }

    return( 
    
    <div className={styles.login}>
        <div className={styles.left}>
            <h1 className={styles.title}>Prize finder</h1>
            <div className={styles.subtitleDiv}>
                <img src={auriculares} className={styles.logo}/>
                <p className={styles.subtitle}>Encuentra los mejores premios aquí!</p>
            </div>
            <Input label="Usuario" name="user" value={username} onChange={({target}) => setUsernname(target.value)} />
            <Input label="Contraseña" name="password" value={password} onChange={({target}) => setPassword(target.value)} type="password"/>
            <Button className="button" onClick={() => verify()} content="Iniciar sesion"/>
        </div>
        <div className={styles.right}>
        </div>
    </div>)
}