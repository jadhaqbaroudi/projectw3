import "./navbar.scss"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar=()=>{
const {toggle,darkMode}=useContext(DarkModeContext);
const {currentUser}=useContext(AuthContext);

    return(
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>JBOOK</span>
            </Link>
            <HomeRoundedIcon/>
            {darkMode? <WbSunnyIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle}/>}
            <GridViewOutlinedIcon/>
<div className="search">
    <SearchOutlinedIcon/>
    <input type="text" placeholder="Search.." />
</div>
</div> 
        <div className="right">
        <PermIdentityOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>  
        <div className="user">
        <img src={currentUser.profilePic}alt="" /> 
        <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
    )
}
export default NavBar