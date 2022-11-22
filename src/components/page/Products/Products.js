
import { AiOutlineArrowRight,AiFillStar,AiOutlineHeart,AiOutlineEnvironment,AiOutlineShop,AiOutlineShoppingCart,AiOutlineSketch } from "react-icons/ai";
import styles from './Products.module.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Link} from 'react-router-dom'
const ProductCard = ({src,name,isSale ,price="$32.00 USD",fixedPrice=''}) =>{

        return(
                <Card  className={`${styles.card_main} media-object`} style={{ width: '18rem' }}>
           
                        <Card.Img variant="top" src={src} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            {isSale ?
                            <Card.Text>
                             <p><strike>{price}</strike> <span className="text-danger">{fixedPrice}</span></p> 
                            </Card.Text>
                            :
                            <Card.Text>{price}</Card.Text>
                        }
                            <Card.Text>
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                            </Card.Text>
                
  
                            <Button  className="btn-buy option-button" variant="primary"><Link to="/shop">ADD TO BAG</Link></Button>
                        </Card.Body>
                        
            </Card>


)}
const Products = () => {

    return (
        <div className={styles.products}>
            <h1 className="text-center pt-5">Healthy hair, wildly you</h1>
            <p className="text-center"><u> Shop all products </u> <AiOutlineArrowRight/> </p>
            <Swiper
                 scrollbar={{ draggable: true }}
                slidesPerView={4}
               
            >       
                   <SwiperSlide><ProductCard price='From $16.00 USD' name='HoliRoots Hair Oil' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-hair-oil_360x.png?v=1629407455" /></SwiperSlide> 
                   <SwiperSlide><ProductCard name='HoliRoots Hair Mask' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/hair-mask_360x.png?v=1630335017" /></SwiperSlide> 
                   <SwiperSlide><ProductCard isSale fixedPrice='$114.00 USD' name="Ritual Collection" price='$124.00 USD' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-ritual-bundle_360x.png?v=1629407239" /></SwiperSlide> 
                   <SwiperSlide><ProductCard name='SahaScalp Amla Soothing Serum' price='$34.00 USD'src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/sahascalp-amla-soothing-serum_360x.png?v=1629912623" /></SwiperSlide> 
                   <SwiperSlide><ProductCard isSale fixedPrice='$53.00 USD' name="Shampoo & Conditioner Duo" price='$58.00 USD' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-shampoo-conditioner-duo_360x.png?v=1629407191" /></SwiperSlide> 
                   <SwiperSlide><ProductCard name="HoliRoots Shampoo" price='$29.00 USD' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-shampoo_360x.png?v=1629407720" /></SwiperSlide> 
                   <SwiperSlide><ProductCard name="HoliRoots Conditioner" price='$29.00 USD' src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/holiroots-conditioner_360x.png?v=1629407699" /></SwiperSlide> 
                   <SwiperSlide><ProductCard name="SahaScalp Wild Ginger Purifying Scrub" price="$32.00 USD" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/products/sahascalp-wild-ginger-purifying-scrub_360x.png?v=1629914066" /></SwiperSlide> 
            </Swiper>
            <div className={styles.symbolContainer}>
                <div className={styles.symbol}>
                    <AiOutlineHeart/>
                </div>
                <div className={styles.symbol}>
                <AiOutlineEnvironment/>
                </div>
                <div className={styles.symbol}>
                <AiOutlineShop/>
                    </div>
                <div className={styles.symbol}>
                 <AiOutlineShoppingCart/>    
                    </div>
                <div className={styles.symbol}>
                   < AiOutlineSketch/>
                </div>
            </div>
        </div>
    )
}

export default Products
