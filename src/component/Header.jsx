import React from "react";

import logo from './assets/images/logo.png';
import { FiAirplay } from "react-icons/fi";
import { BsFillArchiveFill } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { Link } from 'react-bootstrap'
function Header(props) {
    
    return (
        <>
        <div>
        {/* <Button variant="primary">Primary</Button> */}
        {/* <Link to = "/Next>">Next</Link> */}
        <button onClick = 'Next'>Next</button>

        
        
        
        </div>
        <nav class="mx-2 mx-sm-5 mt-sm-5">
        <div class="logo-container">
            <img id="logo" src={logo} alt="" />
            
        </div>
        <div class="top-bar">
            <div class="left-icon">
            <FiAirplay/>
            <BsFillArchiveFill/>
            </div>
            <div class="right-icon">
                <i class="fa fa-home" aria-hidden="true"></i>
                <i class="fa fa-user" aria-hidden="true"></i>
                
            </div>
            
        </div>
        
    </nav>


    <section id="cart-root">

<div className="container-fluid" style={{ padding: '35px 15px 100px', width: '100%', maxWidth: '1200px',
marginInline: 'auto'}}>
  <div className="row">
    <div className="wrapper text-left px-2 px-md-5" style={{ marginBottom: '150px' }}>
      <div className="col-12">
        <h2 className="auth-heading pl-0 mb-4 ">Your Cart</h2>
      </div>
      <div className="col-12">
        <p className="sign-up-link mb-4 "><a href="#" className="sign-up-link red">Cart &gt;</a><a href="#" className="sign-up-link red mx-1">Information &gt;</a>Shipping &gt; Payment</p>
      </div>
      <div className="row cart-check-main-row">
        </div>
        </div>
        </div>
        </div>
        </section>

        {/* <BrowserRouter>
      <Routes>
        <Route path="./" element={<Next />}>
          
        </Route>
      </Routes>
    </BrowserRouter> */}

        </>
    )

}
export default Header;



 {/* import React from "react";
 export  default class Header extends  React.Component{
   constructor(props){
    super(props);
    this.state ={data: "tushar"}
   }

    render(){
        return(
            <>
            <h1>
                {this.state.data}
            </h1>
            <button onClick={()=>{this.setState({data:"rajendra"})}}>
                change
            </button>
            </>
        )
    }
} */}