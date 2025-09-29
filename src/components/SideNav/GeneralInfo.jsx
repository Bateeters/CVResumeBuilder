import { useState } from "react";

function GeneralInfo({ general, setGeneral }) {
    const [isEditing, setIsEditing] = useState(true);

    const handleAddLink = (e) => {
        e.preventDefault(); // this prevents page reload on click
        setGeneral({
            ...general,
            links: [...general.links, {name: "", url: ""}]
        })
    }

    const handleRemoveLink = (i) => {
        const updatedLinks = [...general.links]; // grab the current list of links
        updatedLinks.splice(i, 1); // removes just 1 item at the specified index, "i"
        setGeneral({ ...general, links: updatedLinks }); // update the current list of links with the change
    }

    return (
        <>
            <div className="card mx-1 mb-3 p-3 shadow-sm row justifly-content-center">
                <h3 className="p-0">General Information</h3>
                <hr />
                {isEditing && (
                    <form action="" className="row col-12 justify-content-between m-auto p-0">
                        <input type="text" placeholder="First Name" className="col-5 mb-3"
                            // The following are the parts needed to link the input to the useState Object
                            value={general.firstName}
                            onChange={(e) => setGeneral({...general, firstName: e.target.value })}
                        />

                        <input type="text" placeholder="Last Name" className="col-5 mb-3"
                            value={general.lastName}
                            onChange={(e) => setGeneral({...general, lastName: e.target.value })}
                        />

                        <input type="text" placeholder="Job Title" className="col-12 mb-3"
                            value={general.jobTitle}
                            onChange={(e) => setGeneral({...general, jobTitle: e.target.value })}
                        />

                        <input type="email" placeholder="Email" className="col-12 mb-3"
                            value={general.email}
                            onChange={(e) => setGeneral({...general, email: e.target.value })}
                        />

                        <input type="tel" placeholder="Phone" className="col-12 mb-3" 
                            value={general.phone}
                            onChange={(e) => setGeneral({...general, phone: e.target.value })}
                        />

                        <input type="text" placeholder="Location" className="col-12 mb-3" 
                            value={general.location}
                            onChange={(e) => setGeneral({...general, location: e.target.value })}
                        />
                        <textarea placeholder="Summary Section" className="col-12 mb-3" 
                            value={general.summary}
                            onChange={(e) => setGeneral({ ...general, summary: e.target.value})}
                        />

                        {general.links.map((link, id) => (
                            <div className="col-12 p-0 row m-auto justify-content-between" key={id} style={{ marginBottom: "10px" }}>
                                <input
                                className="col-5 mb-3"
                                type="text"
                                placeholder="Link Name"
                                value={link.name}
                                onChange={(e) => {
                                    const updatedLinks = [...general.links];
                                    updatedLinks[id].name = e.target.value;
                                    setGeneral({ ...general, links: updatedLinks });
                                }}
                                />
                                <input
                                className="col-5 mb-3"
                                type="text"
                                placeholder="Link URL"
                                value={link.url}
                                onChange={(e) => {
                                    const updatedLinks = [...general.links];
                                    updatedLinks[id].url = e.target.value;
                                    setGeneral({ ...general, links: updatedLinks });
                                }}
                                />
                                <button className="col-2 mb-3 p-0 text-center btn btn-danger" type="button" onClick={() => handleRemoveLink(id)}>X</button>
                            </div>
                        ))}
                        <button className="col-5 btn btn-secondary" onClick={handleAddLink}>Add Link</button>

                        <button
                            className="col-5 btn btn-success"
                            // make submit button switch editing mode to "false"
                            onClick={(e) => {
                                e.preventDefault(); // makes button stop reload/state reset
                                setIsEditing(false);
                            }}
                        >Submit</button>
                    </form>
                )}

                {!isEditing && (
                    <div className="p-0">
                        <h5 className="p-0 m-0">{general.firstName} {general.lastName}</h5>
                        <p>{general.jobTitle}</p>
                        <h5 className="p-0 m-0">Contact Info:</h5>
                        <p className="p-0 m-0"><strong>Email:</strong> {general.email}</p>
                        <p className="p-0 m-0"><strong>Phone:</strong> {general.phone}</p>
                        <p><strong>Location:</strong> {general.location}</p>
                        <h5 className="p-0 m-0">Links:</h5>
                        {general.links.map((link) => (
                            <p className="p-0 m-0"
                            key={link.id}><strong>{link.name}</strong>:&nbsp;
                                <a href={link.url}>{link.url}</a>
                            </p>
                        ))}
                        <h5 className="mt-3 mb-0">Summary:</h5>
                        <p>{general.summary}</p>
                        <button
                            className="col-12 btn btn-primary"
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