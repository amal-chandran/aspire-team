import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button
} from "reactstrap";
import { loadProfileList } from "./../../services/profile";
import { Link } from "react-router-dom";

export default class ProfileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    loadProfileList().then(snapshoot => {
      const result = snapshoot.val();
      const resultarray = [];
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          const element = result[key];
          element["id"] = key;
          resultarray.push(element);
        }
      }
      this.setState({ data: resultarray });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Row>
          {data &&
            data.map(data_item => (
              <Col>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={data_item.avatar}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{data_item.name}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>{data_item.description}</CardText>
                    <Link to={"/profile/" + data_item.id}>View Profile</Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    );
  }
}
