import { useState } from "react";
import './Calc.css'

function Calc() {

    const [exp,setExp] = useState("");

    const handelBtn = (e)=> {
        const tail = e.target.textContent;
        setExp(exp+tail);
    }

    const handelEql = (e)=> {
        let ans;
        let t;
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
        if(temp!='') {
            nums.push(parseFloat(temp));
            temp='';
        }
        if(opps.length!=(nums.length)-1) {
            alert("incorrect expression");
            setExp("");
            return;
        }
        for(let i=0;i<opps.length;i++) {
            if(opps[i]=='*'||opps[i]=='/') {
                if(opps[i]=='*') {
                    t = nums[i]*nums[i+1];
                }
                else if(opps[i]=='/') {
                    if(nums[i+1]==0) {
                        alert("Can't divide any number by zero");
                        setExp("");
                        return;
                    }
                    t = nums[i]/nums[i+1];
                }
                nums.splice(i,2);
                nums.splice(i,0,t);
                opps.splice(i,1);
                i--;
            }
        }
        for(let i=0;i<opps.length;i++) {
            if(opps[i]=='+'||opps[i]=='-') {
                if(opps[i]=='+') {
                    t = nums[i]+nums[i+1];
                }
                else if(opps[i]=='-') {
                    t = nums[i]-nums[i+1];
                }
                nums.splice(i,2);
                nums.splice(i,0,t);
                opps.splice(i,1);
                i--;
            }
        }
        setExp(nums[0]);
    }

    return (
        <>
            <h1 align="center">Calculator</h1>
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