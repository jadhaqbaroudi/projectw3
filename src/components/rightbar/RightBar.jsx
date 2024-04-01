import "./rightbar.scss"

const RightBar=()=>{

    return(
    <div className="rightbar">
        <div className="container">
            <div className="item">
                <span>Suggestions For You</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        <span>Mr.x</span>
                    </div>
                    <div className="buttons">
                    <button>Follow</button>
                    <button>Dismiss</button>
                    </div>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://i.pinimg.com/736x/d0/4b/1f/d04b1f2ed3ca8ad4a302fbe9f4f5a875.jpg" alt="" />
                        <span>Mrs.y</span>
                    </div>
                    <div className="buttons">
                    <button>Follow</button>
                    <button>Dismiss</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <span>Latest Activities</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt="" />
                        <p>
                        <span>Mr.K</span> Changed His Cover Photo
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63-lq" alt="" />
                        <p>
                        <span>Mrs.I</span> Commented on your post
                        </p>
                    </div>
                    <span>4 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                        <p>
                        <span>Mr.D</span> Changed their Cover Photo
                        </p>
                    </div>
                    <span>2 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://i.pinimg.com/originals/60/69/96/606996c03f31bc648d4e5f925e95656e.jpg" alt="" />
                        <p>
                        <span>Mrs.P</span> Share a post with you
                        </p>
                    </div>
                    <span>8 min ago</span>
                </div>
            </div>
            <div className="item">
                <span>Online Friends</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://i.pinimg.com/originals/60/69/96/606996c03f31bc648d4e5f925e95656e.jpg" alt="" />
                        <div className="online">
                        </div>
                        <span>Mrs.P</span>
                    </div>           
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
                        <div className="online">
                        </div>
                        <span>Mr.D</span>
                    </div>           
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt="" />
                        <div className="online">
                        </div>
                        <span>Mr.K</span>
                    </div>           
                </div>
            </div>
        </div>
    </div>
    )
}
export default RightBar