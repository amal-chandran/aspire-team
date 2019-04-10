import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { MainNav } from './';

class Layout extends Component {
    render() {
        return (
            <div>
                <MainNav />

                <Container>
                    {this.props.children}
                </Container>
            </div>

        )
    }
}

export default Layout