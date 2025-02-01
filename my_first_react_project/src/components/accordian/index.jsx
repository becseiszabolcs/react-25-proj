import { useState } from "react"
import dataList from "./data";


export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [multi_selection, setenableMS] = useState(false);
    const [selection, setSeletion] = useState([]);

    function Select(id){
        setSelected(id === selected ? null : id);
    }
    function Selection(id){
        let copy_selection = [...selection];
        const findId = copy_selection.indexOf(id); 
        if(findId === -1 ) copy_selection.push(id);
        else               copy_selection.splice(findId,1);

        setSeletion(copy_selection);
        
    }

    return (
        <div className="wrapper">
            <button onClick={()=>setenableMS(!multi_selection)}>Enable multi selection</button>

            <div className="accordian">
                {
                    dataList && dataList.length > 0 ? dataList.map((dataItem) => (
                    <div className="item">
                        <div className="title" onClick={multi_selection ? ()=>Selection(dataItem.id) : ()=>Select(dataItem.id)} >
                            <h3>{dataItem.question}</h3>

                            {
                                multi_selection ? selection.indexOf(dataItem.id) !== -1 ? <span>-</span> :<span>+</span> :
                                selected === dataItem.id ? <span>-</span> : <span>+</span>
                            }
                        </div> 
                        {
                            multi_selection ? selection.indexOf(dataItem.id) !== -1 ? <div className="content">{dataItem.answer}</div> : null :
                            selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null
                        }
                    </div>)) 
                    : <div>No data have found!</div>
                }

            </div>

        </div>
    );
}