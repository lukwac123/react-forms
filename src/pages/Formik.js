import React from "react";
import { Formik, Field, Form } from "formik";

const Formik = ({ props }) => {
    return (
        <div>
            <h1>Witamy przy kasie!</h1>
            <h2>Podaj dane do wysyłki:</h2>
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
                    <label htmlFor="firstname">Imię</label>
                    <Field name="firstname" id="firstname" />
                    <label htmlFor="lastname">Nazwisko</label>
                    <Field name="lastname" id="lastname" />
                    <label htmlFor="street">Ulica</label>
                    <Field name="street" id="street" />
                </Form>
            </Formik>
        </div>
    );
};

export default Formik;