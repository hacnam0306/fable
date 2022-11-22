import styles from './Header.module.scss'

const Left = () => {
        return (
            <div className={styles.header_left}>
            <h1>Happy</h1>
            <h1 className="mb-5">Holidays!</h1>
            <p>To say a little thank you, you can use code</p>
            <p>GIVEBACKHOLIDAYS</p>
            <p>at checkout to get 10% off site-wide*, and</p>
            <p>we'll match that 10% off as a donation to</p>
            <p>our Fable Fund.</p>
            <button className="btn btn-primary btn-mess  mt-3">Read our fouders message</button>
        </div>
        )
}
const Right = () =>{
    return (
        <div className={styles.header_right}>
                <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/MicrosoftTeams-image_33_900x.png?v=1641469159"/>
            </div>
    )
    
}

const Header = ({left=<Left/>,right=<Right/>}) => {

    return (

        <div className={`${styles.header} background--red`}>
            {left}
            {right}
        </div>
    )
}

export default Header
