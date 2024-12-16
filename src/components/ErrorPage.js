import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
