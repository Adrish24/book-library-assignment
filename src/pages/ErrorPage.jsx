import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="alert alert-error text-4xl">404 - Page Not Found</h1>
          <p className="py-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="text-primary">
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
