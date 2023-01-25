import React, { useState } from 'react';

const ShortForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submit = (event) => {
        
        const data = {
            firstName,
            lastName,
            email,
            password
        }

        console.log(data);

        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">First Name</label> <br />
                    <input type="text" name="name" id="name" placeholder="First Name" onBlur={(e)=>setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name">Last Name</label> <br />
                    <input type="text" name="name" id="name" placeholder="Last Name" onBlur={(e)=>setLastName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name">Email</label> <br />
                    <input type="email" name="name" id="name" placeholder="Email" onBlur={(e)=>setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name">Password</label> <br />
                    <input type="password" name="name" id="name" placeholder="Password" onBlur={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ShortForm;