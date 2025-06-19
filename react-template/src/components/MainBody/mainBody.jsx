import SideNav from "../Nav/sideNav";
import ResumeDisplay from "./resumeDisplay/resumeDisplay";

function MainBody () {
    return (
        <div className="row">
            <SideNav />
            <ResumeDisplay />
        </div>
    )
}

export default MainBody;