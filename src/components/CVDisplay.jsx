function CVDisplay({ general, experience, education, skills}){
    return(
        <div className="resumeDisplay pt-4 pb-5 px-5 shadow mx-2">
            <div className="row justify-content-between align-items-end mt-4 mb-2">
                <h1 className="col-auto">{general.firstName} {general.lastName}</h1>
                <h2 className="col-auto">{general.jobTitle}</h2>
            </div>
            <div className="row justify-content-between">
                <p className="col-auto mb-0">{general.email}</p>
                <p className="col-auto mb-0">{general.phone}</p>
                <p className="col-auto mb-0">{general.location}</p>
            </div>
            <hr />
            <div className="row">
                {general.links.map((link) => (
                    <p className="col-auto mb-0" key={link.id}>{link.name}:&nbsp;
                        <a href={link.url} target="_blank">
                            {link.url}
                        </a>
                    </p>
                ))}
            </div>

            
            <hr />
            <h2>Summary</h2>
            <p>{general.summary}</p>
            <hr />

            <h2>Experience</h2>
            {experience.map((job) => (
                <div className="row col-12 justify-content-end">
                    <h4 className="mt-3">{job.title} - {job.company}</h4>
                    <div className="row col-12 justify-content-between p-0">
                        <p className="col-auto p-0">{job.startDate} - {job.endDate}</p>
                        <p className="col-auto p-0">{job.location}</p>
                    </div>
                    <ul className="col-11">
                        {job.additional.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <hr />
            <h2>Education</h2>
            {education.map((school) => (
                <div className="row col-12 justify-content-end">
                    <h4 className="mt-3">{school.school} - {school.degree} in {school.specialization}</h4>
                    <div className="row col-12 justify-content-between p-0">
                        <p className="col-auto p-0">{school.gradDate}</p>
                        <p className="col-auto p-0">{school.location}</p>
                    </div>
                    
                    <ul className="col-11">
                        {school.additional.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <hr />
            <h2>Skills</h2>
            <h4>Technical Skills</h4>
            <ul>
                <li>{skills.technicalSkills}</li>
            </ul>
            <h4>Soft Skills</h4>
            <ul>
                <li>{skills.softSkills}</li>
            </ul>
        </div>
    )
}

export default CVDisplay