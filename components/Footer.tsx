import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 py-6 pt-10 border-t border-neutral-300 dark:border-neutral-700">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Construction Bible – Built by BOL &
          ADEKS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
