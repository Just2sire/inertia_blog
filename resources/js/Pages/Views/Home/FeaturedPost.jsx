import { useMemo } from "react";
import { Link } from "@inertiajs/react";

const SingleFeaturePost = ({ item, id }) => (
    <Link href={`/post/${id}`} className="feature-post-item">
        <img src={item.imgSrc} className="w-100" alt="" />
        <div className="feature-post-caption">{item.caption}</div>
    </Link>
);

const FeaturedPost = () => {
    const data = useMemo(() => [
        {
            imgSrc: "assets/imgs/img-1.jpg",
            caption: "Incidunt Quaerat"
        },
        {
            imgSrc: "assets/imgs/img-2.jpg",
            caption: "Culpa Ducimus"
        },
        {
            imgSrc: "assets/imgs/img-3.jpg",
            caption: "Temporibus Simile"
        },
        {
            imgSrc: "assets/imgs/img-4.jpg",
            caption: "Adipisicing"
        }
    ]);

    return (
        <section>
            <div className="feature-posts">
                <a href="#" className="feature-post-item">
                    <span>Featured Posts</span>
                </a>
                {data.map((item, id) => (
                    <SingleFeaturePost key={id} id={id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedPost;
