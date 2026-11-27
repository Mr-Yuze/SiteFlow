import { Link } from "react-router-dom";

function Workerlayout() {
    return ( 
        <div className="wmain">
            <h1>Welcome to the Worker Interface</h1>
            <nav>
                <Link to="workerdashboard">Dashboard</Link>
            </nav>
        </div>
     );
}

export default Workerlayout;
