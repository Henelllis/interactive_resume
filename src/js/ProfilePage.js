import React, { Component } from 'react';
import HandsomeDude from '../images/mustache.jpg'
import svgSource from '../images/house.svg'
import { faHome, faCommentMedical } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfilePage extends Component {

    onClickHome = (event) => {
        console.log('Return back to the home page');
        event.preventDefault();
        this.props.history.push('/')
    }


    render() {
        return (
            <div className="resume--profile-page--container">
                    <div className="resume--profile-page--pic"><img  className="profile-page--pic" src={HandsomeDude} alt=""/></div>
                    <div className="resume--profile-page--bio">
                        <div className="resume--profile-page--header--container">
                            <div className="resume--profile-page--header--title"> Bio </div>
                            <hr className="resume--profile-page--line--break"/>
                            {/* <hr className="resume--profile-page--line--break"></hr> */}
                        </div>
                        <p className="resume--profile-page--paragraph">
                            &emsp;Hi my name is Henry. I'm looking to get more into front end develpoment. My hobbies include cartooning and oil painting. My other hobbies include logic puzzles and programming. Why not combine the creativty of art with the logic of programming. There is something rewarding about making your own site match your vision.
                        </p>
                        <p className="resume--profile-page--paragraph">
                            &emsp;I have around 5 years of professional development. 
                            I am avid beleive that one should constantly improve their skills. I am a big fan of Udemy. I also frequent meet ups for developers. I go to ReactJSBoston and PythonBoston. I also work on side projects which you can find on my github. ADD MORE STUFF L8ER
                        </p>
                    </div>


                    <div className="resume--profile-page--education">
                        <div className="resume--profile-page--header--education">
                            <div className="resume--profile-page--education--title"> Education </div>
                            <hr className="resume--profile-page--edu__line--break"/>
                            {/* <hr className="resume--profile-page--line--break">  </hr> */}
                        </div>
                        <div className="resume--profile-page--education_schools">
                            {/* TODO :: CLEAN UP INTO COMPONENTS , ROUGH DRAFT */}
                            <div className="resume--profile-page--education_school">
                                <div>
                                    2012-2014
                                </div>
                                <div>
                                    University of Massachusetts Amherst
                                </div>
                                <div>
                                    BS Computer Science 
                                </div>
                            </div>
                            <button 
                                onClick={this.onClickHome}
                                className="resume--profile-page--home-page">
                                <FontAwesomeIcon className="resume--profile-page--home-icon fa-2x" icon={faHome} />
                            </button>
                            <div></div>
                        </div>

                    </div>


            </div>
        );
    }
}

export default ProfilePage;