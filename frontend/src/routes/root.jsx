import { Outlet } from "react-router-dom";
import './root.css';
export default function Root() {
  return (
    <div className="root-back" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div >
        <h1>Health Tech Team Demo</h1>
        <nav>
          <ul>
            <li>
              <a href="/emergency">Emergency Form</a>
            </li>
            <li>
              <a href="/chatAI">ChatAI</a>
            </li>
            {/* <li>
              <a href="/aboutUs">AboutUs</a>
            </li> */}
          </ul>
        </nav>
        <Outlet /> {/* This will render the current child route */}
      </div>
    </div>
  );
}
