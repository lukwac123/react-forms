import React from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import MySelect from "../components/formikForms/MySelect";
import MyInput from "../components/formikForms/MyInput";
import MyCheckbox from "../components/formikForms/MyCheckbox";
import MyTextarea from "../components/formikForms/MyTextarea";


const FormikCheckout = ({ props }) => {

    const paymentOptions = [
        {id: "-", name: "----"},
        {id: "pp", name: "PayPal"},
        {id: "stripe", name: "Stripe"},
        {id: "cc", name: "Karta kredytowa"}
    ];

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
                    street: "",
                    zip: "",
                    city: "",
                    paymentType: "",
                    comment: "",
                    gift: false
                }}
                onSubmit={ values => {
                    console.log(values);
                }}
            >
                <Form className="w-100">
                    <Row>
                        <Col xs={12} md={4}>
                            <MyInput label="Imię" name="firstname" type="text" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInput label="Nazwisko" name="lastname" type="text" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInput label="Ulica i numer domu" name="street" type="text" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInput label="Kod pocztowy" name="zip" type="text" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyInput label="Miasto" name="city" type="text" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <MySelect label="Rodzaj płatności" name="paymentType" className="form-select" options={paymentOptions} />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyTextarea label="Komentarz" name="comment" className="form-control" />
                        </Col>
                        <Col xs={12} md={4}>
                            <MyCheckbox name="gift" className="form-check-input" label="Zapakować na prezent?" />
                        </Col>
                        <Col xs={12}>
                            <button type="submit" className="btn btn-primary btn-lg btn-block mt-2">Wyślij</button>
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </Container>
    );
};

export default FormikCheckout;
