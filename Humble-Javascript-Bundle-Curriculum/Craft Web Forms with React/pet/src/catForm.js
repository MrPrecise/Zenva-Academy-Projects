import React from 'react';
import { Container, Col, Row, Jumbotron, Form, Button } from 'react-bootstrap';
import logo from './zenva-academy.png';

class CatForm extends React.Component {

    state = {
        name: '',
        breed: '',
        date: ''
    };

    setName = event => {
        this.setState({
            name: event.target.value
        });
    }

    setDate = event => {
        this.setState({
            date: event.target.value
        });
    }

    setBreed = event => {
        this.setState({
            breed: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const {
            name,
            date
        } = this.state;

        alert(`Appointment created for ${name}
        On ${date}
        `);
    }

    render() {

        const {
            name,
            breed,
            date
        } = this.state;

        return (
            <>
            <br/>
            <Container>
                <Row>
                    <Col md={{span: 7, offset: 3}}>
                        <Jumbotron>
                            <img width={100} src={logo} alt="something"/>
                            <p>Are you or your pet new to React? Please fill out this 
                                simple form with as much of your information as you can 
                                provide, and it will be sent directly to us in preparation
                                for your first appoinment
                            </p>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <h2>Feline Information</h2>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="input"
                                        value={name} 
                                        placeholder="Name"
                                        onChange={this.setName} 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBirth">
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control type="date"/>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridBreed">
                                        <Form.Label>Breed</Form.Label>
                                        <Form.Control 
                                            as="select" 
                                            value={breed}
                                            onChange={this.setBreed}
                                        >
                                            <option>Choose...</option>
                                            <option>Abyssinian</option>
                                            <option>American Bobtail</option>
                                            <option>Bengal</option>
                                            <option>Birman</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control placeholder="Enter Color"/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridSex">
                                        <Form.Label>Sex</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Male"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Female"
                                            name="formHoriRadios"
                                            ids="formHoriRadios1"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAltered">
                                        <Form.Label>Altered</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="formHoriRadios2"
                                            ids="formHoriRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="formHoriRadios2"
                                            ids="formHoriRadios2"
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.Label>Does your cat have any know allergies or reactions to any vaccines or medications</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>
                                
                                <Form.Group>
                                    <Form.Label>Schedule Appointment</Form.Label>
                                    <Form.Control type="date" value={date} onChange={this.setDate}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }

}

export default CatForm