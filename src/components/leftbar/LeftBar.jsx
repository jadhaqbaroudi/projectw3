import "./leftbar.scss"
import Friend from "../../assets/friends.png";
import Groupe from "../../assets/groupe.png";
import Market from "../../assets/market.png";
import Watch from "../../assets/watch.png";
import Mem from "../../assets/memories.png";
import Event from "../../assets/event.png";
import Game from "../../assets/gaming.png";
import  Gal from "../../assets/gallarey.png";
import Vid from "../../assets/videos.png";
import Mess from "../../assets/messages.png";
import Tut from "../../assets/tutorial.png";
import Cour from "../../assets/Courses.png";
import AI from "../../assets/AI.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";











const LeftBar=()=>{

  const {currentUser}=useContext(AuthContext);

    return(
    <div className="leftbar">
        <div className="container">
            <div className="menu">
                <div className="user">

                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name} </span>
                </div>
                <div className="item">
                    <img src={Friend} alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src={Groupe} alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src={Market} alt="" />
                    <span>Market</span>
                </div>
                <div className="item">
                    <img src={Watch} alt="" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src={Mem} alt="" />
                    <span>Memories</span>
                </div>
            </div>
            <hr/>
            <div className="menu">              
                <span className="title">Your shortcuts</span>
                <div className="item">
                    <img src={Event} alt="" />
                    <span>Events</span>
                </div>
                <div className="item">
                    <img src={Game} alt="" />
                    <span>Gaming</span>
                </div>
                <div className="item">
                    <img src={Gal} alt="" />
                    <span>Gallery</span>
                </div>
                <div className="item">
                    <img src={Vid} alt="" />
                    <span>Videos</span>
                </div>
                <div className="item">
                    <img src={Mess} alt="" />
                    <span>Messages</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <span className="title">Other</span>
                <div className="item">
                    <img src={Tut} alt="" />
                    <span>Tutorials</span>
                </div>
                <div className="item">
                    <img src={Cour} alt="" />
                    <span>Courses</span>
                </div>
                <div className="item">
                    <img src={AI} alt="" />
                    <span>Open AI</span>
                </div>
            </div>

        </div>
    </div>
    )
}
export default LeftBar;