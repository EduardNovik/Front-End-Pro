import React, { useState } from 'react';
import './FormStyle.css'

const Form = ({personalInfo, setPersonalInfo}:any) => {

    const [show, setShow] = useState(false)
    const [inputName, setInputName] = useState('')
    const [inputUsername, setInputUsername] = useState('')
    const [inputPhone, setInputPhone] = useState('')

    const clearFormInput = () => {
        setInputName('')
        setInputUsername('')
        setInputPhone('')
        setShow(false)
    }

    const saveData = () => {
        if(inputName.length !== 0 && inputUsername.length !== 0 && inputPhone.length !== 0){
            let newPersonalInfo = [...personalInfo, {name:inputName, username:inputUsername, phone:inputPhone, id:Math.random()*1000}] 
            setPersonalInfo(newPersonalInfo)
            setInputName('')
            setInputUsername('')
            setInputPhone('')
            setShow(false)
        }
    }

    return (
        <div className='formBlock'>
            <button onClick={()=>{setShow(!show)}}>Show form</button>
            {show &&
                <div className='inputsWithBtnsBlock'>
                    <form action="#" className='inputBlock'>
                        <label htmlFor="">Name: 
                            <input type="text" value={inputName} onChange={(e:any) => setInputName(e.target.value)}/>
                        </label>
                        <label htmlFor="">Username: 
                            <input type="text" value={inputUsername} onChange={(e:any) => setInputUsername(e.target.value)}/>
                        </label>
                        <label htmlFor="">Phone: 
                            <input type="text" value={inputPhone} onChange={(e:any) => setInputPhone(e.target.value)}/>
                        </label>
                    </form>
                    <div className='btnsBlock'>
                        <button onClick={clearFormInput}>Clear form</button>
                        <button onClick={saveData}>Save data</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Form;