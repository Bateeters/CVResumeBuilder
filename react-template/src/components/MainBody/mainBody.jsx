import { useState } from "react";
import SideNav from "../Nav/sideNav";
import ResumeDisplay from "./resumeDisplay/resumeDisplay";

function MainBody () {
    const [formData, setFormData] = useState({
        firstName: "FirstName",
        lastName: "LastName"
        // Add more fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    return (
        <div className="row">
            <SideNav formData={formData} onChange={handleInputChange}/>
            <ResumeDisplay formData={formData}/>
        </div>
    )
}

export default MainBody;