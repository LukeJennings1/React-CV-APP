import {useState, useEffect} from 'react';

function AddJobExp(){

const [inputFields, setInputFields] = useState([
    {position: '', company: '', location: '', from: '', to: ''},
])
const handleInputChange = (event, index) => {
let value = [...inputFields]
value[index][event.target.name] = event.target.value;
setInputFields(value); 
}
const addFields = () => {
 let object = {position: '', company: '', location: '', from: '', to: ''}
 setInputFields([...inputFields, object])
}
const submit = () => {
    console.log(inputFields)
}
    return (
        <div className='jobForm'>
            <form>
            {inputFields.map((form, index) => {
                return (
                    <div key={index}>
                    <div>{form.position}</div>
                    <input
                    name='position'
                    placeholder='position'
                    onChange = {event => handleInputChange(event, index)}
                    value = {form.position}

                    />
                </div>
              )
            })}
        </form>

        <button onClick={addFields}>add</button>
        <button onClick={submit}>Submit</button>
        <div className='tester'>{inputFields.position}</div>

        </div>
    );
}
//  Firstly, I want to take an array object and copy it on add button - done.
// I want to take the input from a textbox and submit it to the new object via onChange. 

export default AddJobExp;