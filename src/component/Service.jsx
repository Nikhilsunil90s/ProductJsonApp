import React, { useReducer } from 'react'
var initialstate=0;
const reducer=(state,action)=>{
    if(action.type==='INC'){
        return state +1;
    }
    if(action.type==='DEC'){
        return state -1;
    }
}

const Service=() =>{
  const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
       <div className='container-fluid'>
       <div className='row'>
         <div className='col-10 mx-auto'>
         <>
    <h1>{state}</h1>
    <button className='btn btn-info ' onClick={()=>{dispatch({type:'INC'})}}>Inc</button>
    <button className='btn btn-info' onClick={()=>{dispatch({type:'DEC'})}}>Dec</button>
    </>       
           </div>

       </div>
     </div>
    </>


  );
}

export default Service;
