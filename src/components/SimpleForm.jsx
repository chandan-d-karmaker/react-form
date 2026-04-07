import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='Your name' />
                <br />
                <input type="emal" name='email' placeholder='Your Email' />
                <br />
                <input type="submit" value='Submit form' />

            </form>
        </div>
    );
};

export default SimpleForm;