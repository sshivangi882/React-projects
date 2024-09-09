import mainLogo from "../assets/logo.png";

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src={mainLogo} alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
       
      </ul>
    </nav>
  );
}

export default Navigation;
