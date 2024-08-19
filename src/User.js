import React, { useState, useEffect} from 'react';

const User = (props) => {

  const {name, last, pic, gender, email, age, house, street, city, state, country, zip} = props
  const [isHidden, setHide] = useState(true)

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'flex-start', justifyContent: "space-between", width: '500px'}}>
        <img style={{height: '70px'}} src={pic} alt='image of user'></img>
        <h4>{name} {last}</h4>
        <button onClick={() => isHidden ? setHide(false) : setHide(true)}>{isHidden ? 'Show Details' : 'Hide Details'}</button>
        
      </div>
      {isHidden ? 
        <div></div> :
        <div>
          <p style={{textAlign: 'left', marginTop: '0px'}}>
            <b>Gender:</b> {gender} <br></br>
            <b>Email:</b> {email} <br></br>
            <b>Age:</b> {age} <br></br>
            <b>Address:</b> {house} {street} <br></br> {city}, {state} <br></br> {country} {zip}
          </p>
        </div>}
    </div>
    

  )
}


export default User
