import "./Navbar.css";

function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                <h2>Company Logo</h2>
            </div>
            <ul className="right-nav">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;