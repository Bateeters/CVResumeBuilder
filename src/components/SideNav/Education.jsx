function Education({ education, setEducation }) {

    const handleEducationChange = (e, index, field) => {
        const updated = [...education];
        updated[index][field] = e.target.value;
        setEducation(updated);
    };

    const handleAddBullet = (index) => {
        const updated = [...education];
        updated[index] = {
            ...updated[index],
            additional: [...updated[index].additional, ""]
        };
        setEducation(updated);
    };


    const handleBulletChange = (e, eduIndex, bulletIndex) => {
        const updated = [...education];
        updated[eduIndex].additional[bulletIndex] = e.target.value;
        setEducation(updated);
    };

    const handleRemoveBullet = (eduIndex, bulletIndex) => {
        const updated = [...education];
        updated[eduIndex] = {
            ...updated[eduIndex],
            additional: updated[eduIndex].additional.filter((_, i) => i !== bulletIndex)
        };
        setEducation(updated);
    };


    const handleRemoveEducation = (i) => {
        const updatedEducation = [...education];
        updatedEducation.splice(i, 1); 
        setEducation(updatedEducation);
    }

    const handleAddEducation = () => {
        setEducation([...education, {
            school: "",
            location: "",
            degree: "",
            specialization: "",
            gradDate: "",
            additional: [],
            isEditing: false
        }]);
    }

    const toggleEditEducation = (id, value) => {
        const updated = [...education];
        updated[id].isEditing = value;
        setEducation(updated);
    }

    return(
        <>
            <div className="card mx-1 mb-3 p-3 shadow-sm row justify-content-center">
                <h3 className="p-0">Education</h3>
                <hr />
                {education.map((edu, id) => (
                    <div className="p-0" key={id}>
                        {edu.isEditing ? (
                        <form  action="" className="row col-12 justify-content-between m-auto p-0">
                            <input type="text" placeholder="School" className="col-12 mb-3"
                                value={edu.school}
                                onChange={(e) => handleEducationChange(e, id, 'school')}
                            />
                            <input type="text" placeholder="Location" className="col-12 mb-3"
                                value={edu.location}
                                onChange={(e) => handleEducationChange(e, id, 'location')}
                            />
                            <input type="text" placeholder="Degree" className="col-5 mb-3" 
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(e, id, 'degree')}
                            />
                            <input type="text" placeholder="Specialization" className="col-5 mb-3"
                                value={edu.specialization}
                                onChange={(e) => handleEducationChange(e, id, 'specialization')}
                            />
                            <input type="text" placeholder="Graduation Date" className="col-12 mb-3"
                                value={edu.gradDate}
                                onChange={(e) => handleEducationChange(e, id, 'gradDate')}
                            />
                            {edu.additional.map((bullet, bID) => (
                                <div className="col-12 p-0 mb-3 row m-auto justify-content-between align-items-center" key={bID}>
                                    <textarea className="col-9"
                                        value={bullet} onChange={(e) => handleBulletChange(e, id, bID)}
                                    />
                                    <button className="col-2 btn btn-danger h-50" onClick={() => handleRemoveBullet(id, bID)}>X</button>
                                </div>
                            ))}

                            <button type="button" className="col-5 btn btn-secondary mb-3" onClick={() => handleAddBullet(id)}>Add Bullet</button>

                            <button type="button" className="col-5 btn btn-success mb-3" onClick={() => toggleEditEducation(id, false)}>Submit</button>
                            
                        </form>
                        ) : (
                        <div className="row col-12 justify-content-start m-auto p-0">
                            <p className="p-0 mb-1"><strong>{edu.school}</strong> - {edu.degree} in {edu.specialization}</p>
                            <button className="col-3 btn btn-secondary mb-3 me-3" onClick={() => toggleEditEducation(id, true)}>Edit</button>
                            <button className="col-3 btn btn-danger mb-3" onClick={() => handleRemoveEducation(id)}>X</button>
                        </div>
                        )}
                    </div>
                ))}

                <button className="col-12 btn btn-primary" onClick={handleAddEducation}>Add Education</button>
            </div>

        </>
    )
}

export default Education