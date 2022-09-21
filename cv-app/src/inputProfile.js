import { useState } from "react";

function Profile () {
    const [profile, setProfile] = useState('')

return (
    <div>
        <textarea ows="4" cols="50" className="jobInputBoxes" id = 'profileInputBox' name="profileInput" onChange={(e) => setProfile(e.target.value)}></textarea>
        <div className="profileInput">
            {profile}
        </div>
    </div>
)
}

export default Profile;