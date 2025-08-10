import { useField } from "formik";

const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <textarea {...field} {...props} />
            {meta.error ? (
                <small className="alert alert-danger form-text text-muted">{meta.eror}</small>
            ) : null}
        </div>
    );
};

export default MyTextarea;
