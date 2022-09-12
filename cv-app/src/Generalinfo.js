/* This section needs to have general info like: Name, Email, Phone Num, address. It needs to have a text box 
for each input field. A button should be added to add the information*/

import {useState} from 'react';

function GeneralInfo() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const [address, setaddress] = useState('');


    console.log()

    function Submit(e) {
        e.preventDefault();
        
        console.log(e.altKey)

    }
    return (
        <div>
            {/* the setName hook will be called whenever a change to the event (e) is detected. This means that it will set 
            the 'name' variable in the setName hook to anything in the text box and update it everytime we type in a new letter into
            the textbox. Essentially it sets the 'name' variable to whatever is in the textbox as we type it in. 

            All the button input does is run a function. This function is being set to do something with the name stateHook variable. 

            
            when we press onClick it will call the Submit function where we can write code use the name state hook. */}
            <form>
                <input className = 'firstnameField' type='text' value={firstName} placeholder='Firstname' onChange={(e) => setFirstName(e.target.value)}  required></input>
                <input className = 'lastnameField' type='text' value={lastName} placeholder='Lastname' onChange={(e) => setLastName(e.target.value)}  required></input>
                <input className = 'titleField' type='text' value={title} placeholder='Current Role Title' onChange={(e) => setTitle(e.target.value)}  required></input>
                <input className = 'emailField' type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}  required></input>
                <input className = 'numField' type='number' value={num} placeholder='Contact Number' onChange={(e) => setNum(e.target.value)}  required></input>
                <input className = 'addressField' type='text' value={address} placeholder='Address' onChange={(e) => setaddress(e.target.value)}  required></input>

                <input type = 'button' onClick={Submit} value= 'button' ></input>

            </form>
        </div> 
    )
}

export default GeneralInfo;