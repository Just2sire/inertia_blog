import { useState, lazy, Suspense } from 'react';
import BlogPrincipal from "./BlogPrincipa";
const Sidebar = lazy(() => import('../Home/Sidebar'));
const AllPost = lazy(() => import('./AllPost'));

const Posts = () => {
    
    return (
        <div className="page-container">
            <div className="page-content">
                <BlogPrincipal />
                <hr />
                <br />
                <br />
                <div className="row">
                <Suspense fallback={<div>Loading...</div>} >
                    <AllPost />
                </Suspense>
                </div>
                <button className="btn btn-primary btn-block my-4">Load More Posts</button>
            </div>
            <Suspense fallback={<div>Loading...</div>} >
                <Sidebar />
            </Suspense>
        </div>
    );
}

export default Posts;