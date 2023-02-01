import './Login.css';
import { useState } from 'react';
import { Navigate,Link } from 'react-router-dom';
export default function Login(){

    const initialStateErrors = {
    
        email:{required:false},
        password :{required:false},
        custom_error:null

    }
    const [errors,setErrors]=useState(initialStateErrors);

    const [loading,setloading]=useState(false);

    return(
        <section  fluid className="login-block">
          
        <div className="container">
        
            <div className="row ">
                <div className="col login-sec">
                    <div className="container2">
                    <h2 className="text-center">Login Now</h2>
                    <div className="para">
                    <p>Start exploring the World</p>
                    </div>
                    </div>
                    
                    <form className="login-form" action="">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                        <input type="email"  className="form-control" name="email"  id="" placeholder="email" / >
                        {
                        errors.email.required==true?
                       ( <span className="text-danger" >
                            Email is required.
                        </span>):null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-control" type="password"  name="password" placeholder="password" id="" />
                         {
                        errors.password.required==true?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null
                         }
                    </div>
                    <div className="form-group">
                    { loading?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null
                         }
                        
                        <span className="text-danger" >
                        {errors.custom_error?
                           <p>{errors.custom_error}</p>
                           :null
                           }
                        </span>
                        <input  type="submit" className="btn btn-login float-right"  value="Login" />
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-group">
                        <div className='last'>
                    Create new account ? Please <Link exact to="/Registerpage">Register</Link>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}