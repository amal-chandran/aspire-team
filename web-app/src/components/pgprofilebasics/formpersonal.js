import React, { Component } from 'react'
import {
    FormGroup, Label, Button,
    InputGroup, InputGroupAddon,
} from 'reactstrap';

import { Form, Control } from "react-redux-form";
import { Profile } from "./../../services";

const { saveProfileData } = Profile;


export default class FormPersonal extends Component {
    render() {
        return (
            <div>
                <Form model={"profileBasics"} onSubmit={(data) => (saveProfileData(data, true))}>
                    <FormGroup>
                        <Label for="State">State</Label>
                        <Control.input model={"profileBasics.state"} type="text" id="State" name="State" className="w-50 form-control" />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Age">Age</Label>
                        <Control.input model={"profileBasics.age"} type="text" id="Age" name="Age" className="w-50 form-control" />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Ethnicity">Ethnicity</Label><br />

                        <RadioButton model={"profileBasics.ethnicity"} value="Hispanic or Latino" id="Ethnicity" name="Ethnicity" label="Hispanic or Latino" />
                        <RadioButton model={"profileBasics.ethnicity"} value="Non-Hispanic or Latino" id="Ethnicity2" name="Ethnicity" label="Non-Hispanic or Latino" />

                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Race">Race</Label><br />
                        <RadioButton model={"profileBasics.race"} value="American Indian" id="Race" name="Race" label="American Indian" />
                        <RadioButton model={"profileBasics.race"} value="Asian" id="Race2" name="Race" label="Asian" />
                        <RadioButton model={"profileBasics.race"} value="Native Hawaiian or Other Pacific Islander" id="Race3" name="Race" label="Native Hawaiian or Other Pacific Islander" />
                        <RadioButton model={"profileBasics.race"} value="Black or African American" id="Race4" name="Race" label="Black or African American" />
                        <RadioButton model={"profileBasics.race"} value="White" id="Race5" name="Race" label="White" />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Sex">Sex</Label><br />
                        <RadioButton model={"profileBasics.sex"} value="Male" id="Sex" name="Sex" label="Male" />
                        <RadioButton model={"profileBasics.sex"} value="Female" id="Sex2" name="Sex" label="Female" />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Height">Height</Label>
                        <InputGroup className="w-50">
                            <Control.input model={"profileBasics.height"} type="text" id="Height" name="Height" className="w-50 form-control" />
                            <InputGroupAddon addonType="append">In inches</InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="Weight">Weight</Label>
                        <InputGroup className="w-50">
                            <Control.input model={"profileBasics.weight"} type="text" id="Weight" name="Weight" className="w-50 form-control" />
                            <InputGroupAddon addonType="append">In inches</InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-center">
                        <Button color="primary">Proceed</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

const RadioButton = ({ label, id, ...props }) => (
    <div className="custom-control custom-radio custom-control-inline">
        <Control.radio {...props} id={id} className="w-50 form-control custom-control-input" />
        <label className="custom-control-label" htmlFor={id}>{label}</label>
    </div>
);