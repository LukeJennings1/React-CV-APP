import {useState, useEffect} from 'react';

function AddJobExp(props){
return (
    <div className='employmentWrapper'>
            <div id = 'jobTitle'>{props.company}</div>
            <div >{props.position}</div>
        <div className='jobDates'>
            <div >{props.from}</div> - 
            <div >{props.to}</div>
        </div>
        <div id = 'jobInformation'>{props.duties}</div>


    </div>
)}
export default AddJobExp; 

//  This component takes the props from the general info parent component and displays it. 

{/* <input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input>
<input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input>
<input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input>
<input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input> */}