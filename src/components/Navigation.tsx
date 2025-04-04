import "../assets/nav.css";

import { useNavigate } from "react-router-dom";

export default function Navigation() {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbar">
                <span className="navlink" onClick={() => navigate("/")}>Home</span>
                <span className="navlink" onClick={() => navigate("/people")}>People</span>
                <span className="navlink" onClick={() => navigate("/communities")}>Communities</span>
                <span className="navlink" onClick={() => navigate("/jobs")}>Jobs</span>                
                <span className="navlink" onClick={() => navigate("/messages")}>Messages</span>                
                <span className="navlink" onClick={() => navigate("/marketplace")}>Marketplace</span>                
                <span className="navlink" onClick={() => navigate("/invitations")}>Invitations</span>   
                <span className="navlink" onClick={() => navigate("/notes")}>Notes</span>               
            </div>
        </>
    )
}