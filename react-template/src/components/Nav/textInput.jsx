function TextInput ({name, value}) {
    return (
        <>
            <label
                className="col-12"
            >{name}</label>
            <input
            className="col-12 mb-4"
            type="text"
            name={name}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            />
        </>
    );
}

export default TextInput;