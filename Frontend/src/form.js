import axios from "axios"
import icon from "./PostView/logo.png"
import camera from "./PostView/camera.png"
import "../src/PostView/post-view.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Form = () => {
    const navigate=useNavigate()
    const [data, setData] = useState({
        file:null,
        author:"",
        location:"",
        desc:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData =new FormData()
        formData.append("author",data.author)
        formData.append("location",data.location)
        formData.append("desc",data.desc)
        formData.append("file",data.file)
        axios.post(
            "https://instaclone-backend-ser.herokuapp.com/upload",
            formData,
            {"content-type":"multipart/form-data"}
        )
        navigate("/post-view")
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(prevData=>({...prevData,[name]:value}))
    }
    const handleUpload=(e)=>{
        const uploadedfile=e.target.files[0]
        setData(prevData=>({...prevData,file:uploadedfile}))
    }
    return (
        <>
         <div>
                <div className="nav">
                    <img className="icon" src={icon} alt="icon" />
                    <img className="camera" src={camera} alt="camera" />
                </div>
            </div>
            <div className="main">
                <form id="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="forma">
                        <div>
                            <input id="filetype" type="file" name="file" onChange={handleUpload} />
                        </div>
                        <div className="in">
                        <input type="text" placeholder="Author" name="author" id="author" onChange={handleChange} />
                        <input type="text" placeholder="Location" name="location" id="location" onChange={handleChange} />
                        </div>
                        <div className="describe">
                            <input type="text" placeholder="Description" name="desc" id="discription" onChange={handleChange} />
                        </div>

                   <button className="btn" type="submit">Post</button>
                    </div>
                </form>
            </div>
           
        </>
    )
}
export default Form;