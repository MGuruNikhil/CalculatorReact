import { useState } from "react";
import './Calc.css'

function Calc() {

    const [exp,setExp] = useState("");

    const handelBtn = (e)=> {
        const tail = e.target.textContent;
        setExp(exp+tail);
    }

    const handelEql = (e)=> {
        var temp='';
        const nums = [];
        const opps = [];
        const n = exp.length;
        for(let i=0;i<n;i++) { 
            if(exp[i]=='+'||exp[i]=='-'||exp[i]=='*'||exp[i]=='/') {
                opps.push(exp[i]);
                nums.push(parseFloat(temp));
                temp='';
            }
            else {
                temp+=exp[i];
            }
        }
        nums.push(parseFloat(temp));
        temp='';
        if(opps!=nums.length) {
            alert("incorrect expression");
            setExp("");
            return;
        }
    }

    return (
        <>
            <input type="text" name="exp" id="exp" value={exp} placeholder="Enter the expression" onChange={(e)=>setExp(e.target.value)} required/>
            <div className="btns">
                <button className="num" onClick={handelBtn}>1</button>
                <button className="num" onClick={handelBtn}>2</button>
                <button className="num" onClick={handelBtn}>3</button>
                <button className="opp" onClick={handelBtn}>+</button>
                <button className="num" onClick={handelBtn}>4</button>
                <button className="num" onClick={handelBtn}>5</button>
                <button className="num" onClick={handelBtn}>6</button>
                <button className="opp" onClick={handelBtn}>-</button>
                <button className="num" onClick={handelBtn}>7</button>
                <button className="num" onClick={handelBtn}>8</button>
                <button className="num" onClick={handelBtn}>9</button>
                <button className="opp" onClick={handelBtn}>*</button>
                <button className="sym" onClick={handelBtn}>.</button>
                <button className="num" onClick={handelBtn}>0</button>
                <button className="eql" onClick={handelEql}>=</button>
                <button className="opp" onClick={handelBtn}>/</button>
            </div>
        </>
    )
}

export default Calc