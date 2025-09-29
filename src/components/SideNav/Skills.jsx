import { useState } from "react";

function Skills({ skills, setSkills }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            <div className="card mx-1 mb-5 p-3 shadow-sm row justify-content-center">
                <h3 className="p-0">Skills</h3>
                <hr />
                {isEditing && (
                    <form action="" className="row col-12 justify-content-between m-auto p-0">
                        <textarea
                            className="col-12 mb-3"
                            placeholder="Technical (Hard) Skills"
                            value={skills.technicalSkills}
                            onChange={(e) => setSkills({...skills, technicalSkills: e.target.value})}
                            />
                        <textarea
                            className="col-12 mb-3"
                            placeholder="Soft Skills"
                            value={skills.softSkills}
                            onChange={(e) => setSkills({...skills, softSkills: e.target.value})}
                        />

                        <button
                            className="col-12 btn btn-success"
                            type="button"
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
                        <h5 className="mb-0">Technical Skills:</h5>
                        <p>{skills.technicalSkills}</p>
                        <h5 className="mb-0">Soft Skills:</h5>
                        <p>{skills.softSkills}</p>
                        <button
                            type="button"
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

export default Skills