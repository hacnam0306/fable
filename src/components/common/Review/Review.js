import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillStar} from "react-icons/ai";

const Review = () => {
    return (
        <div>
        <Swiper
        scrollbar={{ draggable: true }}
       slidesPerView={2.5}
       className="text-center p-fs-24px"
      >
            <SwiperSlide >
                <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                <p>“OMG fabulous. First use <br/>on my fine hair and left it <br/> feeling so soft and <br/>manageable. No flyaway <br/>bits anymore without<br/> weighing it down. My new<br/> best hair care product.<br/> Thank you so much.”</p>
                <h2>Louise</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-75" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/testimonial-1_540x.jpg?v=1628211732"/>
            </SwiperSlide>
            <SwiperSlide>
                <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                <p>“I really feel like these <br/>products are worth all the <br/> hype, they have <br/>transformed my hair <br/>bits anymore without</p>
                <h2>Renee</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img  className="w-75" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/testimonial-2_720x.jpg?v=1628211768"/>
            </SwiperSlide>
            <SwiperSlide>
  
                <p><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                <p>“I loved that when I <br/>applied the shampoo to <br/> my wet hair with only 2 <br/>pumps,
             it lathers super <br/>ast. I like that because I<br/>now that my hair is being <br/> cleansed deeply.” </p>
                <h2>Edith</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-75" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/testimonial-1_540x.jpg?v=1628211732"/>
            </SwiperSlide>
        </Swiper>
        <div className="container-fluid">
            <div className="row background--tiger text-center p-10 mt-10" >
                <div className="col-lg-6 text-white mt-5 rounded">
                    <h1 data-text="Monocle">Monocle</h1>
                    <h2>Protect your hair, protect their habitat.</h2>
                    <button className="btn btn-white mt-5 btn-mess  mt-3">LEARN MORE</button>
                </div>
                <div className="col-lg-6">
                    <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/fund-fg_360x.png?v=1628212224"/>
                </div>
            </div>
        </div>
        </div>
    
    )
}

export default Review
