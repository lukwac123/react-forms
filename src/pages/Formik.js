import React from "react";
import { Formik, Form } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import MySelect from "../components/formikForms/MySelect";
import MyInput from "../components/formikForms/MyInput";
import MyCheckbox from "../components/formikForms/MyCheckbox";
import MyTextarea from "../components/formikForms/MyTextarea";
import * as Yup from "yup";


const FormikCheckout = (props) => {

    const paymentOptions = [
        {id: "", name: "----"},
        {id: "PayPal", name: "PayPal"},
        {id: "Stripe", name: "Stripe"},
        {id: "Karta kredytowa", name: "Karta kredytowa"}
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

                validationSchema={Yup.object({
                    firstname: Yup.string()
                    .min(2, "Imię musi posiadać minimum dwa znaki")
                    .max(15, "Imię może posiadać maksimum 15 znaków")
                    .required("Pole wymagane"),

                    lastname: Yup.string()
                    .min(2, "Nazwisko musi posiadać minimum dwa znaki")
                    .max(15, "Nazwisko może posiadać maksimum 15 znaków")
                    .required("Pole wymagane"),

                    street: Yup.string()
                    .min(2, "Ulica musi posiadać minimum dwa znaki")
                    .max(15, "Ulica może posiadać maksimum 15 znaków")
                    .required("Pole wymagane"),

                    zip: Yup.string()
                    .min(2, "Kod pocztowy musi posiadać minimum dwa znaki")
                    .max(15, "Kod pocztowy może posiadać maksimum 15 znaków")
                    .required("Pole wymagane"),

                    city: Yup.string()
                    .min(2, "Miasto musi posiadać minimum dwa znaki")
                    .max(15, "Miasto może posiadać maksimum 15 znaków")
                    .required("Pole wymagane"),

                    gift: Yup.boolean().required("Pole wymagane"),

                    paymentType: Yup.string()
                    .oneOf(
                        ["Stripe", "PayPal", "Karta kredytowa"],
                    )
                    .required("Pole wymagane")
                })}

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
