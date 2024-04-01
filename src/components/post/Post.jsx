import "./post.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";
import Comments from "../comments/Comment";
import { useState } from "react";

const Post=({post})=>{
    const [commentOpen, setCommentOpen]=useState(false)
    const liked=false;
return(
   <div className="post">
    <div className="container">
    <div className="user">
        <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                <span className="name">{post.name}</span>
                </Link>
                <span className="date">1 mnin ago</span>
            </div>
        </div>
        <MoreHorizOutlinedIcon/>
    </div>
    <div className="content">
        <p>{post.desc}</p>
        <img src={post.photo} alt="" />
    </div>
    <div className="info">
        <div className="item">
            {liked?<FavoriteIcon/>:<FavoriteBorderIcon/>}
        112 Likes
        </div>
        <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
        <TextsmsIcon/>
        12 comments
        </div>
        <div className="item">
        <ShareOutlinedIcon/>
        share
        </div>
    </div>
    {commentOpen&&<Comments/>}
      </div>
      </div>

)
}
export default Post;