import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
} from 'react-icons/fa';
import logo from '../assets/rocket.png';
import { ReactTyped } from 'react-typed';

const Footer = () => {
  const email = 'janithchathurangakck@gmail.com';
  return (
    <div>
      <hr className="line-gradient mb-5" />
      <footer className="relative bg-white bg-opacity-15 text-white font-mono m-10 p-10 rounded-lg">
        <div className="flex justify-center">
          <img src={logo} alt="logoo" className="w-32 h-auto mb-5" />
        </div>
        <p className="text-2xl text-center">Developed by</p>
        <div className="flex justify-center">
          <ReactTyped
            className="text-center text-3xl font-mono"
            strings={['------']}
            typeSpeed={180}
            backSpeed={120}
            loop
          />
        </div>
        <p className="text-5xl text-center m-5">
          Janith Chathuranga Withanagamage
        </p>
        <p className="text-xl text-center m-1">
          <a href={`mailto:${email}`} className="text-white">
            {email}
          </a>
        </p>
        <p className="text-xl text-center m-1">+94 76 330 6101</p>
        <div className="flex justify-center space-x-4 mt-5">
          <a
            className="text-white hover:text-orange-400 transform hover:scale-150 
                            transition-all duration-150 ease-in-out"
            href="https://github.com/it21250156"
          >
            <FaGithub />
          </a>
          <a
            className="text-white hover:text-pink-700 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
            href="www.linkedin.com/in/janith-chathuranga"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="text-white hover:text-orange-400 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
            href="https://web.facebook.com/janith.chathuranga.7161953/"
          >
            <FaFacebook />
          </a>
          <a
            className="text-white hover:text-pink-500 transform hover:scale-150
                             transition-all duration-150 ease-in-out"
            href="https://www.instagram.com/janith_chathuranga_official/"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
