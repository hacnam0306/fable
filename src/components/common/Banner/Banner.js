import styles from './Banner.module.scss'
import {useState,useEffect} from 'react'
const Banner = () => {
    const slogan = ['FREE! Cosmetic Pouch on all orders.','Due to high demand, shipments are subject to carrier delays of up to 3 days.']
    const [change,setChange] = useState(true)
    useEffect(() => {
     const timerId =   setInterval(() => {
            setChange(!change)
        }, 3000);
        return () => clearInterval(timerId)
    }, [change])
    return (
        <div className={`${styles.banner} text-center `}>
          {change ? <p>{slogan[0]}</p> : <p>{slogan[1]}</p> }
        </div>
    )
}

export default Banner
