import { useContext } from "react"
import {AuthContext} from "../../context/authContext"
import "./stories.scss"

const Stories=()=>{
    const {currentUser}=useContext(AuthContext)
    const stories=[
        {id:1,
            name:"Mr.R",
            img:"https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"},
    
            {id:2,
                name:"Mrs.Y",
                img:"https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"},
    
                {id:3,
                    name:"Mr.X",
                    img:"https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"},
    
                    {id:4,
                        name:"Mr.K",
                        img:"https://wallpapers.com/images/hd/cool-profile-picture-45bhdh56z2fjf5qv.jpg"},
    
                        {id:5,
                            name:"Mr.D",
                            img:"https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg"},
    
    
    ]
    return(
        <div className="stories">
                    <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
            </div>
        
        ))}
        </div>
    )
}
export default Stories