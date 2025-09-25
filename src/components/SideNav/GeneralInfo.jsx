import { useState } from "react"

function GeneralInfo() {
    const [general, setGeneral] = useState({
        firstName: "",
        lastName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        links: []
    });

    return (
        <>
            <div className="card m-1 p-3">
                <h3>General Information</h3>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="First Name" />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="Last Name" />
                    <label htmlFor="">Job Title</label>
                    <input type="text" placeholder="Job Title" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email" />
                    <label htmlFor="">Phone</label>
                    <input type="tel" placeholder="Phone" />
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder="Location" />
                    <button>Add Link</button>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default GeneralInfo