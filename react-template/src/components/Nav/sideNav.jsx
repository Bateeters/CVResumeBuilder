import Accordion from "./accordion";
import AccordionItem from "./accordionItem";
import TextInput from "./textInput";

function SideNav () {
    return (
        <div className="col-4 sideNav px-3 pt-3 overflow-scroll">
            <h2>Add Your Details</h2>
            <Accordion />
        </div>
    )
}

export default SideNav;