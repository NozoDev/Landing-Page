import React from "react";

const Footer = () => {
  return (
    <div className="bg-DarkBlue">
      <div className="flex items-center px-2 mt-10  justify-center ">
        <img className="" src="/images/logo.svg"></img>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        <div>
          <img src="/images/icon-facebook.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-youtube.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-twitter.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-pinterest.svg" alt="" />
        </div>
        <div>
          <img src="/images/icon-instagram.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <a href="">About Us</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
        <a href="">Support</a>
        <a href="">Privacy Policy</a>

        <button
          type="submit"
          className="bg-gradient-to-r  from-LimeGreen to-BrightCyan h-12 w-36 rounded-2xl text-white font-semibold "
        >
          Request Invite
        </button>

        <p>$copy Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
