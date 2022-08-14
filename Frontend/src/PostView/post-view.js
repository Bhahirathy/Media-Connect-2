import Logo from "./logo.png";
import Camera from "./camera.png";
import Share from "./share.png";
import Like from "./like.png";
import Dot from "./more_icon.png";
import { useEffect, useState } from "react";
import "./post-view.css";
import {Link} from "react-router-dom";
const PostView = ()=> {
    const [userData, setUserData] = useState([]);
    useEffect(()=> {
        fetch('https://instaclone-backend-ser.herokuapp.com/post').then((data)=> {
            return data.json()
        }).then((userData)=> {
            setUserData(userData);
            console.log(userData)
        })
    }, []);
    return (
        <>
             
               
                 <div className="logo" >
                        <img className="Insta" src={Logo}alt="insta-logo"></img>
                        <Link to="/form"><img className="image"src={Camera}alt="camera"></img></Link>
                   </div>
                
              
                <div className="content">
                    {
                        userData.map((user,i)=> {
                            return (
                                <div>
                                <div className="post">
                                   <div className="author">{user.author}</div>
                                   <div className="locate">{user.location}</div> 
                                   <div className="dots"><img src={Dot} alt="Dot"/></div>
                                    <div className="user-image">

                                        <img className="selfie" src={`https://instaclone-backend-ser.herokuapp.com/${user.path}`} alt="user defined image"></img>
                                    </div>
                                    <div className="like">
                                        <img className="likes"src={Like} alt="like"></img>
                                        <img src={Share} alt="share"></img>
                                        </div>
                                        <p className="Like">Likes</p>
                                    <div className="user-meta">
                                        {user.data}
                                    </div>
                                    <div className="user-description">
                                        {user.description}
                                    </div>
                                    <div className="date">{user.date}</div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            
        </>
    )
}
export default PostView;