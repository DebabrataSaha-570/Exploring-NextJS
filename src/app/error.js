"use client";
const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div className="text-center">
      <h3 className="text-2xl text-red-500">Something went wrong!!</h3>
      <h4>{error.message}</h4>
      <button onClick={() => reset()} className="btn btn-error btn-sm">
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
