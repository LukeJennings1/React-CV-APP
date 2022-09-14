/* This section has info like: Name, Email, Phone Num, address. It needs to have a text box 
for each input field. the info should be stored in an object.  A button should be added to add the information */

import React, {useState, useEffect} from 'react';

function Experience() {

const [position, setPosition] = useState('')
const [company, setCompany] = useState('')
const [location, setLocation] = useState('')
const [from, setFrom] = useState('')
const [to, setTo] = useState('')


const addDetails  = () => {
    console.log('hello')
};

    return (
        <div className = 'workExperienceWrapper'>
            <form className='jobExperienceForm'>
                <input className = 'jobInfoBox' type='text' placeholder='Location' value={position} onChange={(e) => setPosition(e.target.value)}></input>
                <input className = 'jobInfoBox' type='text' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}></input>
                <input className = 'jobInfoBox' type='text' placeholder='City' value={location} onChange={(e) => setLocation(e.target.value)}></input>
                <input className = 'jobInfoBox' type='date' placeholder='From' value={from} onChange={(e) => setFrom(e.target.value)}></input>
                <input className = 'jobInfoBox' type='date' placeholder='To' value={to} onChange={(e) => setTo(e.target.value)}></input>
                <input type='button' onClick={addDetails}></input>
            </form>

            <div className = 'workExperienceSectionWrapper'>
                <div className = 'workExperienceInputField'>{position}</div> 
                <div className = 'workExperienceInputField'>{company}</div> 
                <div className = 'workExperienceInputField'>{location}</div> 
                <div className = 'workExperienceInputField'>{from}</div> 
                <div className = 'workExperienceInputField'>{to}</div> 
            </div>
        </div>
    )

}


export default Experience;