import {useState} from 'react';


function AddEducation() {
    const [inputFields, setInputFields] = useState([
        {UniversityName: '', Qualification: '', from: '', to: '',Grade: '', id:1},
    ])
    const buttonClick = () => {
        setInputFields([...inputFields, {UniversityName: '', Qualification: '', from: '', to: '',Grade: '', id: inputFields.id +1}])
    } 
    const buttonClickRemove = () => {
        setInputFields(inputFields.slice(0,1))
    }
    const addValueToObject = (e, id) => {
       const clonedData = [...inputFields]
       clonedData[id][e.target.id] = e.target.value
       setInputFields(clonedData)
    }

return (
    <div>

    <div className='eduExpFieldInput'>
        <div className='addRemoveButtonWrapper'>
        <button className = 'jobInputButtons' id = 'inputButtonAdd' onClick={buttonClick}>Add</button>
        <button className = 'jobInputButtons' id = 'inputButtonRemove' onClick={buttonClickRemove}>Remove</button>
        </div>
        {inputFields.map((inputField, id) => {
            return (
                
 <form className='jobInputFieldWrapper' key={id}>
            <div className='formInputBoxes'>
            <input className='inputBoxes' placeholder = 'UniversityName' id = 'UniversityName' name = 'UniversityName' onChange={(e) => addValueToObject(e, id)} value={inputField.UniversityName}></input>
            <input className='inputBoxes' placeholder = 'Qualification' id = 'Qualification'name = 'Qualification' onChange={(e) => addValueToObject(e, id)} value={inputField.Qualification}></input>
            <input className='inputBoxes' placeholder = 'Grade Awarded' id = 'Grade' name = 'Grade' onChange={(e) => addValueToObject(e, id)} value={inputField.Grade}></input>
            <input className='inputBoxes' placeholder = 'Study Start Date: ' type='date' id = 'from' name = 'from' onChange={(e) => addValueToObject(e, id)} value={inputField.from}></input>
            <input className='inputBoxes' placeholder = 'Study End Date: ' type='date' id = 'to' name = 'to' onChange={(e) => addValueToObject(e, id)} value={inputField.to}></input>
            </div>
         <div className='eduOutputValues'>
            <div>{inputField.Qualification}</div>
            <div>{inputField.UniversityName}</div>
            <div>{inputField.Grade}</div>
            <div>{inputField.from}</div>
            <div>{inputField.to}</div>
        </div>

 </form> )
        })
        }
    </div>
    </div>
)

}




export default AddEducation;







