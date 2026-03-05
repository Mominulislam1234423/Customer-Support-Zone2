export default function Navber() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabindex="-1"
              className="menu menu-sm border-2 space-y-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
              <a href="#">
                <li>Changelog</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Download</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>

        <div className="navbar-end space-x-10">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>FAQ</li>
              </a>
              <a href="#">
                <li>Changelog</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Download</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <a className="border-2 py-2 px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
}
