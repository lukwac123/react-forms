import PropTypes from "prop-types";
import React from "react";

const MyInput = props => {
    const { type, label, name, value, className } = props;
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <input type={type} id={name} name={name} value={value} className={className} />
        </div>
    );
}

MyInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string
};

export default MyInput;
