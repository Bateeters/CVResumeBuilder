function CVDisplay({ general, experience, education, skills}){
    return(
        <>
            <h1>{general.firstName} {general.lastName}</h1>
            <h2>{general.jobTitle}</h2>
            <p>{general.email}</p>
            <p>{general.phone}</p>
            <p>{general.location}</p>
            {general.links.map((link) => (
                <p key={link.id}>{link.name}:&nbsp;
                    <a href={link.url} target="_blank">
                        {link.url}
                    </a>
                </p>
            ))}
            
            <hr />
            <h2>Summary</h2>
            <p>{general.summary}</p>
            <hr />
            <h2>Experience</h2>
            {experience.map((job) => (
                <div>
                    <h4>{job.title} - {job.company}</h4>
                    <p>{job.location}</p>
                    <p>{job.startDate} - {job.endDate}</p>
                    <ul>
                        {job.additional.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <hr />
            <h2>Education</h2>
            {education.map((school) => (
                <div>
                    <h4>{school.school} - {school.degree} in {school.specialization}</h4>
                    <p>{school.location}</p>
                    <p>{school.gradDate}</p>
                    <ul>
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
        </>
    )
}

export default CVDisplay