import { lazy, Suspense, useEffect } from "react";
import Navbar from "@/Pages/Layouts/Navbar";
import SecondNav from "@/Pages/Layouts/SecondNavigation";
import Header from "@/Pages/Layouts/Header";
import { Head, usePage } from "@inertiajs/react";
import { toast } from "react-toastify";
const FeaturedPost = lazy(() => import("./FeaturedPost"));
const Posts = lazy(() => import("./Blogs"));
const Footer = lazy(() => import("@/Pages/Layouts/Footer"));

const Acceuil = () => {

    const { success } = usePage().props;

    useEffect(() => {
        toast.success(success)
    }, [success]);

    return (  
        <>
            <Head title="DesiBlog - Acceuil" ></Head>
            <Navbar />
            <SecondNav />
            <Header />
            <div className="container">
                <Suspense fallback={<div>Loading...</div>} >
                    <FeaturedPost />
                </Suspense>
                <hr />
                <Suspense fallback={<div>Loading...</div>} >
                    <Posts />
                </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>} >
                <Footer />
            </Suspense>
        </>
    );
}
 
export default Acceuil;