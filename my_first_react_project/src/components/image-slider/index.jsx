import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
import "./style.css"

export default function ImageSlider({url,limit = 5 ,page = 1}){

    const [images,setImages] = useState([]); 
    const [errorMsg,setErrorMsg] = useState(null); 
    const [isLoading,setLoading] = useState(false); 
    const [selectedImg,setImg] = useState(0);
  
    async function fetchImg(url,limit,page) {
        try{
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data);
                setLoading(false);
            }

        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        } 
        
    }

    useEffect(()=>{
        if(url!=="") fetchImg(url,limit,page);
    },[url]);


    function prevImg(){
        if(selectedImg>0) setImg(selectedImg-1);
    }
    function nextImg(){
        if(selectedImg<images.length) setImg(selectedImg+1);

    }
    

    /*console.log(images);*/
    
    if(isLoading){
        <div>Loading data, please wait!</div>
    }
    if(errorMsg !== null){
        <div>An error occurred! {errorMsg}</div>
    }
    
    /*console.log(images[0].download_url)*/
    return(
        <div className="wrapper">
            
            <div className="image-slider">
                {
                    images && images.length ? (
                        images.map((item) => (
                            <img src={item.download_url} key={item.id} className={Number(item.id)!==selectedImg?'image-hidden':''} />
                        ))
                    ) : (
                        <div>Can't find any images</div>
                    )

                }
            </div>
            <div className="control">
                <BsArrowLeftCircleFill onClick={()=>{prevImg()}}className="arrow left-arrow" size={25}/>
                
                <span className="indicators">
                    {
                        images && images.length ? images.map((_,index)=>(
                            <button onClick={()=>{setImg(Number(index))}} key={index} className={selectedImg==index?"indicator indicator-selected":"indicator"}></button>
                        )):null
                    }
                </span>

                <BsArrowRightCircleFill onClick={()=>{nextImg()}} className="arrow right-arrow" size={25}/>

            </div>

        </div>
    );
}