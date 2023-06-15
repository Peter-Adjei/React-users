import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            name: "",
            email: "",
            gen: ""

        });
        // console.log("form Submitted:", this.state);
        // e.preventDefault();
        // this.setState
        // ({

        // }

        // )
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail"><br></br>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                        {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword"><br></br>
                        <Form.Label>Gen</Form.Label>
                        <Form.Control type="number" placeholder="Enter your Gen" name="gen" value={this.state.gen} onChange={this.handleChange} />
                    </Form.Group><br></br>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddUserForm;
