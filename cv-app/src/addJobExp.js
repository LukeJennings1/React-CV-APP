import {useState} from 'react';

function AddJobExp(){

const [inputFields, setInputFields] = useState([
    {position: '', company: '', location: '', from: '', to: '', id: 1},

])
const addInputBox = () => {
    setInputFields([...inputFields,{position: '', company: '', location: '', from: '', to: '', id: 1}])
    console.log(inputFields)
} 
const removeInputBox = (index) => {
    const values = [...inputFields]
    values.splice(index,1)
}
//addInputBox takes the previous inputFields value and adds a new object to it. the spread operator (...) takes
// the previous values which allows us to keep adding more objects to the array as it remembers the previously added
// array objects.

    return (
        <div className='jobForm'>
        <form className='jobFormSection'> {
        inputFields.map((inputField, index) => (
            <div key={index}>
                <input type='text' placeholder='Position' value={inputField.position}/>
                <div>{inputFields.position}</div>
            </div>
        )) }
          </form>
          <input type='button' value = 'Add' onClick = {addInputBox}></input>
          <input type='button' value = 'Remove' onClick = {removeInputBox}></input>

        </div>
    );
}
//  Firstly, I want to take an array object and copy it on add button.


// I want to take the input from a textbox and call a function when the submit button is pressed. 

export default AddJobExp;