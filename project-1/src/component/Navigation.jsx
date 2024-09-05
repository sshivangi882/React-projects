import logo from '../assets/Nike-Logo.png';

const Navigation = () => {
    return (
        <div>
        <nav className='container'>
            <div className="logo">
                 <img src={logo} alt="brand logo" style={{'height':"50px"}} />
            </div>
            <ul>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button>Login</button>
        </nav>
    </div>
    )
}
export default Navigation;