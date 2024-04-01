
import Post from "../post/Post";
import "./posts.scss";

const Posts=()=>{
    const posts=[
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
        {id:3,
            name:"Mr.d",
            userId:3,
            profilePic:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            desc:"To be or not to be, that is the question",
            photo:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        },    
        ]
                return<div className="posts">
    
                    {posts.map(post=>(
                        <Post post={post} key={post.id}/>
                    ))}
    
    </div>
};
export default Posts;