import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter,AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="row border-top border-dark m-5 p-5 background--white">
            <div className="col-lg-6 border-right-dark px-5">
                <div className="d-flex">
                    <img src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/newsletter-footer_180x.png?v=1628207567"/>
                    <div className="ms-3">
                        <h1 className="fw-bold mt-3 ">Join the tribe</h1>
                        <h3>This is the place for wild news, invitations and good karma treats!</h3>
                    </div>
                </div>
                <form>
                <input type="text" id="email" className="d-block input--custom mb-3" placeholder="Email Address" />
                <input type="text"  className="d-block input--custom mb-3" id="phoneNumber" placeholder="Phone Number (OPTIONAL)" />
                </form>
                <p>By clicking Sign Up, you agree to receive marketing text messages from Fable & Mane at the number provided, including messages sent by autodialer. Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel. View our Privacy Policy and Terms of Service.</p>
                <button className="btn btn-buy px-5 py-3">SIGN UP</button>
            </div>
            <div className="col-lg-6 px-5">
                <div className="row border-bottom border-dark pb-5">
                    <ul className="col-lg-4 ">
                        <li className="text-dark fs-1 mb-2">Shop</li>
                        <li className="fs-5 "><u>Shop All</u></li>
                        <li className="fs-5 "><u>HoliRoots Ritual</u></li>
                        <li className="fs-5 "><u>SahaScalp Ritual</u></li>
                        <li className="fs-5 "><u>Shop Sets</u></li>

                    </ul>
                    <ul className="col-lg-4">
                        <li className="text-dark fs-1 mb-2">About Us</li>
                        <li className="fs-5 "><u>Our Journey</u></li>
                        <li className="fs-5 "><u>The Fable Fund</u></li>
                        <li className="fs-5 "><u>Mane Monocle</u></li>
                        <li className="fs-5 "><u>Rewards</u></li>

                    </ul>
                    <ul className="col-lg-4">
                        <li className="text-dark fs-1 mb-2">Get Help</li>
                        <li><u>Help/FAQ</u></li>
                        <li><u>Contact Us</u></li>
                        <li><u>Find Us/Stockists</u></li>
                    </ul>
                </div>
                <div className="row mt-5">
                        <div className="col-lg-6 text-center">
                            <h3>Follow Us</h3>
                            <ul className="d-flex gap-50px mt-3">
                                <li><AiOutlineInstagram size={40}/></li>
                                <li><AiOutlineFacebook size={40}/></li>
                                <li><AiOutlineTwitter size={40}/></li>
                                <li><AiOutlineYoutube size={40}/></li>
                            </ul>
                            <h5 className="mt-5">© AKITA BRANDS, INC 2021</h5>
                        </div>
                        <div className="col-lg-6 d-flex gap-50px mt-10  ">
                            <p><u>Privacy Policy </u></p>
                            <p><u>Terms & Conditions</u></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
