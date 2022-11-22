import {AiOutlineArrowRight} from "react-icons/ai"

const Video = () => {
    return (
        <div className={`text-center p-5 mt-5 background--white`}>
            <h1>Time for a fable</h1>
            <p className="mb-5"><u> View more</u> <AiOutlineArrowRight/> </p>
            <video  className='w-100 d-block rounded' controls="true" autoplay="autoplay" loop="true" muted >
                <source src='https://player.vimeo.com/external/397417984.hd.mp4?s=66dd13fa351aee128f9fedf3ab3afb16396ab0bf&profile_id=175'  type="video/mp4"  />
            </video>
            <div className="container-fluid">

            <div className="mt-10 p-5 row rounded background--white d-flex " >
                <div className="col-lg-6">
                    <img className="w-75" src="https://cdn.shopify.com/s/files/1/0587/3801/6450/files/story_720x.png?v=1628211564" />
                </div>
                <div className="col-lg-6">
                <h1 >This is a family</h1>
                <h1 >business. Meet</h1>
                <h1 >our founders</h1>
                <p className="fs-5 mt-3">Sibling founders Akash & Niki Mehta are on a mission to  <br/> bring Indian hair secrets to the world, inviting you to awaken <br/> your roots with wild wisdom.</p>
                <p className="mb-5 fs-6"><u> Read our story.</u> <AiOutlineArrowRight/> </p>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Video
