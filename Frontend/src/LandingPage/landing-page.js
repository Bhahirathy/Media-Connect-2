import "./landing-page.css";
// import {useHistory, useRouteMatch, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
// import { Switch} from 'react-router-dom';
import Banner from "./routing-banner.webp";
const LandingPage = ()=> {
    return(
  <>
    <div className="container">
        <img src={Banner} alt="Banner"/>
    <div >
        <h1>
            Team 10x 04
        </h1>
        <Link to="post-view"><button>Enter</button></Link>
    </div>
    </div>
  </>
    )
}
export default LandingPage;