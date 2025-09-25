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

    const [isEditing, setIsEditing] = useState(true);

    return (
        <>
            <div className="card m-1 p-3">
                <h3>General Information</h3>
                {isEditing && (
                    <form action="">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder="First Name" 
                            // The following are the parts needed to link the input to the useState Object
                            value={general.firstName}
                            onChange={(e) => setGeneral({...general, firstName: e.target.value })}
                        />

                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder="Last Name" 
                            value={general.lastName}
                            onChange={(e) => setGeneral({...general, lastName: e.target.value })}
                        />

                        <label htmlFor="">Job Title</label>
                        <input type="text" placeholder="Job Title" 
                            value={general.jobTitle}
                            onChange={(e) => setGeneral({...general, jobTitle: e.target.value })}
                        />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" 
                            value={general.email}
                            onChange={(e) => setGeneral({...general, email: e.target.value })}
                        />

                        <label htmlFor="">Phone</label>
                        <input type="tel" placeholder="Phone" 
                            value={general.phone}
                            onChange={(e) => setGeneral({...general, phone: e.target.value })}
                        />

                        <label htmlFor="">Location</label>
                        <input type="text" placeholder="Location" 
                            value={general.location}
                            onChange={(e) => setGeneral({...general, location: e.target.value })}
                        />

                        <button>Add Link</button>

                        <button
                            // make submit button switch editing mode to "false"
                            onClick={(e) => {
                                e.preventDefault(); // makes button stop reload/state reset
                                setIsEditing(false);
                            }}
                        >Submit</button>
                    </form>
                )}

                {!isEditing && (
                    <div>
                        <p>{general.firstName} {general.lastName}</p>
                        <p>{general.jobTitle}</p>
                        <p>{general.email}</p>
                        <p>{general.phone}</p>
                        <p>{general.location}</p>
                        <p>{general.links}</p>
                        <button
                            // make edit button switch editing mode to "true"
                            onClick={() => setIsEditing(true)}
                        >Edit</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default GeneralInfo