import Joi from 'joi';
import React, { useState } from 'react';


export default function Register() {


    let [registerData, getRegisterData] = useState({
        email: '',
        password: ''
    });
    let [frontErrors, getFrontErrors] = useState([]);


    function setRegisterData(e) {
        let myRegisterData = { ...registerData };
        myRegisterData[e.target.name] = e.target.value;
        getRegisterData(myRegisterData);
        console.log(myRegisterData);
    }




    function submitRegisterData(e) {
        e.preventDefault();
        let validateResult = validateRegisterData();

        if (validateResult.error) {
            getFrontErrors(validateResult.error.details);
            console.log('jjj', validateResult.error.details);
            console.log("frontErrors=", frontErrors);

        } else {

            alert('Congracts!Register Done Successfully :)');
        }
    }


    function validateRegisterData() {
        const Joi = require('joi');
        const schema = Joi.object({
            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        });

        return schema.validate(registerData, { abortEarly: false });
    }

    return (
        <>

            <div className="container my-5" id='formContainer' >

                <h2 className='my-5 text-center'>Registeration Page</h2>
                <div className="container">
                    {frontErrors.map((error, index) =>

                        <div key={index} className="alert alert-danger " >
                            {error.message}
                        </div>

                    )}
                </div>



                <form onSubmit={submitRegisterData}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={setRegisterData} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={setRegisterData} name="password" type="password" className="form-control" id="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>

        </>
    )
}
