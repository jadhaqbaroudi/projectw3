import { useContext } from "react"
import "./comments.scss"
import {AuthContext} from "../../context/authContext"
const Comments=()=>{

    const {currentUser}=useContext(AuthContext)

    const Comments=[

        {id:1,
            name:"Mr.k",
            userId:1,
            profilePic:"https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw",
            desc:"I got no friends, I have a family",
            photo:"https://qph.cf2.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63-lq"
            },
            {id:2,
                name:"Mr.d",
                userId:2,
                profilePic:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
                desc:"To be or not to be, that is the question",
            }, 
    ]
    return(
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="Write a comment" />
            <button>Send</button>
            </div>
            {Comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p> 
                </div>
                <span classeName="date" >1 hour ago</span>
                </div>
            ))}
        </div>
    )
}
export default Comments;