import { useState } from "react"

function Experience({ experience, setExperience }) {

    const handleExperienceChange = (e, index, field) => {
        const updated = [...experience];
        updated[index][field] = e.target.value;
        setExperience(updated);
    };

    const handleAddBullet = (index) => {
        const updated = [...experience];
        updated[index] = {
            ...updated[index],
            additional: [...updated[index].additional, ""]
        };
        setExperience(updated);
    };

    const handleBulletChange = (e, expIndex, bulletIndex) => {
        const updated = [...experience];
        updated[expIndex].additional[bulletIndex] = e.target.value;
        setExperience(updated);
    };

    const handleRemoveBullet = (expIndex, bulletIndex) => {
        const updated = [...experience];
        updated[expIndex] = {
            ...updated[expIndex],
            additional: updated[expIndex].additional.filter((_, i) => i !== bulletIndex)
        };
        setExperience(updated);
    };

    const handleRemoveExperience = (i) => {
        const updatedExperience = [...experience]; // grab the current list of links
        updatedExperience.splice(i, 1); // removes just 1 item at the specified index, "i"
        setExperience(updatedExperience); // update the current list of links with the change
    }

    const handleAddExperience = () => {
        setExperience([...experience, {
            company: "",
            title: "",
            location: "",
            startDate: "",
            endDate: "",
            additional: [],
            isEditing: false
        }]);
    }

    const toggleEditExperience = (id, value) => {
        const updated = [...experience];
        updated[id].isEditing = value;
        setExperience(updated);
    }

    return(
        <>
            <div className="card m-1 p-3">
                <h3>Experience</h3>
                {experience.map((job, id) => (
                    <div key={id}>
                        {job.isEditing ? (
                        <>
                            <input type="text" placeholder="Position"
                                value={job.title}
                                onChange={(e) => handleExperienceChange(e, id, 'title')}
                            />
                            <input type="text" placeholder="Company" 
                                value={job.company}
                                onChange={(e) => handleExperienceChange(e, id, 'company')}
                            />
                            <input type="text" placeholder="Location" 
                                value={job.location}
                                onChange={(e) => handleExperienceChange(e, id, 'location')}
                            />
                            <input type="text" placeholder="Start Date" 
                                value={job.startDate}
                                onChange={(e) => handleExperienceChange(e, id, 'startDate')}
                            />
                            <input type="text" placeholder="End Date" 
                                value={job.endDate}
                                onChange={(e) => handleExperienceChange(e, id, 'endDate')}
                            />
                            <div>
                                {job.additional.map((bullet, bID) => (
                                    <div key={bID}>
                                        <textarea
                                            value={bullet} onChange={(e) => handleBulletChange(e, id, bID)}
                                        />
                                        <button onClick={() => handleRemoveBullet(id, bID)}>X</button>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => handleAddBullet(id)}>Add Bullet</button>



                            <button onClick={() => toggleEditExperience(id, false)}>Submit</button>
                            
                        </>
                        ) : (
                        <>
                            <p>{job.title} - {job.company}</p>
                            <button onClick={() => toggleEditExperience(id, true)}>Edit</button>
                            <button onClick={() => handleRemoveExperience(id)}>X</button>
                        </>
                        )}
                    </div>
                ))}

                <button onClick={handleAddExperience}>Add Experience</button>
            </div>

        </>
    )
}

export default Experience