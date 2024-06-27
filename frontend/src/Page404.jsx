import React from 'react'
import { useNavigate } from 'react-router-dom';


const Page404 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>404 Error Page</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="" onClick={handleClick}>Login</a></li>
                                <li className="breadcrumb-item active">404 Error Page</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="error-page">
                    <h2 className="headline text-warning"> 404</h2>
                    <div className="error-content">
                        <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
                        <p>
                            We could not find the page you were looking for.
                            Meanwhile, you may <a href="" onClick={handleClick}>return to Login</a> or try using the search form.
                        </p>
                    </div>
                    {/* /.error-content */}
                </div>
                {/* /.error-page */}
            </section>
            {/* /.content */}

        </>
    )
}

export default Page404