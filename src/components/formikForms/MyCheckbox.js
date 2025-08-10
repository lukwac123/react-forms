import { useField } from "formik";

const MyCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type:"checkbox"});
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <input {...field} {...props} type="checkbox" />
            {meta.error ? (
                <small className="alert alert-danger form-text text-muted">{meta.error}</small>
            ) :null}
        </div>
    );
};

export default MyCheckbox;
