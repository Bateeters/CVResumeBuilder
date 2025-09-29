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
            <div className="card mx-1 my-3 p-3">
                <h3>Education</h3>
                {education.map((edu, id) => (
                    <div key={id}>
                        {edu.isEditing ? (
                        <>
                            <input type="text" placeholder="School"
                                value={edu.school}
                                onChange={(e) => handleEducationChange(e, id, 'school')}
                            />
                            <input type="text" placeholder="Location" 
                                value={edu.location}
                                onChange={(e) => handleEducationChange(e, id, 'location')}
                            />
                            <input type="text" placeholder="Degree" 
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(e, id, 'degree')}
                            />
                            <input type="text" placeholder="Specialization" 
                                value={edu.specialization}
                                onChange={(e) => handleEducationChange(e, id, 'specialization')}
                            />
                            <input type="text" placeholder="Graduation Date" 
                                value={edu.gradDate}
                                onChange={(e) => handleEducationChange(e, id, 'gradDate')}
                            />
                            <div>
                                {edu.additional.map((bullet, bID) => (
                                    <div key={bID}>
                                        <textarea
                                            value={bullet} onChange={(e) => handleBulletChange(e, id, bID)}
                                        />
                                        <button onClick={() => handleRemoveBullet(id, bID)}>X</button>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => handleAddBullet(id)}>Add Bullet</button>

                            <button onClick={() => toggleEditEducation(id, false)}>Submit</button>
                            
                        </>
                        ) : (
                        <>
                            <p>{edu.school} - {edu.degree} in {edu.specialization}</p>
                            <button onClick={() => toggleEditEducation(id, true)}>Edit</button>
                            <button onClick={() => handleRemoveEducation(id)}>X</button>
                        </>
                        )}
                    </div>
                ))}

                <button onClick={handleAddEducation}>Add Education</button>
            </div>

        </>
    )
}

export default Education