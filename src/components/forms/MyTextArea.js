import PropTypes from "prop-types";
import React from "react";

const MyTextArea = props => {
    const { label, type, name, value, className, onChange } = props;
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <textarea id={name} name={name} type={type} value={value} className={className} onChange={onChange} />
        </div>
    );
}

MyTextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default MyTextArea;
