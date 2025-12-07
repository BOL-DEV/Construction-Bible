import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-50 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 py-6 pt-10 border-t border-neutral-300 dark:border-neutral-700">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Construction Bible – Built by
          <a
            href="https://bol-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-block text-amber-600 dark:text-amber-400 hover:underline hover:text-amber-700 dark:hover:text-amber-300 transition-colors font-medium"
            aria-label="Open BOL portfolio in a new tab"
          >
            BOL
          </a>
          & ADEKS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
