import React from "react";
import { Formik, Field, Form } from "formik";
import { Row, Col, Container } from "react-bootstrap";

const MyFormik = ({ props }) => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1>Witamy przy kasie!</h1>
                    <h2>Podaj dane do wysyłki:</h2>
                </Col>
            </Row>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    street: ""
                }}
                onSubmit={ values => {
                    console.log(values);
                }}
            >
                <Form>
                    <Row>
                        <Col xs={12} md={4}>
                            <label htmlFor="firstname">Imię</label>
                            <Field name="firstname" id="firstname" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <label htmlFor="lastname">Nazwisko</label>
                            <Field name="lastname" id="lastname" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <label htmlFor="street">Ulica</label>
                            <Field name="street" id="street" className="form-control" />
                        </Col>
                        <Col xs={12} className="mt-2">
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Wyślij</button>
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </Container>
    );
};

export default MyFormik;