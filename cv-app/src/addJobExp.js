import {useState, useEffect} from 'react';

function AddJobExp(){

const [inputFields, setInputFields] = useState([
    {position: '', company: '', from: '', to: '',duties: '', id:1},
])
const buttonClick = () => {
    setInputFields([...inputFields, {position: '', company: '', from: '', to: '',duties: '', id: inputFields.id +1}])
} 
const buttonClickRemove = () => {
    setInputFields(inputFields.slice(0,1))
}
const addValueToObject = (e, id) => {
    console.log(id)

   const clonedData = [...inputFields]
   clonedData[id][e.target.name] = e.target.value
    setInputFields(clonedData)
    console.log(clonedData)   
}
return (
    <div>

    <div className='jobExpFieldInput'>
        <button onClick={buttonClick}>Add</button>
        <button onClick={buttonClickRemove}>Remove</button>

        {inputFields.map((inputField, id) => {
            return (
                
        <form className='jobInputFieldWrapper' key={id}>

            <input className='textBoxes' name = 'position' onChange={(e) => addValueToObject(e, id)} value={inputField.position}></input>
            <div>{inputField.position}</div>

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