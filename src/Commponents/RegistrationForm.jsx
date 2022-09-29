import React, { useState } from "react";

const RegistrationForm = () => {
  const [names, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");
  const [errLastNAme, seterrLastNAme] = useState("");
  const [errEmail, seterrEmail] = useState("");
  const [done, setDone] = useState("");


  const clickHandler = (e) => {
    e.preventDefault();
    if (!names) {
      return seterror("Plz enter the Name");
    }
    else if(!lastName){
      return(
        seterrLastNAme( "Plz enter the LastName")
        )
    }else if(!email){
      return(
        seterrEmail( "Plz enter the Email")
        )
    }else{
      setDone('Successfully')
    }
    setName('')
    setlastName('')
    setEmail('')
   
  };

  return (
    <div className="main">
      <form action="onSubmit">
        <br/>
      <h1>Login Form</h1>
        <br/>
        <div className="inputMain">
          <div><label htmlFor="name">Name : </label></div>
          <input
            id="name"
            type="name"
            required
            value={names}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
          <div className="error">{error}</div>
        <div className="inputMain">
         <div> <label htmlFor="LastName">LastName : </label></div>
          <input
            id="LastName"
            type="lastName"
            required
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
          <div className="error">{errLastNAme}</div>
        <div className="inputMain">
          <div><label htmlFor="Email">Email : </label></div>
          <input
            id="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="error">{errEmail}</div>
        <div className="done">{done}</div>
        <div>
          <button onClick={clickHandler}>Submit</button>
        </div>
        <br/>
      </form>
    </div>
  );
};

export default RegistrationForm;
