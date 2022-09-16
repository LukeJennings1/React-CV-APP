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
            <form>
            {inputFields.map((form, index) => {
                return (
                    <div key={index}>

                    <div>{form.position}</div>
                    <div>{form.company}</div>
                    <div>{form.location}</div>
                    <div>{form.from}</div>
                    <div>{form.to}</div>
                    <div>{form.duties}</div>

                    <input name='position' placeholder='Position' onChange = {e => handleInputChange(e, index)} value = {form.position} />
                    <input name='company' placeholder='Employer' onChange = {e => handleInputChange(e, index)} value = {form.company} />
                    <input name='location' placeholder='Location' onChange = {e => handleInputChange(e, index)} value = {form.location} />
                    <input type = 'date' name='from' placeholder='Date From' onChange = {e => handleInputChange(e, index)} value = {form.from} />
                    <input type = 'date' name='to' placeholder='Date To' onChange = {e => handleInputChange(e, index)} value = {form.to} />
                    <input type = 'textbox' name='duties' placeholder='Duties' onChange = {e => handleInputChange(e, index)} value = {form.duties} />


                </div>
              )
            })}
        </form>

        <button onClick={addFields}>add</button>
        <button onClick={remove}>Submit</button>

        </div>
    );
}
//  Firstly, I want to take an array object and copy it on add button - done.
// I want to take the input from a textbox and submit it to the new object via onChange. 

export default AddJobExp;