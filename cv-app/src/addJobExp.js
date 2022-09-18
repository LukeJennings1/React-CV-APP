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
 let object = {position: '', company: '', location: '', from: '', to: '', duties: ''}
 setInputFields([...inputFields, object])
}
const remove = () => {
    console.log(inputFields)
}
    return (
        <div className='jobForm'>
            <form className='jobInputForm'>
            {inputFields.map((form, index) => {
                return (
                    <div key={index}>

                    <div>{form.position}</div>
                    <div>{form.company}</div>
                    <div>{form.location}</div>
                    <div>{form.from}</div>
                    <div>{form.to}</div>
                    <div>{form.duties}</div>
                    <div className='jobInputFields'>
                    <input className = 'jobInputBoxes' name='company' placeholder='Employer' onChange = {e => handleInputChange(e, index)} value = {form.company} />
                    <input className = 'jobInputBoxes' name='position' placeholder='Position' onChange = {e => handleInputChange(e, index)} value = {form.position} />
                    <input className = 'jobInputBoxes' name='location' placeholder='Location' onChange = {e => handleInputChange(e, index)} value = {form.location} />
                    <input className = 'jobInputBoxes' type = 'date' name='from' placeholder='Date From' onChange = {e => handleInputChange(e, index)} value = {form.from} />
                    <input className = 'jobInputBoxes' type = 'date' name='to' placeholder='Date To' onChange = {e => handleInputChange(e, index)} value = {form.to} />
                    <textarea rows="4" cols="50" name='duties' className = 'jobInputBoxes' id = 'textArea' placeholder='Duties' onChange = {e => handleInputChange(e, index)} value = {form.duties} />
                    </div>

                </div>
              )
            })}
        </form>

        <button  className='add/delButtons' onClick={addFields}>add</button>
        <button  className='add/delButtons' onClick={remove}>Submit</button>

        </div>
    );
}
//  Firstly, I want to take an array object and copy it on add button - done.
// I want to take the input from a textbox and submit it to the new object via onChange. 

export default AddJobExp;