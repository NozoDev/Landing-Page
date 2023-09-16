import React from "react";

const Footer = () => {
  return (
    <div className="bg-DarkBlue  h-[450px]">
      <div className="flex bg-white animate-pulse items-center px-2 mt-10  justify-center ">
        <img className="" src="/images/logo.svg"></img>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <div className="hover:animate-pulse cursor-pointer">
          <a href="www.facebook.com" target="_blank">
            <img className="w-8" src="/images/icon-facebook.svg" alt="facebook.com" />
          </a>
        </div>
        <div>
          <a href="www.youtube.com" target="_blank">
            <img className="w-8" src="/images/icon-youtube.svg" alt="youtube" />
          </a>
        </div>
        <div>
         <a href="www.twitter.com" target="_blank"> <img className="w-8" src="/images/icon-twitter.svg" alt="twitter" /></a>
        </div>
        <div>
          <a href="www.pinterest.com" target="_blank"><img className="w-8" src="/images/icon-pinterest.svg" alt="pinterest" /></a>
        </div>
        <div>
         <a href="www.instagram.com" target="_blank"> <img className="w-8" src="/images/icon-instagram.svg" alt="instagram" /></a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <a className="hover:text-2xl font-bold" href="/">About Us</a>
        <a className="hover:text-2xl font-bold" href="#">Contact</a>
        <a  className="hover:text-2xl font-bold"href="#">Blog</a>
        <a  className="hover:text-2xl font-bold"href="#">Careers</a>
        <a  className="hover:text-2xl font-bold"href="#">Support</a>
        <a className="hover:text-2xl font-bold" href="#">Privacy Policy</a>

        <button
          type="submit"
          className="bg-gradient-to-r  from-LimeGreen to-BrightCyan h-12 w-36 rounded-2xl text-white font-semibold "
        >
          Request Invite
        </button>

        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
