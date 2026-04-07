import React, { useState } from 'react';

const ControlledField = () => {

    const [pass, setPass] = useState('');
    const [passError, setPassError] = useState('');

    const handleSubmit = (e) => {
        e.preventDeafult();
    }

    const handlePassChange = (e) => {
        console.log(e.target.value);
        setPass(e.target.value);
        if (pass.length < 6) {
            setPassError("Password must be longer that 6 charecter!")
        } else {
            setPassError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" autoComplete='username' placeholder='email' required />
                <br />
                <input type='password' name="password" id="" autoComplete='current-password'
                    defaultValue={pass} onChange={handlePassChange} placeholder='password' required />
                <p><small style={{color: 'red'}}>{passError}</small></p>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;