import React, { Component } from 'react'
import { FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, CustomInput } from 'reactstrap';
import { ProfileIcon } from "./../../assets";
import { Form, Control, } from "react-redux-form";
import AvatarEditor from 'react-avatar-editor'
import firebase from "firebase";
import { connect } from "react-redux";
import { actionCreator } from "./../../redux/actions/formExtra.actions";

class FormIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            file: ProfileIcon,
            scale: 1.2,
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleScale = e => {
        const scale = parseFloat(e.target.value)
        this.setState({ scale })
    }

    onChangeFile = (event) => {
        event.preventDefault();
        console.log(event);
        if (event.target.files[0]) {
            this.setState({
                file: event.target.files[0]
            })
        }
    }

    UploadAvatar = () => {
        const canvas = this.editor.getImage();
        const imagePath = '/images/' + Date.now();
        canvas.toBlob((blob) => {
            firebase.storage().ref(imagePath)
                .put(blob).then((snapshot) => {
                    firebase.storage().ref(imagePath).getDownloadURL().then((url) => {
                        this.props.updateAvatar({ avatar: url });
                        this.toggle();
                    })
                });
            ;
        });

    }

    setEditorRef = (editor) => this.editor = editor

    render() {
        const { file } = this.state;
        return (
            <div>
                <Modal isOpen={this.state.modal} className={this.props.className}>
                    <ModalHeader>Upload Profile Picture</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="customFile">Select A File</Label>
                            <CustomInput onChange={this.onChangeFile} type="file"
                                id="customFile" label="Pick a image" />
                        </FormGroup>
                        <AvatarEditor
                            ref={this.setEditorRef}
                            image={file}
                            width={250}
                            height={250}
                            border={50}
                            color={[255, 255, 255, 0.6]} // RGBA
                            scale={parseFloat(this.state.scale)}
                            rotate={0}
                        />
                        <div>
                            <label htmlFor="customRange1">Zoom</label>
                            <input type="range" className="custom-range" onChange={this.handleScale}
                                min={'1'}
                                max="2"
                                step="0.01"
                                defaultValue="1" id="customRange1" />
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.UploadAvatar}>Upload</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Form model="profileBasics" className="mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="d-flex">
                        <img onClick={this.toggle} className="mr-3 avatarIcon rounded-circle"
                            src={this.props.ProfileImage || ProfileIcon} alt="Profile Icon" />

                        <FormGroup className="flex-grow-1">
                            <Label for="Name">Your Name</Label>
                            <Control.text model="profileBasics.name" type="text" id="Name" name="Name" className="form-control" />
                        </FormGroup>
                    </div>

                    <FormGroup>
                        <Label for="shortdesc">Write a short description about yourself</Label>
                        <Control.textarea model="profileBasics.description" type="text" id="shortdesc"
                            name="shortdesc" className="form-control"
                            placeholder="May be you can write about your goals or motivations" />
                    </FormGroup>
                </Form>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAvatar: (data) => (dispatch(actionCreator.setExtra(data)))

    };
};

const mapStateToProps = ({ formExtra }) => {
    return { ProfileImage: formExtra.avatar }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormIntro)
