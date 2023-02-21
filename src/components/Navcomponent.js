import logo from '../pages/logo.png';
import support from '../pages/support.png';
import gift from '../pages/gift.png';
import { Link } from 'react-router-dom';


function Navcomp(){
return(
    <>
<nav class="navbar fixed-top navbar-light bg-light">
              <a class="navbar-brand logo"><img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>Start Travelling</a>


              <form class="form-inline">
                  <a ><img src={gift} width="20" height="20" class="d-inline-block align-top" alt=""></img> offers</a>
                  <a><img src={support} width="20" height="20" class="d-inline-block align-top" alt=""></img>  support</a>
                  <a class="navbar-brand"></a>
                  <Link exact to="/Registerpage">
                  <button class="btn btn-primary" type="submit">signin/signup</button>
                  </Link>
              </form>
          </nav>
          </>
);
        }
        export default Navcomp;