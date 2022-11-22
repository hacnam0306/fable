import {AiOutlineArrowRight} from "react-icons/ai"
import styles from './Collection.module.scss'
import Card from 'react-bootstrap/Card'
const Collection = () => {
    return (
        <div className={`${styles.collection} text-center p-5`}>
                <h1>Discover our collections</h1>
            <p className="text-center"><u> Shop all products </u> <AiOutlineArrowRight/> </p>
            <div className="row mt-5 p-5">
                <div className="col-lg-6">
                <Card className={`card_main ${styles.img_1}`}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/MicrosoftTeams-image_8_540x.png?v=1636187773"/>
                    <Card.Body>
                        <Card.Title>HoliRoots™</Card.Title>
                             <p className="text-center"><u> Shop collection </u> <AiOutlineArrowRight/> </p>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-lg-6">
                <Card className={`card_main ${styles.img_2}`}>
                    <Card.Img   variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/MicrosoftTeams-image_7_540x.png?v=1636187667"/>
                    <Card.Body>
                        <Card.Title>SahaScalp™</Card.Title>
                           <p className="text-center"><u> Shop collection </u> <AiOutlineArrowRight/> </p>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className='banner'>
                    <h2 data-text="I LET MY INNER LIGHT SHINE!">I LET MY INNER LIGHT SHINE!</h2>
            </div>
        </div>
    )
}

export default Collection
