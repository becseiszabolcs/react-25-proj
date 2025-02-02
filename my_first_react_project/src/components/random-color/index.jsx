import { useState } from "react"



export default function RandomColor(){
    const [colorType, setColorType] = useState('');
    const [color, setColor] = useState('');

    const randint=(max=10,min=0) => Math.floor(Math.random() * (max - min)) + min;
    

    function HEXColorGen(){

        const hexList = [];
        for (let i = 0; i <= 15; i++) hexList.push(i.toString(16).toUpperCase()); // hexadecimal number system local value

        let hexcolor = '#';
        for(var i=0;i<6;i++) hexcolor+=hexList[randint(hexList.length)];
         
        return hexcolor;
    }

    function RGBColorGen(){
        const nums = [];
        for(var i=0;i<3;i++) nums.push(randint(256)); 

        return `rgb(${nums.join(",")})`;
    }
    
    function colorGen(color_type){

        if(color_type == '') {
            if(colorType != '') color_type = colorType ;
            else{
                setColorType('rgb');
                color_type = 'rgb';
            }
        } else setColorType(color_type);
        
        let randcolor;
        if(color_type == 'hex') randcolor = HEXColorGen();
        if(color_type == 'rgb') randcolor = RGBColorGen();

        setColor(randcolor);
    }

    return(
        <div className="wrapper" style={{
            background: color

        }}>
            <div className="generate">
                <button className="genbtn" onClick={()=>colorGen('hex')}>Create HEX color</button>
                <button className="genbtn" onClick={()=>colorGen('rgb')}>Create RGB color</button>
                <button className="genbtn" onClick={()=>colorGen('')}>Create Randomcolor color</button>
            </div>
            <div>
                {colorType=='rgb'?<h2>RGB color</h2>:colorType=='hex'?<h2>HEX color</h2>:<h2>Generate color</h2>}
                <h1>{color}</h1>
            </div>
        </div>
    );
}