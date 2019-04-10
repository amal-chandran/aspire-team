import React, { Component } from "react";
import { connect } from "react-redux";
import Notifications from 'react-notification-system-redux';

class Notify extends Component {

    render() {
        const { notifications } = this.props;

        const style = {
            NotificationItem: { // Override the notification item
                DefaultStyle: { // Applied to every notification, regardless of the notification level
                    margin: '10px 5px 2px 1px'
                },
            }
        };

        return (
            <Notifications
                notifications={notifications}
                style={style}
            />
        );
    }
}

export default connect(
    state => ({ notifications: state.notifications })
)(Notify);