/* This section has info like: Name, Email, Phone Num, address. It needs to have a text box 
for each input field. the info should be stored in an object.  A button should be added to add the information */

import React, {useState, useEffect} from 'react';
import arrowIcon from './icons8-arrow-96.png';
import CVdesign from './CVshapes';
import AddJobExp from './addJobExp';
import AddEducation from './addEducation';
import Profile from './inputProfile'


function GeneralInfo() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [address, setaddress] = useState('');
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
                <textarea rows="2" cols="50" id = 'textAreaAddress'className = 'textBoxes' value={address} placeholder='Address' onChange={(e) => setaddress(e.target.value)}  required></textarea>

            </form>
            <div className = 'headingTitle'>About me / Introduction</div>

            <Profile />

            

            <div className = 'headingTitle'>Education</div>
            
            <AddEducation />
            

            <div className = 'headingTitle'>Work Experience</div>
            

            <AddJobExp />
            <img src={arrowIcon} className = 'arrowFig'></img>
            </div>
            <CVdesign />
            <div className = 'GeneralInfoSection'>  
            <div className='nameTitle'>
            <div className = 'GeneralInfo' id='firstName' >{firstName}</div>
            <div className = 'GeneralInfo' id='lastName' >{lastName}</div>
            <div className = 'GeneralInfo' id='jobRole'>{title}</div>

            </div>
            <div className = 'cvSubHeadingWrapper'>
            <div className = 'cvSubHeadingTitle'id='contactInfo'>CONTACT</div>
            <div className = 'subheadingShape'></div>
            <div className = 'GeneralInfo'>Email: {email}</div>
            <div className = 'GeneralInfo'>Mobile: {num}</div>
            <div className = 'GeneralInfo'>Location: {address}</div>
            </div>
            <div className='educationField'>
            <div className = 'cvSubHeadingTitle'>EDUCATION</div>
            <div className = 'subheadingShape'></div>
            </div>
            <div className='profileField'>
            <div className = 'cvSubHeadingTitleRightSide'>PROFILE</div>
            <div className = 'subheadingShapeRight'></div>
            </div>
            <div className='experienceField'>
            <div className = 'cvSubHeadingTitleRightSide'>EXPERIENCE</div>
            <div className = 'subheadingShapeRight'></div>
            
            </div>
          
            </div>
            </div>
            
    )
}

export default GeneralInfo;