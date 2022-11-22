import {AiOutlineArrowRight} from "react-icons/ai"
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

const Blog = () => {
    return (
        <div >
            <div className="row text-center border-top border-bottom border-dark m-5  py-5 " >
                    <div className="col-lg-4  fs-4 line-height-0_6 border-right-dark ">
                        <p>Mane</p>
                        <p>Mantra</p>
                        <p>Strengthen</p>
                        <p>from within</p>
                    </div>
                    <div className="col-lg-4 line-height-0_6 ">
                        <h4>THE MANE</h4>
                        <h1 className="fs12">Monocle</h1>
                    </div>
                    <div className="col-lg-4 fs-4 fw-bold border-left-dark">
                            <p className="mb-5"><u>Read about<br/>hair wellness
                                                </u> <AiOutlineArrowRight/> 
                            </p>   
                    </div>
            </div>
            <div className="row text-center m-5">
                <div className="col-lg-4">
                    <Card className=" border-0 background--white">
                    <Card.Img className="border-leaf-left"  variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/article-1-full_748x.jpg?v=1628866707" />
                    <Card.Body className="mt-5">
                        <Card.Title>SECRET RECIPES</Card.Title>
                        <Card.Text>
                        Strengthen & nourish roots to grow stronger, healthier hair.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                <Card className="border-round-top background--white border-0">
                    <Card.Img className="border-round-top" variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/article-2-full_748x.jpg?v=1628866775" />
                    <Card.Body className="mt-5">
                        <Card.Title>GRANDMA'S REMEDIES</Card.Title>
                        <Card.Text>
                        The Meaning of Mantra
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                <Card className="border-0 background--white">
                    <Card.Img className="border-leaf-right" variant="top" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/article-3-full_748x.jpg?v=1628866796" />
                    <Card.Body className="mt-5">
                        <Card.Title>HOLIROOTS</Card.Title>
                        <Card.Text>
                        It all started at the roots!
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='banner mt-5'>
                    <h2 data-text="FOLLOW US! @hnam0306">FOLLOW US! @hnam0306</h2>
            </div>
            <Swiper
                        scrollbar={{ draggable: true }}
                        slidesPerView={4.5}
                        className="m-5 "
            >
                <SwiperSlide>
                    <img className="rounded position-relative"   src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/social-1_360x.jpg?v=1628213420"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded "  src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/social-5_360x.jpg?v=1628213744"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded"  src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/social-3_360x.jpg?v=1628213539"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded"  src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/social-6_360x.jpg?v=1628881980"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded"  src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/social-2_309x.jpg?v=1628213511"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="rounded"  src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/social-4_360x.jpg?v=1628213724"/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Blog
