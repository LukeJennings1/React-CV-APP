/* This section has info like: Name, Email, Phone Num, address. It needs to have a text box 
for each input field. the info should be stored in an object.  A button should be added to add the information */

import React, {useState, useEffect} from 'react';
import arrowIcon from './icons8-arrow-96.png';
import CVdesign from './CVshapes'


function GeneralInfo() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [address, setaddress] = useState('');
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')

    const addDetails  = () => {
        console.log('hello')
    };
    return (
        <div id = 'pagewrapper' className='siteWrapper'>
            {/* the setName hook will be called whenever a change to the event (e) is detected. This means that it will set 
            the 'name' variable in the setName hook to anything in the text box and update it everytime we type in a new letter into
            the textbox. Essentially it sets the 'name' variable to whatever is in the textbox as we type it in. 

            All the button input does is run a function. This function is being set to do something with the name stateHook variable. 

            
            when we press onClick it will call the Submit function where we can write code use the name state hook. */}
            <div className = 'formSection'>
            <form className='inputFields'>
            <div className = 'headingTitle'>Personal Information</div>
                <input className = 'textBoxes' type='text' value={firstName} placeholder='Firstname' onChange={(e) => setFirstName(e.target.value)}  required></input>
                <input className = 'textBoxes' type='text' value={lastName} placeholder='Lastname' onChange={(e) => setLastName(e.target.value)}  required></input>
                <input className = 'textBoxes' type='text' value={title} placeholder='Current Role Title' onChange={(e) => setTitle(e.target.value)}  required></input>
                <input className = 'textBoxes' type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}  required></input>
                <input className = 'textBoxes' type='phone' value={num} placeholder='Contact Number' onChange={(e) => setNum(e.target.value)}  required></input>
                <input className = 'textBoxes' type='text' value={address} placeholder='Address' onChange={(e) => setaddress(e.target.value)}  required></input>

                <div className = 'headingTitle'>Work Experience</div>
                <form className='inputFields'>
                <input className = 'textBoxes' type='text' placeholder='Location' value={position} onChange={(e) => setPosition(e.target.value)}></input>
                <input className = 'textBoxes' type='text' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}></input>
                <input className = 'textBoxes' type='text' placeholder='City' value={location} onChange={(e) => setLocation(e.target.value)}></input>
                <input className = 'textBoxes' type='date' placeholder='From' value={from} onChange={(e) => setFrom(e.target.value)}></input>
                <input className = 'textBoxes' type='date' placeholder='To' value={to} onChange={(e) => setTo(e.target.value)}></input>
                <input type='button' onClick={addDetails}></input>
            </form>
                
            </form>
            
            <img src={arrowIcon} className = 'arrowFig'></img>
            </div>
            <div className = 'GeneralInfoSection'>
            <CVdesign />

            <div className = 'GeneralInfo'>{firstName}</div>
            <div className = 'GeneralInfo'>{lastName}</div>
            <div className = 'GeneralInfo'>{title}</div>
            <div className = 'GeneralInfo'>{email}</div>
            <div className = 'GeneralInfo'>{num}</div>
            <div className = 'GeneralInfo'>{address}</div>
            
            <div className = 'workExperienceSectionWrapper'>
                <div className = 'workExperienceInputField'>{position}</div> 
                <div className = 'workExperienceInputField'>{company}</div> 
                <div className = 'workExperienceInputField'>{location}</div> 
                <div className = 'workExperienceInputField'>{from}</div> 
                <div className = 'workExperienceInputField'>{to}</div> 
            </div>
            </div>
            </div>
            
    )
}

export default GeneralInfo;