import React from 'react';
import './searchbox.css'

const Searchbox=({placeholder,handleChange})=>(
    <div>
        <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
)

export default Searchbox;