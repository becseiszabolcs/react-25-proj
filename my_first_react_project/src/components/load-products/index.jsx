import {useState,useEffect} from 'react';
import "./style.css";

export default function LoadProducts({url}){
    const [products,setProduct]  = useState([]); 
    const [errorMsg,setErrorMsg] = useState(null); 
    const [isLoading,setLoading] = useState(false); 
    const [reached, setReached]  = useState(false);
    const [count,setCount]       = useState(0);
    const [total,setTotal]       = useState(0);


    async function fetchProduct(url) {

        try{
            setLoading(true);
            const response = await fetch(`${url}?limit=${(count+1)*20}&skip=${count!=0?count*20:0}`);
            const data = await response.json();

            if(data){
                setProduct(data.products);
                setTotal(data.total);
                if(data.total<=(count+1)*20) setReached(true);
                setLoading(false);

            }

        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        } 
        
    }
    function loadMore(max,total){
        if(total>(count+1)*20){
            setCount(max+1);
        }
        


    }
    //const loadMore = (max,total)=>



    useEffect(()=>{
        if(url!=="") fetchProduct(url);
    },[count]);

    if(isLoading){
        <div>Loading data, please wait!</div>
    }
    if(errorMsg !== null){
        <div>An error occurred! {errorMsg}</div>
    }



    return(
        <div className="wrapper">

            <div className="Products-list">
                {
                    products && products.length > 0 ? products.map((item,i)=>(
                        <div className="product" key={i}>
                            <img src={item.thumbnail} alt="" />
                            <h1>{item.title}</h1>


                        </div>
                        
                    )): <div> No data is found </div>
                }
            </div>
            <button disabled={reached} onClick={()=>loadMore(count,total)}>Load More</button>
            {
                reached?<div>You have reached to {total} products</div>:null
            }

        </div>
    );
}