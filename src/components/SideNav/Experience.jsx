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
            <div className="card mx-1 mb-3 p-3 shadow-sm row justify-content-center">
                <h3 className="p-0">Experience</h3>
                <hr />
                {experience.map((job, id) => (
                    <div className="p-0" key={id}>
                        {job.isEditing ? (
                        <form action="" className="row col-12 justify-content-between m-auto p-0">
                            <input type="text" placeholder="Position" className="col-12 mb-3"
                                value={job.title}
                                onChange={(e) => handleExperienceChange(e, id, 'title')}
                            />
                            <input type="text" placeholder="Company" className="col-12 mb-3" 
                                value={job.company}
                                onChange={(e) => handleExperienceChange(e, id, 'company')}
                            />
                            <input type="text" placeholder="Location" className="col-12 mb-3" 
                                value={job.location}
                                onChange={(e) => handleExperienceChange(e, id, 'location')}
                            />
                            <input type="text" placeholder="Start Date" className="col-12 mb-3" 
                                value={job.startDate}
                                onChange={(e) => handleExperienceChange(e, id, 'startDate')}
                            />
                            <input type="text" placeholder="End Date" className="col-12 mb-3" 
                                value={job.endDate}
                                onChange={(e) => handleExperienceChange(e, id, 'endDate')}
                            />

                            {job.additional.map((bullet, bID) => (
                                <div className="col-12 p-0 mb-3 row m-auto justify-content-between align-items-center" key={bID}>
                                    <textarea className="col-9"
                                        value={bullet} onChange={(e) => handleBulletChange(e, id, bID)}
                                    />
                                    <button className="col-2 btn btn-danger h-50" onClick={() => handleRemoveBullet(id, bID)}>X</button>
                                </div>
                            ))}


                            <button className="col-5 btn btn-secondary mb-3" type="button" onClick={() => handleAddBullet(id)}>Add Bullet</button>

                            <button className="col-5 btn btn-success mb-3" type="button" onClick={() => toggleEditExperience(id, false)}>Submit</button>
                            
                        </form>
                        ) : (
                        <div className="row col-12 justify-content-start m-auto p-0">
                            <p className="p-0 mb-1"><strong>{job.title}</strong> - {job.company}</p>
                            <button className="col-3 btn btn-secondary mb-3 me-3" onClick={() => toggleEditExperience(id, true)}>Edit</button>
                            <button className="col-3 btn btn-danger mb-3" onClick={() => handleRemoveExperience(id)}>X</button>
                        </div>
                        )}
                    </div>
                ))}

                <button className="col-12 btn btn-primary" onClick={handleAddExperience}>Add Experience</button>
            </div>

        </>
    )
}

export default Experience