import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="img_title">
          <img className="logo" src="https://www.gravatar.com/userimage/126022818/c60c2cc94305c1a7ad6c8d8d77de3f1d?size=120" alt="Stacked Books"/>
          <h1>Elementary Tutor</h1>
          <nav>
            <ul className="main-menu">
              <li><a href="">Menu</a>
                <ul className="sub-menu">
                  <li><a href="#">Main Page</a></li>
                  <li><a href="#">Register</a></li>
                  <li><a href="#">Log In</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="img-sticky">
          <div className="img">
            <img className="images" src="https://www.gravatar.com/userimage/126022818/de14299c6d5ddb2adf5a8855d69f30ef?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/2267e293a1c718b97b372a28e9a6b99b?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/fda1c4d62a8e6eb46d0050a6bf3f6b77?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/9c52829030d75d854cb0ad14729d3f9a?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/3e3544fd3e724c8f8c9c79b8e75ee5c5?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/6628fbd33bf67941e569ae4e6320aa1a?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/f11a41611dd609d11f4105e3ebd1efd1?size=120" alt=""/>
            <img className="images" src="https://www.gravatar.com/userimage/126022818/06118b55062ffc5b469398f11a60d4dc?size=120" alt=""/>
          </div>
          <div className="sticky-contain">
            <div className="sticky1 sticky">
              <div className="sticky-top"></div>
              <a href="help.html">How you can help!!</a>
            </div>
            <div className="sticky2 sticky">
              <div className="sticky-top"></div>
              <a href="tips_tricks.html">Students Tips and Tricks!!</a>
            </div>
            <div className="sticky3 sticky">
              <div className="sticky-top"></div>
              <p>SCS</p>
              <ol>
                <li>Study</li>
                <li>Comprehend</li>
                <li>Succeed</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="service_contact">
          <section>
            <div className="top-panel">
              <h2>Services</h2>
            </div>
            <hr/>
              <a href="#">Reading</a>
                <p>This is text about our reading program</p>
              <a href="#">Math</a>
                <p>This is text about our math program</p>
              <a href="#">Writting</a>
                <p>This is text about our writting program</p>
              <a href="#">Homework Help</a>
                <p>This is text about our homework help program</p>
          </section>
          <div className="about_me">
            <h2>About Me</h2>
            <hr/>
            <div className="about-text">
              <p>
                Hi and welcome! My name is Nora, I am a wife, mother, and educator.
                I have a bachelors degree in elementary education and I am certified in Arizona, Texas, and Florida.
                I have a masters in educational leadership. In the past eight years, I have taught kindergarten, third, fourth, fifth,and sixth grade.
                I enjoy working with children and my goal is to help all children reach their max potential.
              </p>
              <p>
                About a year ago, my daughter, started struggling with reading and math. At the time,
                we lived in Arizona, a state that does not allow a student to be promoted to fourth grade if
                they do not pass the AZMerit. As the concerned parent I was, I focused on her
                reading in order to help her improve. She went from low approaches in reading to a high meets.
                Which is amazing, but, using all the I know I was able to help her ahcieve this gap.
              </p>
              <p>
                I am hoping to help other children with academic struggles and I look forward to seeing
                their faces when they see all their accomplishments throughout the year.
              </p>
            </div>
            <hr/>
          </div>
          <section>
            <div className="top-panel">
              <h2>Contact Me</h2>
            </div>
            <hr/>
            <form autocomplete="on">
              <div className="form">
                <fieldset>
                  <label for="fullname">Full Name:</label>
                  <input id="fullname" type="text" name="fullname"/>
                </fieldset>
                <fieldset>
                  <label for="email">Email:</label>
                  <input id="email" type="text" name="address"/>
                </fieldset>
                <fieldset>
                  <label for="phone#">Phone Number:</label>
                  <input id="phone#" type="number" name="phone#"/>
                </fieldset>
                <fieldset>
                  <label for="interest">Interest:</label>
                  <select id="interest" name="interest">
                    <option value="" selected>Reading</option>
                    <option value="">Math</option>
                    <option value="">Writting</option>
                    <option value="">Homework Help</option>
                  </select>
                </fieldset>
              </div>
            </form>
          </section>
      </div>
        <hr/>
        <section>
          <div className="quote">
            <p>"Learning is not attained by chance, <br/>it must be sought for with ardor and <br/>diligence." Abigail Adams</p>
          </div>
        </section>
        <hr/>
      <footer>
        <p>Copyright <span>&copy;</span> 2017 <a href="#">Elementary Tutor LLC</a></p>
      </footer>
        </div>
      </div>
    );
  }
}

export default App;
