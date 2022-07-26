import React from 'react';

const Country = (props) => {
    const {name, population, region, flags} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={{ border: '1px solid red', margin: "5px", padding: "10px"}}>
            <h4>This is {name.common}</h4>
            <img style={{width:"50px"}} src={flags.png} alt="" />
            <p>The population of the country: <b>{population}</b></p>
            <p><small><u>Region</u>: <b>{region}</b></small></p>
            <button onClick={ ()=> handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;