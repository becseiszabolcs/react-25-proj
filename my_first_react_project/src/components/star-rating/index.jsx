import { useState } from "react";
import {FaStar} from "react-icons/fa"


export default function StarRating({starsnum = 5}){
    const [rating, setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const starsNum = Number(starsnum);

    function range(start=0,len){
        if(len == null) len=10;
        let li =[]; 
        for(let i=start;i<len;i++) {
            li.push(i);

        }

        return li;
    }

    const setRate = (index) => index===rating? setRating(0):setRating(index);

    const mouseHover = (index,isHover=false) => isHover? setHover(index):setHover(0);


    
    return(
        <>
 
            <div className="wrapper">
                <h1>Rate Us</h1>

                <div className="stars">
                    {
                        range(1,starsNum+1).map((_,index)=>{
                            return <FaStar 
                                className={index <= (hover || rating)?'active':'inactive'}
                                key={index} 
                                onClick={()=>{setRate(index)}} 
                                onMouseEnter={()=>{mouseHover(index,true)}}
                                onMouseLeave={()=>{mouseHover(index)}} 
                                size={40} />;
                        })
                        /*starsNum !== null? <div>{starsNum}</div>: <div>its can't run</div>*/

                        
                    }

                </div>
                

            </div>
        </>
    );
    
}