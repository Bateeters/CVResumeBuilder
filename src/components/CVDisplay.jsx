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
            <h4>Job Title - Company</h4>
            <p>location</p>
            <p>date</p>
            <ul>
                <li>bullet 1</li>
                <li>bullet 2</li>
                <li>bullet 3</li>
            </ul>
            <hr />
            <h2>Education</h2>
            <h4>University Name - location</h4>
            <p>Grad Date</p>
            <ul>
                <li>Additional Information</li>
            </ul>
            <hr />
            <h2>Skills</h2>
            <h4>Technical Skills</h4>
            <ul>
                <li>list of skills, place them here</li>
            </ul>
            <h4>Soft Skills</h4>
            <ul>
                <li>list of soft skills, go here</li>
            </ul>
        </>
    )
}

export default CVDisplay