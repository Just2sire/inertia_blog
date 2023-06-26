import { useCallback, useMemo } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import formatDate from "../Utils/FormatDate";

const Tags = () => {

    const { tags } = usePage().props;

    const allTags = useMemo(() => tags, [tags]);

    return allTags.map((tag, id) => (
        <Link href="#" key={id} className="badge badge-primary m-1">{tag}</Link>
    ));
}

const Newsletter = () => {

    const { data, setData, errors, processing, post } = useForm({
        email: ''
    });

    const handleChange = useCallback((e) => {
        setData('email', e.target.value);
    })
    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        post(route('news.store'));
    })

    return (
        <form onSubmit={handleSubmit}>
            <div className="subscribe-wrapper">
                <input type="email" onChange={handleChange} className="form-control" placeholder="Adresse Mail" />
                <InputError message={errors.email} className="mt-2" />
                <button type="submit" className="btn btn-primary"><i className="ti-location-arrow"></i></button>
            </div>
        </form>
    )
}

const PopularPosts = () => {

    const { popularPosts } = usePage().props;

    const data = useMemo(() => popularPosts, [popularPosts]);

    return data.map((item, id) => (
        <div className="media text-left mb-4" key={id}>
            <Link href={`/post/${id}`} className="overlay-link"></Link>
            <img className="mr-3" src={`/externalAsset/postImages/${item.img}`} width="100px" alt="Generic placeholder image" />
            <div className="media-body">
                <h6 className="mt-0">{item.title}</h6>
                {/* <p className="mb-2"> {("deserunt quisqua...")}</p> */}
                <p className="mb-2"> {item.content.substring(0, 25) + '...'}</p>
                <p className="text-muted small"><i className="ti-calendar pr-1"></i>  {formatDate(item.created_at)}</p>
            </div>
        </div>
    ))
}

const Sidebar = () => {
    return (
        <div className="page-sidebar text-center">
            <h6 className="sidebar-title section-title mb-4 mt-3">À propos</h6>
            <img src="/assets/imgs/admin.jpg" alt="" className="circle-100 mb-3 m-auto" />
            {/* <img src="/assets/imgs/avatar.jpg" alt="" className="circle-100 mb-3" /> */}
            <div className="socials mb-3 mt-2">
                <a href="https://www.facebook.com/desire.kossi.792" target="_blank">
                    <i className="ti-facebook"></i>
                </a>
                <a href="#">
                    <i className="ti-twitter"></i>
                </a>
                <a href="#">
                    <i className="ti-pinterest-alt" ></i>
                </a>
                <a href="#">
                    <i className="ti-instagram"></i>
                </a>
                <a href="#">
                    <i className="ti-youtube"></i>
                </a>
            </div>
            <p>
                Je suis un jeune développeur passionné de développement web.J'adore beaucoup JavaScrip qui avec sa polyvalence et son potentiel
                infini, est devenu mon langage de prédilection pour donner vie à mes projets.
            </p>

            <h6 className="sidebar-title mt-5 mb-4">Newsletter</h6>
            <Newsletter />

            <h6 className="sidebar-title mt-5 mb-4">Tags</h6>
            <Tags />

            {/* <h6 className="sidebar-title mt-5 mb-4">Instagram</h6>
            <div className="row px-3">
                <div className="col-4 p-1 figure">
                    <a href="#" className="figure-img">
                        <img src="/assets/imgs/insta-1.jpg" alt="" />
                    </a>
                </div>
                <div className="col-4 p-1 figure">
                    <a href="#" className="figure-img">
                        <img src="/assets/imgs/insta-2.jpg" alt="" className="w-100 m-0" />
                    </a>
                </div>
                <div className="col-4 p-1 figure">
                    <a href="#" className="figure-img">
                        <img src="/assets/imgs/insta-3.jpg" alt="" className="w-100" />
                    </a>
                </div>
                <div className="col-4 p-1 figure">
                    <a href="#" className="figure-img">
                        <img src="/assets/imgs/insta-4.jpg" alt="" className="w-100 m-0" />
                    </a>
                </div>
                <div className="col-4 p-1 figure">
                    <a href="#" className="figure-img">
                        <img src="/assets/imgs/insta-5.jpg" alt="" className="w-100" />
                    </a>
                </div>
                <div className="col-4 p-1 figure">
                    <a href="#" className="figure-img">
                        <img src="/assets/imgs/insta-6.jpg" alt="" className="w-100 m-0" />
                    </a>
                </div>
            </div> */}

            <figure className="figure mt-5">
                <a href="single-post.html" className="figure-img">
                    <img src="/assets/imgs/img-4.jpg" alt="" className="w-100" />
                    <figcaption className="figcaption">Laboriosam</figcaption>
                </a>
            </figure>

            <h6 className="sidebar-title mt-5 mb-4">Posts Populaires</h6>
            <PopularPosts />
            <div className="ad-card d-flex text-center align-items-center justify-content-center">
                <span href="#" className="font-weight-bold">ADS</span>
            </div>
        </div>
    );
}

export default Sidebar;