import React from "react";
import { useState } from "react";
import "../../../styles/admin.css";

export const UploadPhotos = () => {

    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("img1", img1)
        data.append("img2", img2)
        data.append("img3", img3)
        data.append("img4", img4)
        data.append("upload_preset", "jdcz6c83")
        data.append("cloud_name","dnkditswd")
        fetch("  https://api.cloudinary.com/v1_1/dnkditswd/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setUrl(data.url)
        })
        .catch(err => console.log(err))
        }

    return (
        <div id="FileUpload">
            <div className="wrapper text-center">

                <label htmlFor="img1" className="form-label text-warning opacity-75">Foto 1</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="img1" name="img1" files={img1} onChange={e => setImg1(e.target.files[0])} multiple={false} accept="image/*" />
                <label htmlFor="img2" className="form-label text-warning opacity-75">Foto 2</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="img2" name="img2" files={img2} onChange={e => setImg2(e.target.files[0])} multiple={false} accept="image/*" />
                <label htmlFor="img3" className="form-label text-warning opacity-75">Foto 3</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="img3" name="img3" files={img3} onChange={e => setImg3(e.target.files[0])} multiple={false} accept="image/*" />
                <label htmlFor="img4" className="form-label text-warning opacity-75">Foto 4</label>
                <input className="form-control btn btn-outline-warning col-md-4" type="file" id="img4" name="img4" files={img4} onChange={e => setImg4(e.target.files[0])} multiple={false} accept="image/*" />
                
            </div>
        </div>
    )
}