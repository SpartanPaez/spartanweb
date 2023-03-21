
import Sidebar from './Components/Sidebar/Sidebar';
import './Dashboard.css';
import MainDash from './Components/MainDash/MainDash';
import RightSide from './Components/RightSide/RightSide';

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="AppGlass">
               <Sidebar/>
               <MainDash/>
               <RightSide/>
            </div>
        </div>
    );
}

export default Dashboard;