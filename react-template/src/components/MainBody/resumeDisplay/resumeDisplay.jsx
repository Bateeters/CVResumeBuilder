function ResumeDisplay({ formData }) {

    return (
        <div className="col-8 mainSection p-5">
            <div className="d-flex">
                <h1 className="pe-3">{formData["First Name"]||"First Name"}</h1>
                <h1 className="pe-3">{formData["Last Name"]||"Last Name"}</h1>
                <h3 className="">{formData["Job Title"]||"Job Title"}</h3>
            </div>
            <hr className="my-1"></hr>
            <div className="d-flex justify-content-between">
                <h5 className="">{formData["Email"]||"Email"}</h5>
                <h5 className="">{formData["Phone Number"]||"Phone Number"}</h5>
            </div>
            <div className="d-flex justify-content-between">
                <h5 className="">{formData["Website"]||"Website"}</h5>
                <h5 className="">{formData["LinkedIn"]||"LinkedIn"}</h5>
            </div>
        </div>
    )
}

export default ResumeDisplay;