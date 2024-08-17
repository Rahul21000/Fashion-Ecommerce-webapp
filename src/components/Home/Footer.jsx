import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import SecurityIcon from '@mui/icons-material/Security';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import {memo} from "react"
const Footer=()=>{
    return(
    <>
       <div className="flex justify-evenly align-center bg-gray-800">
           <div >
               <div className="text-white text-md font-semibold mb-3">connect with us </div>
               <a href='#' className="flex flex-nowrap text-white text-xs" ><span><InstagramIcon/></span><span>Instagram</span></a>
               <a href='#' className="flex flex-nowrap text-white text-xs"><span><FacebookIcon/></span><span>Facebook</span></a>
               <a href='#' className="flex flex-nowrap text-white text-xs"><span><XIcon sx={{width:20,height:20}}/></span><span>Twitter</span></a>
               
              
           </div>
           <div >
                <div className="text-white text-md font-semibold mb-3">Refferal program</div>
                <a href='#' className="flex flex-nowrap text-white  text-xs"><span ><PeopleIcon/><span></span>Partener with us</span></a>
                <a href='#' className="flex flex-nowrap text-white  text-xs"><span><ShareIcon/><span></span>Sharing product</span></a>
                <a href='#' className="flex flex-nowrap text-white  text-xs"><span><Diversity3Icon/><span></span>Advertise in your friend</span></a>
               
           </div>
           <div >
                <div className="text-white text-md font-semibold mb-3"> Policy</div>
                <a href='#' className=" flex flex-nowrap text-white  text-xs"><span><SecurityIcon /><span></span>Data protection</span></a>
                <a href='#' className=" flex flex-nowrap text-white  text-xs"><span><NoEncryptionIcon/><span></span>Safety user</span></a>
           </div>
        </div>
        <p className="flex justify-center py-4 text-white bg-gray-900 text-sm">@all right reserve by fashtion Ecommerce</p>
    </>)
}

export default memo(Footer);