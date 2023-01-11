import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../redux/action';
import './index.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    


    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (name !== '') {
            dispatch(getCountryByName(name))
            setName('')
        } else {
            alert('Please enter a country name')
        }
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            handleSubmit(event)
        }
      };

    return (
        <div className='search-container'>
            <input
                className='inputsearch'
                type="text"
                value={name}
                placeholder='Search...'
                onChange={(e) => handleChange(e)}
                onKeyDown={handleKeyDown}
            />
            <button className='btnsearch' type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}