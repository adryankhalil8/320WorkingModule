import Nav from "./Nav";

export default function Footer() {
  return (
    <footer>
      <Nav
        links={[
          "Home",
          "Women's",
          "Men's",
          "On the Street",
          "The Catwalk",
          "AdWatch",
          "About",
          "Tips",
        ]}
        ariaLabel="Footer Navigation"
        navClass="footer-nav"
      />

      <p className="copyright">
        &copy; 2026 Nexoria, Inc
      </p>
    </footer>
  );
}
