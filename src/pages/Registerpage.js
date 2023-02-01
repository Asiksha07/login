import { useState } from 'react'
import { RegisterApi } from '../services/api';
import { isAuthenticated } from '../services/Auth';
import { storeUserdata } from '../services/Storage';
import './Registerpage.css'
import { Navigate,Link } from 'react-router-dom';


export default function Registerpage(){
    const initialStateErrors = {
    
        email:{required:false},
        password :{required:false},
        name:{required:false},
        custom_error:null

    }
    const [errors,setErrors]=useState(initialStateErrors);
    const [loading,setloading]=useState(false);

    const handleSubmit = (event)=>{

        event.preventDefault();
        let errors =initialStateErrors;
        let haserror = false;
        if (inputs.name==""){
        errors.name.required=true;
        haserror=true;
        }
        if (inputs.email==""){
            errors.email.required=true;
            haserror=true;
            }
            if (inputs.password==""){
                errors.password.required=true;
                haserror=true;
                }


                if(haserror!=true){
                    setloading(true)
                    //will send api eror
                    RegisterApi(inputs).then((response)=>{
                        storeUserdata(response.data.idToken);
                }).catch((err)=>{
                   if(err.response.data.error.message=="EMAIL_EXISTS"){
                       setErrors({...errors,custom_error:"Already this email has been registered"})
                   } 
                   else if(String(err.response.data.error.message).includes('WEAK_PASSWORD')){
                    setErrors({...errors,custom_error:"password should be atleast 6 character"})
                   }  
                } ).finally( ()=>{
                     setloading(false) 
                }  )
               
                }
               
                setErrors(errors);
    }
    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        name:""
    })
    const handleInputs =(event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }
    if(isAuthenticated()){
        return <Navigate to = "/dashboard" />
    }
    return(
        <section className="register-block">
            <div className="container">
               <div className="row ">
                  <div className="col register-sec">
                    <div className="container3">  
                                        
                     <h2>welcome</h2>
                     </div>
                     <form  onSubmit={handleSubmit} className="register-form" action=" ">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
          
                        <input type="text" className="form-control"onChange={handleInputs} name="name" id=""  />
                        {errors.name.required==true?
                        (<span className="text-danger" >
                            Name is required.
                        </span>):null
                         }
                     </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
          
                        <input type="text"  className="form-control"onChange={handleInputs} name="email" id="" / >
                        {
                        errors.email.required==true?
                       ( <span className="text-danger" >
                            Email is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password" onChange={handleInputs}  name="password" id="" />
                        {
                        errors.password.required==true?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null
                         }
                     </div>
                     <div className="form-group">
                      
                        <span className="text-danger" >
                            {errors.custom_error?
                           <p>{errors.custom_error}</p>
                           :null
                           }
                        </span>
                        { loading?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null
                         }
                        <input type="submit" className="btn btn-login float-right" disabled={loading}  value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-group last">
                     Already you have an account?
                        <Link exact to="/Login">
                      <a> Login</a>
                      </Link>
                     </div>
          
          
                     </form>
          
          
                  </div>
          
               </div>
          
          
            </div>
          </section>
    )
}