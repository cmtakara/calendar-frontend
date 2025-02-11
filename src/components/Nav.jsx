import { Link } from 'react-router';
import { logOut } from '../utilities/users-services' ;

function Nav () {
    function handleLogOut() {
        // delegate this functionality to users-services
        logOut();
        // Update sate wil also cause a rerender
        setUser(null);
    }

    return (
        <nav>
            <div className='navContainer'>
                <Link to='/'>Home</Link>
                &nbsp; | &nbsp;
                <Link to='/calendar'>Calendar</Link>
                &nbsp; | &nbsp;
                <Link to='/todos'>To Do List</Link>
                &nbsp; | &nbsp;
                <Link to='/braindump'>BuJo Brain Dump</Link>
            </div>
            <div>
                <Link to='' onClick={handleLogOut}>Sign Out</Link>
            </div>
        </nav>
    )
}

export default Nav