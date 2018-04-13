import React, { Component } from 'react';
import '../style/chefs.css';
import Footer from '../frontpage/Footer';
import Forma from './form';
import HeaderMin from '../frontpage/HeaderMin';



class Chef extends Component {
 
  render() {
    return(
      <div className="about-content">
        <div className="content">
          <HeaderMin />
        </div>

        <div className="about-body">
          <div className="about-text">
            <h2>The fast way to get food to your customers</h2>
          </div>
          <div className="y-video">
              <iframe src="https://www.youtube.com/embed/hMM8yryHffM?rel=0&amp;controls=0&amp;showinfo=0"></iframe>
            </div>
          <div className="formi">
            <Forma />
          </div>
          <div className="sum-component">
            <div className="row">
              
              <div className="col-sm-4">
                <img className="image4 img-responsive" src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/location.png" alt="image4"/>
                <br />
                <p className="a-text"><b>Do more business</b></p>
                <br />
                <p className="summary-a">Bukka makes a real impact on your business. When your food is featured in the app, new customers can discover it and loyal customers can enjoy it more often. We’ve seen restaurants increase sales, lower marketing costs, and hire new employees to capitalize on Bukka demand.</p>
              </div>
              <div className="col-sm-4">
                <img className="image4 img-responsive" src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/register.png" alt="image5"/>
                <br />
                <p className="a-text"><b>Deliver faster</b></p>
                <br />
                <p className="summary-a">Bukka is the fast way to get food to your customers. With hundreds of delivery partners on the road, you can deliver in an average of 15 minutes and maintain the best possible food quality. You can also track orders from the floor, right to a customer’s door.</p>
              </div>
              <div className="col-sm-4">
                <img className="image4 img-responsive" src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/meal.png" alt="image6"/>
                <br />
                <p className="a-text"><b>Partner with professionals</b></p>
                <br />
                <p className="summary-a">When you partner with Bukka, we’re in the weeds with you. We’ll get you set up, promote your menu, and work with you to improve pickup and delivery times. We’ll continue to test and learn together to boost volume, keep operations smooth, and impress your customers.</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="foot">
            <Footer />
        </div>
      </div>
    )
  }
}

export default Chef