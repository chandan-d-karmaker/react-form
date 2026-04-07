import React, { useState } from 'react';

const ControlledField = () => {

    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDeafult();
    }

    const handlePassChange = (e) =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" autoComplete='username' placeholder='email' required />
                <br />
                <input type='password' name="password" id="" autoComplete='current-password'
                defaultValue={pass} onChange={handlePassChange} placeholder='password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;