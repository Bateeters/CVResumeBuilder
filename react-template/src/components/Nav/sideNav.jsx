import Accordion from "./accordion";
import AccordionItem from "./accordionItem";
import TextInput from "./textInput";

function SideNav ({ formData, onChange }) {
    return (
        <div className="col-4 sideNav px-3 pt-3 overflow-scroll">
            <h2>Add Your Details</h2>
            <Accordion formData={formData} onChange={onChange}/>
        </div>
    )
}

export default SideNav;