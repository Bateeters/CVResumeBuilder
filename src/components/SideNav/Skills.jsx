import { useState } from "react";

function Skills({ skills, setSkills }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <div className="card m-1 p-3">
                <h3>Skills</h3>
                {isEditing && (
                    <form action="">
                        <textarea
                            placeholder="Technical (Hard) Skills"
                            value={skills.technicalSkills}
                            onChange={(e) => setSkills({...skills, technicalSkills: e.target.value})}
                            />
                            <textarea
                            placeholder="Soft Skills"
                            value={skills.softSkills}
                            onChange={(e) => setSkills({...skills, softSkills: e.target.value})}
                        />

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
                        <h5>Technical Skills</h5>
                        <p>{skills.technicalSkills}</p>
                        <h5>Soft Skills</h5>
                        <p>{skills.softSkills}</p>
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

export default Skills