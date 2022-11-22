import styles from './Navigation.module.scss'
import {useState,useContext} from 'react'
import { IoSearchOutline,IoLogOutOutline,IoBagHandleOutline,IoChevronDownSharp,IoArrowForward,IoCartOutline,IoCloseSharp } from "react-icons/io5";
import Banner from './../Banner/Banner';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import {ProductsContext,actions} from '../../../store'


const Navigation = () => {
    const [logo,setLogo] = useState(true)
    const changeLogo = () => {
        if(window.scrollY >0){
            setLogo(false);
        }else{
            setLogo(true);
        }
    }
    window.addEventListener("scroll", changeLogo)
  const [state,dispatch] = useContext(ProductsContext);
    const [show,setShow] = useState(false)

    return (
        <div>
              <div className="fixed-top">
        <Banner/>
        <div  className={`${styles.navigation}  `}>
            <ul className={styles.nav_menu} >
                <li className={`${styles.nav_link} ${styles.link_shop} `}>
                    Shop    <IoChevronDownSharp/>
                    <div className={`${styles.link_shop_dropdown}`}>
                    <ul className={` row text-center border-top border-dark `}>
                        <li className="col-lg-4 border-right-dark flex-center flex-center-column">
                                <div className="d-flex justify-content-around ">
                                <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-journey_274x274.png?v=4336126175891606084' />
                                <div>
                                    <p className="fs-4 fw-bold">Our Journey</p>
                                    <p>Discover our story</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-around">
                            <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-fable-fund_274x274.png?v=2679412296720485169' />
                                <div>
                                    <p className="fs-4 fw-bold">Fable Fund</p>
                                    <p>Save the wild ones</p>
                                </div>
                            </div>
                            <button className="btn btn-buy px-5 py-3"><Link  to="/shop">Shop All</Link></button>
                        </li>
                        <li className="col-lg-4 row ">
                            <div className="row">
                            <div className="col-lg-4">
                                <Card className="border-0 background--white">
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-col2-bestsellers_264x220.png?v=16355339904851830313"/>
                                    <Card.Body>
                                        <Card.Title>Best Seller</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                            <Card className="border-0 background--white">
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-col2-giftsets_264x220.png?v=263773231391143262"/>
                                    <Card.Body>
                                        <Card.Title>Gift Sets & Bundles</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                   
                        <div className="col-lg-4">
                             <Card className="border-0 background--white">
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-col2-giftcards_264x220.png?v=3594736736147368084"/>
                                    <Card.Body>
                                        <Card.Title>Gift Cards</Card.Title>
                                    </Card.Body>
                                </Card>
                        </div>
                            </div>
                              <div className="row">
                            <div className="col-lg-4">
                                <Card className="border-0 background--white">
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-col2-bestsellers_264x220.png?v=16355339904851830313"/>
                                    <Card.Body>
                                        <Card.Title>Best Seller</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                            <Card className="border-0 background--white">
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-col2-giftsets_264x220.png?v=263773231391143262"/>
                                    <Card.Body>
                                        <Card.Title>Gift Sets & Bundles</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                   
                        <div className="col-lg-4">
                             <Card className="border-0 background--white">
                                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-col2-giftcards_264x220.png?v=3594736736147368084"/>
                                    <Card.Body>
                                        <Card.Title>Gift Cards</Card.Title>
                                    </Card.Body>
                                </Card>
                        </div>
                            </div>
                        </li>
                        <li className="col-lg-4 border-left-dark">
                             <Card className="border-0 background--white  flex-center ">
                                    <Card.Img variant="top" className="w-50" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/header-490_360x.png?v=1635353016"/>
                                    <Card.Body>
                                        <Card.Title>
                                        SahaScalp<br/>
                                        Amla Soothing<br/>
                                        Serum<IoArrowForward/>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                        </li>
                    </ul>

                    </div>
                 
                </li>
                <li className={`${styles.nav_link} ${styles.link_about}`}>
                    About<IoChevronDownSharp/>
                    <ul className={`${styles.link_about_dropMenu} border-top border-dark text center`}>
                    <li className="d-flex justify-content-around ">
                        <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-journey_274x274.png?v=4336126175891606084' />
                        <div>
                            <p className="fs-4 fw-bold">Our Journey</p>
                            <p>Discover our story</p>
                        </div>
                    </li>
                    <li className="d-flex justify-content-around">
                    <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-fable-fund_274x274.png?v=2679412296720485169' />
                        <div>
                            <p className="fs-4 fw-bold">Fable Fund</p>
                            <p>Save the wild ones</p>
                        </div>
                    </li>
            
                </ul>

                </li>
                <li  className={`${styles.nav_link} ${styles.link_discover}`}>
                    Discover <IoChevronDownSharp/>

                    <ul className={`${styles.link_discover_dropMenu} border-top border-dark  text center`}>
                    <li className="d-flex justify-content-around ">
                        <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-mane-monocle_274x274.png?v=756996268545127745' />
                        <div>
                            <p className="fs-4 fw-bold">Mane Monocle</p>
                            <p>Weakly Blog</p>
                        </div>
                    </li>
                    <li className="d-flex justify-content-around">
                    <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-tiger-tribe_274x274.png?v=14100622857476718829' />
                        <div>
                            <p className="fs-4 fw-bold">Tiger Tribe</p>
                            <p>Get Rewards</p>
                        </div>
                    </li>
                    <li className="d-flex justify-content-around">
                    <img className="w-25" src='https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-faq_274x274.png?v=3989846775126505601' />
                        <div>
                            <p className="fs-4 fw-bold">FAQ</p>
                            <p>Find out more</p>
                        </div>
                    </li>
                </ul>

                </li>
            </ul>
            <Link to="/">
               {logo ? <Link to="/">   <img  className={styles.main_logo} src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/logo_76a9596a-d59f-410c-9f46-819ee672e261_x74.png?v=1628461298"/> </Link>: <Link to="/">  <img className={styles.sub_logo} src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-tiger-tribe_274x274.png?v=14100622857476718829"/> </Link>}
            </Link>
            <ul className={` me-5 ${styles.nav_menu}`}>
                <li className={styles.nav_link}><IoSearchOutline/></li>
                <li className={styles.nav_link}><IoLogOutOutline/></li>
                <li className={styles.nav_link} >
                    <IoBagHandleOutline onClick={() => setShow(!show)} className={styles.cart} />
                   { show ?  <div className={`${styles.cart_dropDown} p-3 `} >
                  
                        <div className="d-flex justify-content-between border-bottom">
                            <p><IoCartOutline /> <span className={styles.orders}>{`${state.cart.length}`}</span></p>
                            <p className="text-success" >Total: ${state.cart.reduce((a,b) => a + (b.fixed_price ? b.fixed_price : b.price ) , 0)}</p>
                        </div>
                       { <div className={`mh-75vh ${styles.orders_list} mt-3`}>
                         { state.cart.length === 0 ? <div className="d-flex flex-column ">
                            <img className="w-50 mx-auto" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/nav-tiger-tribe_274x274.png?v=14100622857476718829" />
                                <h3 className="text-center text-muted mt-5">Your Cart is empty !</h3>
                                <button className="btn btn-white mt-5 w-75 mx-auto rounded"><Link onClick={() => setShow(false)}  to="/shop">Shop Now</Link> </button>
                             </div>
                             :
                             <div>
                                 {state.cart.map( item => (
                                    <div className=" d-flex align-center justify-content-around border-bottom ">
                                           <img className="w-15" src={item.image_after}/>
                                           <div className="  mt-5 text-center align-center d-flex flex-column my-auto">
                                              <p className="fs-6">{item.name}</p>
                                              <div>
                                                   <p className="fs-6">{item.fixed_price ? <span className="text-danger"> ${item.fixed_price}</span> : <span className="text-primary">${item.price}</span>}</p>
                                               </div>
                                           </div>
                                           <IoCloseSharp onClick={(item) => dispatch(actions.deleteProductToCart(item))
                                         } className="my-auto" />
                                    </div>
                                 ))}
                             </div>
                            }  
                        </div>}
                    </div> : '' }
                <span className="text-danger fs-6">{`(${state.cart.length} )`}</span>
                </li>
            </ul>
        </div>
        </div>
         
        </div>

      
    )
}

export default Navigation
