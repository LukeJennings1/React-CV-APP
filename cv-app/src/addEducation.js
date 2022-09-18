import {useState} from 'react';


function AddEducation() {
    
const [inputFields, setInputFields] = useState([
    {UniversityName: '', Subject: '', Location: '', Qualification: '', from: '', to: ''},
])
const handleInputChange = (event, index) => {
let value = [...inputFields]
value[index][event.target.name] = event.target.value;
setInputFields(value); 
}
const addFields = () => {
 let object =  {UniversityName: '', Subject: '', Location: '', Qualification: '', from: '', to: ''}
 setInputFields([...inputFields, object])
}
const remove = () => {
    console.log(inputFields)
}
    return (
        <div className='jobForm'>
            <form className='educationInputForm'>
            {inputFields.map((form, index) => {
                return (
                    <div key={index}>


                    <div className='educationInput'>{form.UniversityName}</div>
                    <div className='educationInput'>{form.Subject}</div>
                    <div className='educationInput'>{form.Location}</div>
                    <div className='educationInput'>{form.Qualification}</div>
                    <div className='educationInput'>{form.from}</div>
                    <div className='educationInput'>{form.to}</div>

                    <div className='jobInputFields'>
                    <input className = 'jobInputBoxes' name='UniversityName' placeholder='Employer' onChange = {e => handleInputChange(e, index)} value = {form.UniversityName} />
                    <input className = 'jobInputBoxes' name='Subject' placeholder='Position' onChange = {e => handleInputChange(e, index)} value = {form.Subject} />
                    <input className = 'jobInputBoxes' name='Location' placeholder='Location' onChange = {e => handleInputChange(e, index)} value = {form.Location} />
                    <input className = 'jobInputBoxes' name='Qualification' placeholder='Location' onChange = {e => handleInputChange(e, index)} value = {form.Qualification} />
                    <input className = 'jobInputBoxes' type = 'from' name='from' placeholder='Date From' onChange = {e => handleInputChange(e, index)} value = {form.from} />
                    <input className = 'jobInputBoxes' type = 'to' name='to' placeholder='Date To' onChange = {e => handleInputChange(e, index)} value = {form.to} />
                    </div>

                </div>
              )
            })}
        </form>

        <button className='add/delButtons' onClick={addFields}>add</button>
        <button className='add/delButtons' onClick={remove}>Submit</button>

        </div>
    );
};

export default AddEducation;







