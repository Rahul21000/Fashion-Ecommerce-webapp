// import { useEffect, useState,memo } from "react";

const Hero=()=>{
    // const [deal,setDeal]=useState({second:0,hour:3,day:1});
    // useEffect(()=>{
    //     let c=setInterval(()=>{
    //          setDeal(deal.second+=1)    
    //     },1000)
    //     return()=>clearInterval(c)
    // },[deal])
    let date=new Date();
    let current=`${date.getMilliseconds()+" "+date.getHours()}`
    return(<div className="relative w-90 h-20 m-4 p-4 bg-black shadow-md rounded-md   border border-black">
        <p className="text-sm italic text-red-800 font-bold absolute top-1 bg-white rounded-sm p-1 left-2">Sale is on</p>
     <p className="text-white italic font-sans font-bold text-center text-lg"> 40%-60% Discount</p>
    <div className="text-white absolute top-0 right-0"><span>deal over</span> <span >{new Date().getUTCDate()}</span></div>
    </div>)
}
// export default memo(Hero);
export default Hero;