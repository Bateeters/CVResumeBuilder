import { useState } from "react";

function GeneralInfo({ general, setGeneral }) {
    const [isEditing, setIsEditing] = useState(false);

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
            <div className="card m-1 p-3">
                <h3>General Information</h3>
                {isEditing && (
                    <form action="">
                        <input type="text" placeholder="First Name" 
                            // The following are the parts needed to link the input to the useState Object
                            value={general.firstName}
                            onChange={(e) => setGeneral({...general, firstName: e.target.value })}
                        />

                        <input type="text" placeholder="Last Name" 
                            value={general.lastName}
                            onChange={(e) => setGeneral({...general, lastName: e.target.value })}
                        />

                        <input type="text" placeholder="Job Title" 
                            value={general.jobTitle}
                            onChange={(e) => setGeneral({...general, jobTitle: e.target.value })}
                        />

                        <input type="email" placeholder="Email" 
                            value={general.email}
                            onChange={(e) => setGeneral({...general, email: e.target.value })}
                        />

                        <input type="tel" placeholder="Phone" 
                            value={general.phone}
                            onChange={(e) => setGeneral({...general, phone: e.target.value })}
                        />

                        <input type="text" placeholder="Location" 
                            value={general.location}
                            onChange={(e) => setGeneral({...general, location: e.target.value })}
                        />
                        <textarea placeholder="Summary Section" 
                            value={general.summary}
                            onChange={(e) => setGeneral({ ...general, summary: e.target.value})}
                        />

                        {general.links.map((link, id) => (
                            <div key={id} style={{ marginBottom: "10px" }}>
                                <input
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
                                type="text"
                                placeholder="Link URL"
                                value={link.url}
                                onChange={(e) => {
                                    const updatedLinks = [...general.links];
                                    updatedLinks[id].url = e.target.value;
                                    setGeneral({ ...general, links: updatedLinks });
                                }}
                                />
                                <button type="button" onClick={() => handleRemoveLink(id)}>X</button>
                            </div>
                        ))}
                        <button onClick={handleAddLink}>Add Link</button>

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
                        {general.links.map((link) => (
                            <p key={link.id}>{link.name}:&nbsp;
                                <a href={link.url}>{link.url}</a>
                            </p>
                        ))}
                        <p>{general.summary}</p>
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