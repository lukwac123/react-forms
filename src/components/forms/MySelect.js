import PropTypes from "prop-types";
import React from "react";

const MySelect = props => {
    const { label, name, value, className, onChange, options, error } = props;
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <select name={name} id={name} value={value} className={className} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.id}>{option.name}</option>
                ))}
            </select>
            {error && (
                <small className="alert alert-danger form-text text-muted">{error}</small>
            )}
        </div>
    );
}

MySelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
    error: PropTypes.string
};

export default MySelect;
