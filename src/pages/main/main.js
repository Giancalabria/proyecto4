import styles from "./main.module.scss"
import logo from "../../assets/icons/aerolab-logo.svg"
import coin from "../../assets/icons/coin.svg"
import background from "../../assets/png/header-x1.png"
export const Main = () => {
    let points = 6000
    let username = "Gianluca"
   return  (
       <main className={styles.main}>
           <header className={styles.header}>
               <img src={logo} className={styles.logo}/>
               <div className={styles.info}>
                <p className={styles.user}>{username}</p>
                <div className={styles.points}>
                    <p>{points}</p>
                    <img src={coin} className={styles.coin}/>
                </div>
               </div>
           </header>
                <img src={background} className={styles.background} />

       </main>
   )
}