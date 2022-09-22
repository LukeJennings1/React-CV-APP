import {useState, useEffect} from 'react';

function AddJobExp(){

const [inputFields, setInputFields] = useState([
    {position: '', company: '', from: '', to: '',duties: '', id:1},
])

const [position,setPosition] = useState('')

const buttonClick = () => {
    setInputFields([...inputFields, {position: '', company: '', from: '', to: '',duties: '', id: inputFields.id +1}])
} 
const buttonClickRemove = () => {
    setInputFields(inputFields.slice(0,1))
}
const addValueToObject = (e, id) => {
   const clonedData = [...inputFields]
   clonedData[id][e.target.id] = e.target.value
   setInputFields(clonedData)
   setPosition(clonedData[id][e.target.id] = e.target.value)
   console.log(position);
}
return (
    <div>

    <div className='jobExpFieldInput'>
        <div className='addRemoveButtonWrapper'>
        <button className = 'jobInputButtons' id = 'inputButtonAdd' onClick={buttonClick}>Add</button>
        <button className = 'jobInputButtons' id = 'inputButtonRemove' onClick={buttonClickRemove}>Remove</button>
        </div>
        {inputFields.map((inputField, id) => {
            return (
                
 <form className='jobInputFieldWrapper' key={id}>
            <div className='formInputBoxes'>
            <input className='inputBoxes' placeholder = 'Employer' id = 'company' name = 'company' onChange={(e) => addValueToObject(e, id)} value={inputField.company}></input>
            <input className='inputBoxes' placeholder = 'Position Name' id = 'position'name = 'position' onChange={(e) => addValueToObject(e, id)} value={inputField.position}></input>
            <input className='inputBoxes' placeholder = 'Date Employed From: ' type='date' id = 'from' name = 'from' onChange={(e) => addValueToObject(e, id)} value={inputField.from}></input>
            <input className='inputBoxes' placeholder = 'Date Employed To: ' type='date' id = 'to' name = 'to' onChange={(e) => addValueToObject(e, id)} value={inputField.to}></input>
            <textarea className='inputBoxes' rows='4' columns = '50'  placeholder = 'Job Desription' id = 'duties' name = 'duties' onChange={(e) => addValueToObject(e, id)} value={inputField.duties}></textarea>
            </div>
            
         <div className='jobOutputValues'>
            <div id = 'companyNAme' >{inputField.company}</div>
            <div >{inputField.position}</div>
        <div className='employmentDatesWrapper'>
            <div>{inputField.from} </div> - 
            <div>{inputField.to} </div>
        </div>
            <div>{inputField.duties}</div>
        </div>
        
        
 </form> )
        })
        }
    </div>

    </div>
)
}
export default AddJobExp; 

//  Firstly, I want to take an array object and copy it on add button - done - copies .
// I want to take the input from a textbox and submit it to the new object via onChange. 

{/* <input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input>
<input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input>
<input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input>
<input className='textBoxes' onChange={e => addValueToObject(e.target.value)}></input> */}