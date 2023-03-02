import React, { useState } from 'react'
import axios from 'axios';
import "../../styles/uploadPoster.css";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../utils/Loader";


const UploadPoster = () => {
    const [posterTitle, setPosterTitle] = useState();
    const [posterImage, setPosterImage] = useState();
    const [isLoading, setIsloading] = useState(false);

    const handleUploadClick = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPosterImage(reader.result);
            };
        }
        reader.readAsDataURL(e.target.files[0]);

        const file = e.target.files[0];
        setPosterImage(URL.createObjectURL(file));
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        setIsloading(true);

        const myForm = new FormData();

        myForm.set("posterTitle", posterTitle);
        myForm.set("posterImage", posterImage);

        const config = { headers: { "Content-Type": "aplication/json" } };



        try {
            const response = await axios.post('https://designwale-backend-api.vercel.app/api/v1/post/posters', myForm, config);
            if (response) {
                setIsloading(false);
                toast.success("Poster uploaded");
            }
            else {
                toast.error("Error occurred");
            }

        } catch (error) {
            console.log('e',);
        }
    }

    return (
        <div className="uploadPoster">
            <div className="upload-poster-form-wrapper">
                {isLoading ? <Loader /> : (
                    <div className="upload-poster-form">
                        <div className="uploadPoster-title">
                            <h2>UPLOAD POSTER</h2>
                        </div>
                        <div className="upload-poster-input-wrapper">

                            <input type="text" name="title" placeholder='poster-title...' onChange={(e) => setPosterTitle(e.target.value)} />
                            <input type="file" name="posterImage" accept='image/*' onChange={(e) => { handleUploadClick(e) }} />
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
    )
}

export default UploadPoster;