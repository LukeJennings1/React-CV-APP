/* This section needs to have general info like: Name, Email, Phone Num, address. It needs to have a text box 
for each input field. A button should be added to add the information*/

import {useState} from 'react';

function GeneralInfo() {

    const [name, setName] = useState('');
    console.log(name)

    function Submit(e) {
        e.preventDefault();
        console.log(e.target.value)

    }
    return (
        <div>
            {/* the setName hook will be called whenever a change to the event (e) is detected. This means that it will update name 
            on latter and then on each additional letter input. so say we put the letter t into the textbox it will auto
            change the name value to t, then if we put e so te now it will set name to te and so on. 
            
            when we press onClick it will call the Submit function where we can write code use the name state hook. */}
            <form>
                <input className = 'nameField' type='text' value={name} placeholder='Name' onChange={e => setName(e.target.value)}  required></input>
                <input type = 'button' onClick={Submit} value= 'button' ></input>

            </form>
        </div> 
    )
}

export default GeneralInfo;