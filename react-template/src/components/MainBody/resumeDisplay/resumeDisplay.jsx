import { useState } from "react";

function ResumeDisplay({ formData }) {

    return (
        <div className="col-8 mainSection px-5 pt-3 d-flex">
            <h1 className="pe-2 first-name">{formData.firstName}</h1>
            <h1 className="last-name">{formData.lastName}</h1>
        </div>
    )
}

export default ResumeDisplay;