export default function Footer() {
  return (
    <div className="bg-black">
      <footer class="footer sm:footer-horizontal text-gray-300 p-10 grid grid-cols-2 lg:grid-cols-1 md:grid-cols-2">
        <nav className="col-span-2">
          <h6 class="footer-title">CS — Ticket System</h6>
          <p>
            "Empowering your business with a seamless support experience. Our
            Ticket System ensures every customer query is tracked, managed, and
            resolved with precision and speed."
          </p>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About Us</a>
          <a class="link link-hover">Our Mission</a>
          <a class="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Products & Services</a>
          <a class="link link-hover">Customer Stories</a>
          <a class="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 class="footer-title">Information</h6>
          <a class="link link-hover">Privacy Policy</a>
          <a class="link link-hover">Terms & Conditions</a>
          <a class="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 class="footer-title">Social Links</h6>
          <a class="link link-hover">
            <i class="fa-brands fa-square-x-twitter"></i>@CS — Ticket System
          </a>
          <a class="link link-hover">
            <i class="fa-brands fa-linkedin"></i>@CS — Ticket System
          </a>
          <a class="link link-hover">
            <i class="fa-brands fa-facebook"></i>@CS — Ticket System
          </a>
          <a class="link link-hover">
            <i class="fa-solid fa-envelope"></i>support@cst.com
          </a>
        </nav>
      </footer>
      <div className="text-white text-center border-t py-4">
        <p>© 2026 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
}
