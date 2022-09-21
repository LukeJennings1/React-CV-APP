import {useState, useEffect} from 'react';

function AddJobExp(){

const [inputFields, setInputFields] = useState([
    {position: '', company: '', from: '', to: '',duties: ''},
])
const handleInputChange = (event, index) => {
let value = [...inputFields]
value[index][event.target.name] = event.target.value;
setInputFields(value); 
}

    return (
        <div className='jobForm'>
            <form className='jobInputForm'>
            {inputFields.map((form, index) => {
                return (
                    <div key={index}>
                   
                    <div className='jobInputFields'>
                    <input className = 'jobInputBoxes' name='company' placeholder='Employer' onChange = {e => handleInputChange(e, index)} value = {form.company} />
                    <input className = 'jobInputBoxes' name='position' placeholder='Position' onChange = {e => handleInputChange(e, index)} value = {form.position} />
                    <input className = 'jobInputBoxes' type = 'date' name='from' placeholder='Date From' onChange = {e => handleInputChange(e, index)} value = {form.from} />
                    <input className = 'jobInputBoxes' type = 'date' name='to' placeholder='Date To' onChange = {e => handleInputChange(e, index)} value = {form.to} />
                    <textarea rows="4" cols="50" name='duties' className = 'jobInputBoxes' id = 'textArea' placeholder='Duties' onChange = {e => handleInputChange(e, index)} value = {form.duties} />
                    </div>

                </div>
              )
            })}
        </form> 

            <div className='jobOutputWrapper'>
                    <div className='jobOutputs' id = 'jobOutputTitle'>{inputFields[0].company}</div>
                    <div className='jobOutputs' id = 'jobOutputPosition' >{inputFields[0].position}</div>

                    <div className='jobDates'>
                    <div className='jobOutputs' id = 'jobOutputDateFrom'>{inputFields[0].from} - </div>
                    <div className='jobOutputs' id = 'jobOutputDateTo'>{inputFields[0].to}</div>
                    </div>
                    <div className='jobOutputs' id = 'jobOutputDuties'>{inputFields[0].duties}</div>
                    </div>
        </div>
    );
}
//  Firstly, I want to take an array object and copy it on add button - done.
// I want to take the input from a textbox and submit it to the new object via onChange. 

export default AddJobExp;