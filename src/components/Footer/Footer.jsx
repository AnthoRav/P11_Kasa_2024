import LogoFooter from "../../assets/logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer_logo"
        src={LogoFooter}
        alt="logo de Kasa du footer"
      />
      <p className="footer_copyright">© 2024 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;
