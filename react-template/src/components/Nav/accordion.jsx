import React from "react";
import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <div className="accordion mb-5" id="accordionInput">
        <AccordionItem
        title="Personal Information"
        collapseId="collapseOne"
        parentId="accordionInput"
        inputFieldNames={["First Name", "Last Name", "Email", "Phone Number", "Website", "LinkedIn"]}
        />
        <AccordionItem
        title="Education"
        collapseId="collapseTwo"
        parentId="accordionInput"
        inputFieldNames={["Institution Name", "City", "State", "Starting Date", "Graduation Date", "Degree"]}
        />
        <AccordionItem
        title="Work Experience"
        collapseId="collapseThree"
        parentId="accordionInput"
        inputFieldNames={["Company", "City", "State", "Starting Date", "End Date", "Main Point 1",  "Main Point 2", "Main Point 3"]}
        />
        <AccordionItem
        title="Skills"
        collapseId="collapseFour"
        parentId="accordionInput"
        inputFieldNames={["Technical Skills", "Soft Skills"]}
        />
    </div>
  );
}

export default Accordion;
