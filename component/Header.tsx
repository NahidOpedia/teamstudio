import React from "react";

function Header() {
  return (
    <header className="default-header">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img
              src="data:image/webp;base64,UklGRoQCAABXRUJQVlA4THcCAAAvnkAHEPegoG0bydJwjD+P4dr9B8IwG0n9LtLCrD/AAZyCtm0Yq/wZd0dx20jKwjGn2/te46eErH/FB1DwwxFQYIgYAADQh2oFho2LghyRc3mgbdtWFduZjr1U1HM0IkRSIfn///QGlfge0f8J0P30D09/dLuZ9fIp71WamZdLea/SzLxcynuVZublUt6rNDMvl/JeZ+blUt7rTLxFO/SF/t7rTPz/TIDds2HoZcBU5LPXmfiSdvPe+827GsPgTgLPHCAH+BKfvc7EtzgugxVzwKGnTJQBY4HPXmfi+/DFeoiHEWj18ERqTc8/e52Jr4pmfQRM0rCF4N2h9X7VGKYRwG/9CLB6k7o1hG1pbyzet4dhC8G7k89eZ+LLJHUnHefRJAcEIB7AxQOYVs7HqwiD1HEeTfrsdSb+K8Z1OAMi5wMXE9fujpNxHfTZ6/zm68y6eFiAresjMFyErZsgdr11HmLXG8DYLkC8twBb10dg+Ovhv0/+4OGf+8Nc4tIrQpAkwJ+skuQgStIKUXJAL2kC2lsRgiQBXg9/HsxWJ6dywQS4wwrxRCVGiJJkgLsFuMMKscrc/FTJSUW2LXgn2dVyEYsspexqqTQ3qpKTikRdRlgPAbZyDjBJPdDdUYT1EGCrMDeqkpMqeWCUFmB6QHejBYKpA7BbHhilBZjKzY2q5KRaHTftTsfRXWgDiACLbnXctGJzoyo5qZrGq153FB7Y4bjpnsarXqXmRlVy0heoDwff6p6t96TlEEc9UR8OvlWpuVGVnPSlZqYvNDMVNTOVPJsbVclJ730yN6qSk17uV6MqOenlJt0tkZNeblKdnPRyk+rkpNcFAA=="
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white lnr lnr-menu"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfiolio</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>

              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="generic.html">
                    Generic
                  </a>
                  <a className="dropdown-item" href="elements.html">
                    Elements
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
