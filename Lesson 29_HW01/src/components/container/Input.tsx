import React, { useState, useRef } from 'react';
import './inputStyle.css'
import Posts from './Posts';

const Input = () => {
    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')

    const handleInputName = (e:any) => {
        setInputName(e.target.value)
    }
    const handleInputDescription = (e:any) => {
        setInputDescription(e.target.value)
    }

    const initialState = [
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'Phyton', body: 'Description'},
        {id: 3, title: 'Java', body: 'Description'},
        {id: 4, title: 'C++', body: 'Description'}
    ];

    const [posts, setPost] = useState(initialState);
    
    const handleClick = () => {
    setPost(current => [...current, {id: posts.length+1, title: inputName, body: inputDescription}]);
    console.log(posts);
    }

    return (
        <div className='inputDiv'>
            <h2 className='inputPreview'>Post name:{inputName} & Post description:{inputDescription}</h2>
            <label htmlFor="inputName" className='inputNameLabel'>
                Post name:
                <input 
                    type="text"
                    name = "inputName"
                    className='inputName'             
                    value = {inputName} 
                    onChange={handleInputName} 
                />
            </label>

            <label htmlFor="inputDescription" className='inputDescriptionLabel'>
                Post description:
                <input 
                    type="text"
                    name = "inputDescription"
                    className='inputDescription'             
                    value = {inputDescription}
                    onChange={handleInputDescription} 
                />
            </label>
            <div className='inputBtns'>
                <button onClick={()=> {setInputName(''), setInputDescription('')}}>Delete</button>
                <button onClick={handleClick}>Add</button>
            </div>
        <Posts postData = {{name: 'Programming languages:'}} postsList = {{posts}} editPost = {{setPost}}/>
        </div>
    );
};

export default Input;








 // type Profile = {
    //     inputName: string | number,
    //     inputDescription: string | number
    // }
