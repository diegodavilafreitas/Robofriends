import React from 'react';

const SearchBox = ({searchfield, searchChanges}) =>{
    return(
        <div className= 'pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type ='search' 
                placeholder='search robots'
                onChange={searchChanges}
            /> 
        </div>
    );
}

export default SearchBox;