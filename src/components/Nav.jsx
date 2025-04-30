export default function Nav({ position }) {
    const links = [
      "Women's",
      "Men's",
      "On the Street",
      "The Catwalk",
      "AdWatch",
      "About",
      ...(position === "footer" ? ["Tips"] : [])
    ];
  
    return (
      <nav
        aria-label={`${position === "main" ? "Main" : "Footer"} Navigation`}
        role="navigation"
      >
        <ul className={`${position}-nav`}>
          {links.map((link, index) => (
            <li key={index}><a href="#">{link}</a></li>
          ))}
        </ul>
      </nav>
    );
  }
  