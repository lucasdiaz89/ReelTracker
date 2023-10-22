function NotFound() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white bg-white text-gray-800">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 dark:text-yellow-300 text-yellow-600 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01"
            />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <h1 className="text-2xl font-semibold mt-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-lg mt-2">
            We apologize for the inconvenience. <br />
            The issue has been reported and will be resolved shortly.
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
