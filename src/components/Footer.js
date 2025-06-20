import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on social media</p>
      <div>
        <a href="www.facebook.com">
          <FaFacebook className="social-icons"/>
        </a>
        
        <a href="https://www.instagram.com/nckliks?igsh=MXQ1cmxkbzdwaDA3aQ==">
          <FaInstagram className="social-icons"/>
        </a>
        <a
        href="https://wa.me/+4542217478"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-600 text-2xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="social-icons" />
      </a>
      </div>
      <p>&copy; {new Date().getFullYear()} NC-Kliks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
