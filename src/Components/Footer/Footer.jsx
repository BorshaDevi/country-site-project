import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-cyan-200 text-base-content mt-5">
  <aside>
    <div className="flex gap-10">

  <a href="https://www.google.com" ><FcGoogle /></a>
  <a href="https://www.facebook.com">< FaFacebook/></a>
  <a href="https://www.twitter.com"><FaTwitter /></a>
    </div>
  
  
    <p>Time to Travel Ltd.<br/>Providing reliable tech since 1992</p>
    
 
    <p>Copyright © 2024 - All right reserved by Time to Travel Ltd.</p>

  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
    );
};

export default Footer;