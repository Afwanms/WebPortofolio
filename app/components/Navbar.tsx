export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        AMS<span>.</span>
      </div>

      <div className="navLinks">
        <a href="#home" className="active">
          HOME
        </a>
        <a href="#work">WORK</a>
        <a href="#contact">PROJECTS</a>
        <a href="#about">EXPERIENCES</a>
      </div>
    </nav>
  );
}