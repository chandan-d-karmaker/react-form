import React from 'react';
import useInputField from '../hooks/useInputField';

const HookForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name);
    }

    const [name, changeName] = useInputField('');
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" defaultValue={name} onChange={changeName}  /> <br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default HookForm;