import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorBoundary () {
  const error = useRouteError();
  console.log(error);
  const hasError = error.status || error.message;
  return (
    <div id="error-page" className="max-w-md flex items-center justify-center mx-auto w-screen h-screen">
      <div className="bg-white px-6 py-4 rounded-md">
        <h1>Oops!</h1>
        {hasError ? (
          <p>
            {error.status && <i>{error.status}</i>}
            {error.message && <i className="ml-1"> {error.message}</i>}
          </p>
        ): <p>Sorry, an unexpected error has occurred.</p>}
      </div>
    </div>
  );
}

export default ErrorBoundary;
