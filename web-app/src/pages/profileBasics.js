import React, { Component } from 'react';
import { connect } from "react-redux";
import { Wizard, Steps, Step, WithWizard } from 'react-albus';
import { Progress, Button, Nav, NavItem, NavLink } from 'reactstrap';
import { FormIntro, FormPersonal } from './../components/pgprofilebasics';
import { withRouter } from 'react-router-dom';
import { Profile } from "./../services";


class ProfileBasics extends Component {

    constructor() {
        super();
        this.stepPages = [
            { name: "Introduction", component: (<FormIntro />) },
            { name: "Personal Information", component: (<FormPersonal />) },
        ];
    }

    componentWillMount() {
        Profile.loadProfileData("Form")
    }

    render() {

        return (
            <div style={{ maxWidth: "900px" }}
                className="mx-auto my-5 border shadow-sm bg-white">

                <Wizard>
                    <WithWizard render={WizardNav} />

                    <Steps>
                        {StepBuilder(this.stepPages)}
                    </Steps>

                    <WizardButtons />
                </Wizard>
            </div>
        )
    }
}

export default withRouter(connect()(ProfileBasics))


const WizardButtons = () => {

    const buttonRender = ({ next, previous, step, steps }) => {

        const currentStepIndex = steps.indexOf(step);

        return (
            <div className="p-2 d-flex justify-content-center">

                {currentStepIndex < steps.length - 1 && (
                    <Button onClick={next} color="primary">  Proceed </Button>)}

            </div>
        );
    }

    return (
        <WithWizard render={buttonRender} />
    );
}


const StepBuilder = (stepPages) => {
    return stepPages.map((value, index) => (
        <Step key={index} name={value.name}
            id={value.id || value.name}>

            <div className="p-3">{value.component}</div>
        </Step>
    ))
}

const WizardNav = (props) => {
    const { step, steps } = props;

    return (
        <div className="bg-light">
            <div style={{ maxWidth: "50%" }} className="mx-auto">
                <NavBuilder {...props} />
            </div>
            <Progress
                color="info"
                style={{ height: ".2rem" }}
                value={(steps.indexOf(step) + 1) / steps.length * 100}
            />
        </div>
    );
};

const NavBuilder = ({ step, steps }) => {
    return (
        <Nav pills>
            {steps.map((tabItem, index) => (
                <NavItem key={index} className="text-center border-left border-right">
                    <NavLink className="rounded-0"
                        active={step.id === tabItem.id ? true : false}>
                        <i className="fa fa-tick" />
                        {tabItem.name}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    );
}