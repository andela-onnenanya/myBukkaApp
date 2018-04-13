import React, { Component } from 'react';
import '../style/form.css';
import lib from '../util/lib';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state={
			fi:null,
			la:null,
      em:null,
      us:null,
			mo:null,
			pa:null,
      par:null
    }
    this.reg=this.reg.bind(this)
  }
  chefSignup(){
		if(document.getElementById("passwordc").value !== document.getElementById("passwordr").value){
			alert("Confirm Password is not the same as Password.")
		}
		else{
		var email=document.getElementById("emailc").value,
		firstname=document.getElementById("fnamec").value,
		lastname=document.getElementById("lnamec").value,
    password=document.getElementById("passwordc").value,
    username=document.getElementById("usernamec").value,
    mobile=document.getElementById("phonec").value,
    isChef=true
		lib.chefSignup(firstname,lastname,email,mobile,password,isChef)
		}
  }
  
    reg(e){
		var email=document.getElementById("emailc").value,
		firstname=document.getElementById("fnamec").value,
		lastname=document.getElementById("lnamec").value,
    password=document.getElementById("passwordc").value,
    rpassword=document.getElementById("passwordr").value,
    username=document.getElementById("usernamec").value,
		mobile=document.getElementById("phonec").value

		if(e.currentTarget.id==="emailc")
			this.setState({em:email})
		else if(e.currentTarget.id==="fnamec")
			this.setState({fi:firstname})
		else if(e.currentTarget.id==="lnamec")
			this.setState({la:lastname})
		else if(e.currentTarget.id==="passwordc")
			this.setState({pa:password})
		else if(e.currentTarget.id==="passwordr")
      this.setState({pas:rpassword})
    else if(e.currentTarget.id==="usernamec")
      this.setState({us:username})
		else if(e.currentTarget.id==="phonec")
			this.setState({mo:mobile})
	}
  render() {
    return (
      <div className="about-form">
        
        <div className="forming">
          <form>
          
          <h3>Sign up now</h3>
      
              <div>
                <input type="text" className="a-form" id="fnamec" name="fname" placeholder="First Name" required onChange={this.reg}/>
              </div>
              <div>
                <input type="text" className="a-form" id="lnamec" name="lname" placeholder="Last Name" required onChange={this.reg}/>
              </div>
              <div>
                <input type="email" className="a-form" id="emailc" name="email" placeholder="Email" required onChange={this.reg}/>
              </div>
              <div>
                <input type="text" className="a-form" id="usernamec" name="username" placeholder="Username" required onChange={this.reg}/>
              </div>
              <div>
                <input type="tel" className="a-form" id="phonec" name="phone" placeholder="Phone (+234)" required onChange={this.reg}/>
              </div>
              <div>
                <input type="password" className="a-form" id="passwordc" name="password" placeholder="Password" required onChange={this.reg}/>
              </div>
              <div>
                <input type="password" className="a-form" id="passwordr" name="r-password" placeholder="Confirm Password" required onChange={this.reg}/>
              </div>
              <div className="a-check">
                <input type="checkbox"  id="check" name="check" required/>
                <p className="a-check__text">Please check the box</p>
              </div>
              <p className="form-agree">By proceeding, I have read, understood and agreed to the relevant Bukka Privacy Statement.</p>
            <input type="button" className="a-form" id="submit" onClick={this.chefSignup} value="Get Started"/>
          </form>
        </div>
      </div>
    )
  }
}
export default Form