import React, { Component } from "react";
import HeaderMin from '../frontpage/HeaderMin';
import "../style/career.css";
import Footer from '../frontpage/Footer';



export default class Careers extends Component {

  render() {
    return (
      <div>
        <div className="content">
        <HeaderMin />
        </div>
      
        <form id="test-form">
        <div className="top">
        <div className="row">
          <div className="col-md-6 left">
          
              <label>
                <div>Full Name:<span>*</span></div>
                <input  className="inp in"
                        type="text" 
                        name="name" 
                        id="name"
                        />
              </label>
              
              <label>
                <div>Email:<span>*</span></div>
                <input className="inp in" id="emaila" type="text" name="email" />
              </label>
              <div className="p">
                <label>
                  <div>Professional experience:<span>*</span></div>
                  <div className="year">
                    <p>Year</p>
                    <input className="in" id="year" type="number" name="professional-experience-year" /> 
                  </div>
                  <div className="month">
                    <p>Month</p>
                    <input className="in" id="month" type="number" name="professional-experience-month"/>
                  </div>
                </label>
              </div>
              <label>
                Elaborate your current work experience:
                <textarea rows="10" className="inp" name="work-experience"/>
              </label>
              <label>
                Select interview date:
                <input className="inp d in" type="date" name="interview-date" />
              </label>
            
          </div>
          <div className="col-md-6 right">
            
              <label>
                <div>Phone:<span>*</span></div>
                <input className="inp in" id="phone" type="tel" name="phone" placeholder="+234 ..."/>
              </label>
              <label>
                <div>Team you want to part of:<span>*</span></div>
                <input className="inp in" id="team" type="text" name="preferred-team" />
              </label>
              <label>
                Link to your best social footprint:
                <input className="inp d in" type="text" name="social-footprint" placeholder="http://"/>
                (Twitter, Blog, LinkedIn or anything that you would like us to make a note of!)
              </label>
              <label>
                What makes you unique to work for Bukka:
                <textarea rows="10" name="unique-trait" className="inp" />
              </label>
              <label>
                <div>Submit the link to your resume:<span>*</span></div>
                <input className="inp in" id="resume" type="text" name="resume" />
              </label>
           
            
          </div>
        </div>
        </div>
      <input className="submit" id="submit-form" type="submit" value="Submit"/>
        </form>
       
        <div className="foot">
          <Footer />
        </div>
      </div>
    )
  }
}
