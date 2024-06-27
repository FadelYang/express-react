import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">
                    Fullstack Javascript Developer
                </h1>
                <p className="col-md-12 f-4">
                    Belajar Fullstack Javascript Developer dengan Express dan
                    React di satnrikoding.com
                </p>
                <hr />
                <Link to="/register" className="btn btn-primary btn-lg me-3">Register</Link>
                <Link to="/login" className="btn btn-secondary btn-lg">Login</Link>
            </div>
        </div>
    );
}
