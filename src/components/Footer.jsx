function Footer() {
    const year = new Date().getFullYear();
    return (
      <>
        <footer className="border border-slate-800 bg-slate-200 rounded-md dark:bg-slate-800 dark:border-slate-200 bottom-0 left-0 right-0 z-30">
          <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-800 sm:text-center dark:text-gray-200">
              © {year} Diaz Lucas™
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  