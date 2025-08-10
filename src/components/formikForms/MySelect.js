import PropTypes from "prop-types";
import { useField } from "formik";

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} {...props}>
                {props.options.map((option, index) => (
                    <option key={index} value={option.type}>{option.name}</option>
                ))}
            </select>
            {meta.error ? (
                <small className="alert alert-danger form-text text-muted">{meta.error}</small>
            ) :null}
        </div>
    );
};

export default MySelect;
