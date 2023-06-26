import { usePage } from '@inertiajs/react';
import Post from "./Post";
import { lazy, Suspense, useEffect } from 'react';
import { toast } from "react-toastify";
const Footer = lazy(() => import("@/Pages/Layouts/Footer"));

const SinglePost = () => {

    const { success } = usePage().props;

    useEffect(() => {
        toast.success(success);
    }, [success]);

    return (
        <>
            <Post />
            <Suspense fallback={<div>Loading...</div>} >
                <Footer />
            </Suspense>
        </>
    );
}

export default SinglePost;