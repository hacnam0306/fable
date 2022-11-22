import Header from '../../page/Header/Header'
import styles from '../../page/Header/Header.module.scss'
import {Link} from 'react-router-dom'
const Left = () => {
    return (
        <div className={styles.header_left}>
            <h2 className="fs-1">Inspired by Ancient<br/> Indian Beauty Secrets<br/>& Deep Rooted<br/> Wisdom.</h2>
            <button className="btn btn-primary btn-mess  mt-3"><Link className="text-white" to="/shop">Shop All</Link></button>
        </div>
    )
}
const Right = () =>{
    return (
        <div className={styles.header_right}>
                <img className='w-50' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/featured-content_96f21c7f-decd-4824-8628-4e9aca4a512a_540x.png?v=1633652701"/>
            </div>
    )
    
}
const Feature = () => {
    return (
        <div>

        <div>
            <Header left={<Left/>} right={<Right/>} />
        </div>
        <div className={styles.brand}>
            <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/vogue_548c28b0-2339-4fac-99b9-d8887fdb3403_x80.png?v=1628386538" />
            <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/forbes_510d5f0c-18a5-4a2b-8ce2-2e4f7b1ec2c3_x80.png?v=1628386552"/>
            <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/instyle_6991a641-c28b-428f-9cde-1b24786abcc5_x80.png?v=1628386570"/>
            <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/allure_8390f5a7-57f8-43f8-b913-b105babf7d6b_x80.png?v=1628386582"/>
        </div>
        </div>

    )
}

export default Feature