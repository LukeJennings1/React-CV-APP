import {useState} from 'react';


function AddEducation(props) {
    
    const [UniversityName, setUniversityName] = useState('')
    const [Qualification, setQualification] = useState('')
    const [Subject, setSubject] = useState('')
    const [from, setFrom] = useState('')
    const [to, setto] = useState('')
    const [notes, setNotes] = useState('')


return (
    <div>
    <div className='jobInputFields'>
    <input className = 'jobInputBoxes' name='University Name' placeholder='University Name' onChange = {e => setUniversityName(e.target.value)} value = {UniversityName} />
    <input className = 'jobInputBoxes' name='Qualification' placeholder='Qualification' onChange = {e => setQualification(e.target.value)} value = {Qualification} />
    <input className = 'jobInputBoxes' name='Grade' placeholder='Grade' onChange = {e => setSubject(e.target.value)} value = {Subject} />
    <input className = 'jobInputBoxes' type = 'date' name='from' placeholder='Date From' onChange = {e => setFrom(e.target.value)} value = {from} />
    <input className = 'jobInputBoxes' type = 'date' name='to' placeholder='Date To' onChange = {e => setto(e.target.value)} value = {to} />
    <textarea className='jobInputBoxes' rows='4' columns = '50'  placeholder = 'Notes' id = 'notes' name = 'notes' onChange={(e) => setNotes(e.target.value)} value={notes}></textarea>

    </div>
    <div className='educationInputWrapper1'>
        <div className='educationTitle'>{UniversityName}</div>
        <div>{Qualification}</div>
        <div>{Subject}</div>
        <div className='educationDates'>
        <div>{from}</div>
        <div>{to}</div>
        </div>
        <div className='notes'>{notes}</div>

        </div>
  </div>
  
)

}

export default AddEducation;







