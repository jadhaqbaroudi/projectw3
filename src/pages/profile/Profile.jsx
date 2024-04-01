import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../components/posts/Posts";
const Profile=()=>{

    return(
    <div className="profile">
        <div className="images">
            <img src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2022/01/good-nature-homepage-hero_2-1280x640.jpg" alt="" className="cover" />
            <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" alt="" className="profile" />       
        </div>
        <div className="profileContainer">
            <div className="uInfo">
                <div className="left">
                    <a href="http://facebook.com">
                    <FacebookTwoToneIcon fontSize="large"/>
                    </a>

                    <a href="http://facebook.com">
                    <InstagramIcon fontSize="large"/>
                    </a>

                    <a href="http://facebook.com">
                    <XIcon fontSize="large"/>
                    </a>

                    <a href="http://facebook.com">
                    <LinkedInIcon fontSize="large"/>
                    </a>

                    <a href="http://facebook.com">
                    <PinterestIcon fontSize="large"/>
                    </a>
                </div>
                <div className="center">
                    <span>Mr.K</span>
                    <div className="info">
                    <div className="item">
                    <PlaceIcon/>
                    <span>USA</span>
                    </div>
                    <div className="item">
                    <LanguageIcon/>
                    <span>Language</span>
                    </div>
                    
                    </div>
                    <button>Follow</button>
                </div>
                <div className="right">
                    <EmailOutlinedIcon/>
                    <MoreVertOutlinedIcon/>
                </div>
            </div>
            <Posts/>
        </div>
    </div>
    )
}
export default Profile