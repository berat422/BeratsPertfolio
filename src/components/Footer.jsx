import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center p-6 bg-black footer">
      <span className="text-white">&copy; {currentYear} Copyright - </span>
      <a
        className="link-underline text-white font-bold"
        href="https://github.com/berat422"
      >
        Berat Latifi
      </a>
    </div>
  );
}

export default Footer;
