import React,{useState} from 'react'
import Loader from '../utils/Loader';
import toast,{Toaster} from "react-hot-toast";
import axios from 'axios';

const CLOUDINARY_VIDEO_URL = "https://api.cloudinary.com/v1_1/dfwvu60ef/mh/upload";
const CLOUDINARY_UPLOAD_PRESET = "pgtta4ff/mh/upload"

const UploadReels = () => {

    const [isLoading,setIsloading] = useState(false);
    const [reelTitle,setReelTitle] = useState("");
    const [reelVideo,setReelVideo] = useState();

    const handleUploadClick = (e) =>{
        const reader = new FileReader();
        reader.onload=()=>{
            if(reader.readyState === 2){
                setReelVideo(reader.result);
            };
        }
        reader.readAsDataURL(e.target.files[0]);

        const file = e.target.files[0];
        // setReelVideo(URL.createObjectURL(file));
        setReelVideo(file);
    }

    const handleSubmit= async(e) => {
        e.preventDefault();
        console.log("submitted");

        const myForm  = new FormData();

        myForm.set("reelTitle",reelTitle);
        myForm.set("reelVideo" , reelVideo);

        

        // console.log(obj);
        const config = {headers : {"Content-Type" : "multipart/form-data"}}


      
        try{

            const response = await axios.post('https://designwale-backend-api.vercel.app/api/v1/post/reels',myForm,config);
            if(response) {
                toast.success("Reel uploaded");
            }
            else{
                toast.error("Error occurred while uploading")
            }
        }
        catch(error){
            console.log("Error catch block", error);
        }
    }
  return (
    <>
    <div className="uploadPoster">
            <div className="upload-poster-form-wrapper">
                {isLoading ? <Loader /> : (
                    <div className="upload-poster-form">
                        <div className="uploadPoster-title">
                            <h2>UPLOAD REELS</h2>
                        </div>
                        <div className="upload-poster-input-wrapper">

                            <input type="text" name="title" placeholder='Reel-title...' onChange={(e) => setReelTitle(e.target.value)} />
                            <input type="file" name="reelVideo" accept='video/*' onChange={(e) => { handleUploadClick(e) }} />
                            <button onClick={handleSubmit} >submit</button>

                        </div>

                    </div>
                )}

            </div>
            <Toaster
                position='top-right'
                reverseOrder={false}
            />
        </div >
    </>
  )
}

export default UploadReels