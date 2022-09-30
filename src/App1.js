import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const initialvalue={username:"",email:"",password:""};
 const [formValues,setformValues]=useState(initialvalue);
 const [formErrors,setFormErrors]=useState({})
 const [isSubmit,setisSubmit]=useState(false);
  
 const handleChange=(e)=>{
  const {name,value}=e.target;
setformValues({...formValues,[name] : value})
// console.log(formValues)
 }
 const submitHandler=(e)=>{
  e.preventDefault();
  setFormErrors(Validate(formValues));
  setisSubmit(true);
 }
 useEffect(()=>{
  console.log(formErrors)
if(Object.keys(formErrors).length===0 && isSubmit){
  console.log(formValues)
}
 },[formErrors])

 const Validate=(values)=>{
  const errors={};
  const regex= /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/i;
  if(!values.username){
    errors.username="User name is required!"
  } 
  if(!values.email){
    errors.email="Email is required!"
  } else if(!regex.test(values.email)){
    errors.email="This is not required email format!"
  }
  if(!values.password){
    errors.password="Password is required!";
  } else if(values.password.length < 4){
    errors.password="Password must contain more than 4 characters" ;
  }else if(values.password.length > 10){
    errors.password="Password must contain less than 10 characters" ;
  }
  return errors;


 }
  return (
   <div className='container mt-5'>
    {Object.keys(formErrors).length===0 && isSubmit?(<h2>*SIGNED IN SUCCESSFULLY !</h2>):<pre>{JSON.stringify(formValues)}</pre>}
    <br/>
    <div className='row'>
      <div className='col-md-6'>
        <h1>FORM VALIDATIONS</h1><br/>
        <form className='form form-group' onSubmit={submitHandler}>
         
          <label>USER NAME:</label>
          <input  type="text" 
          name='username' 
          className='form-control' 
          value={formValues.username}
          onChange={handleChange}/><br/>
          <p>{formErrors.username}</p>
          
          <label>EMAIL:</label>
          <input type="email"
           name='email' 
           className='form-control' 
           value={formValues.email}
           onChange={handleChange}/><br/>
            <p>{formErrors.email}</p>
         
          <label>PASSWORD:</label>
          <input type="password" 
          name='password'
          className='form-control' 
          value={formValues.password}
          onChange={handleChange}/><br/>
           <p>{formErrors.password}</p>

          <input type="submit" className='form-control bg-primary text-white' value="submit"/><br/>
        </form>
      </div>
    </div>
   </div>
  );
}

export default App;
