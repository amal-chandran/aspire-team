import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="pb-0">
                    <h1 className="display-3">Welcome !</h1>
                    <p className="lead">Talke a look at our smart and tallanted user profiles and start one for your presenation.</p>
                    <hr className="my-2" />
                </Jumbotron>
                {/* <ProfileList /> */}
            </div >
        );
    }
};

export default HomePage;