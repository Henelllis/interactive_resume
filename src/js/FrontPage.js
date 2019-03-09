import React, { Component } from 'react';

class FrontPage extends Component {
    
    switchToPage = (event) => {
        console.log(event.target.innerText)
        this.props.history.push('/' + event.target.innerText)
    }

    render() {
        return (
            <div className="resume--front-page--container">
            {/* <div className="resume--container__surname--container">
            <p className="resume--container__surname">Henry Ellis</p>
            </div> */}
            <p className="resume--container__surname">Henry Ellis</p>
            <div className="resume--container__sections--container">
                <div onClick={this.switchToPage} className="resume--container__section profile--section"><div className="arrow-up arrow-up--profile"></div>Profile <div className="arrow-down arrow-down--profile"></div></div>
                <div className="resume--container__section resume--section"><div className="arrow-up arrow-up--resume"></div>Resume <div className="arrow-down arrow-down--resume"></div></div>
                <div className="resume--container__section skill--section">Skills</div>
                <div className="resume--container__section contact--section">Contact</div>
            </div>
          </div>
        );
    }
}

export default FrontPage;