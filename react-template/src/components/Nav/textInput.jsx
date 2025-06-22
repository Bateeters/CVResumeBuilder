import { useState } from "react";

function TextInput ({name, value, onChange }) {
    return (
        <>
            <label className="col-12">{name}</label>
            <input
            className="col-12 mb-4"
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            />
        </>
    );
}

export default TextInput;