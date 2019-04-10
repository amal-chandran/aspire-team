import React, { Component } from 'react'
import { Row, Col } from "reactstrap";
import { ProfileIcon } from "./../assets";
import { Profile as ProfileService } from "./../services";

class Profile extends Component {

    constructor() {
        super();
        this.state = { data: null };
    }
    componentDidMount() {
        ProfileService.loadProfileData().then((snapshoot) => {

            this.setState({ data: snapshoot.val() });
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div style={{ maxWidth: "900px" }} className="mx-auto bg-white shadow-sm border">
                {data !== null ?
                    <div>
                        <div className="d-flex flex-column">
                            <div className="text-center py-3" style={{ background: "rgba(255,193,7,.5)" }}>
                                <img className="mr-3 w-25 rounded-circle" src={data.avatar || ProfileIcon} alt="Profile Icon" />
                            </div>
                            <div className="flex-grow-1 px-5 pt-5 pb-2">
                                <h2 className="font-weight-bold">{data.name}</h2>
                                <h4>{data.description} </h4>
                            </div>
                        </div>
                        <Row className="m-0 h4">
                            <Col className="px-5 pb-5" md="6">
                                <div className="mb-2">Age: {data.age}</div>
                                <div className="mb-2">Sex: {data.sex}</div>
                                <div className="mb-2">Height: {data.height}</div>
                                <div className="mb-2">Weight: {data.weight}</div>
                            </Col>
                            <Col className="px-5 pb-5" md="6">
                                <div className="mb-2">State: {data.state}</div>
                                <div className="mb-2">Ethnicity: {data.ethnicity}</div>
                                <div className="mb-2">Race: {data.race}</div>
                            </Col>
                        </Row>
                    </div>
                    : "Loading ..."
                }

            </div>
        )
    }
}

export default Profile