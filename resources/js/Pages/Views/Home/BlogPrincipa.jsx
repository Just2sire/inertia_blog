import { Link, usePage } from "@inertiajs/react";
import { useState, lazy, Suspense, useCallback, useMemo } from "react";
import formatDate from "../Utils/FormatDate";
const CommentForm = lazy(() => import("../SinglePost/CommentForm"));

const BlogPrincipal = () => {

    const [toComment, setToComment] = useState(false);

    const { posts } = usePage().props;

    const post = useMemo(() => posts[0]);

    const toggleComment = useCallback(() => {
        setToComment(!toComment);
    })

    return (
        <>
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title">{post.title}</h5>
                    <small className="small text-muted">{formatDate(post.createdAt)}
                        <span className="px-2">-</span>
                        <a href="#" className="text-muted">{(post.comments).length} Commentaires</a>
                    </small>
                </div>
                <div className="card-body">
                    <div className="blog-media">
                        <img src={`/externalAsset/postImages/${post.img}`} alt="" className="w-100" />
                        <a href="#" className="badge badge-primary">{post.tag}</a>
                    </div>
                    <p className="my-3">{(post.content).substring(75)+'...' }</p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center flex-basis-0">
                    <button className="btn btn-primary circle-35 mr-4" onClick={toggleComment}><i className="ti-back-right"></i></button>
                    <Link href={`post/${post.id}`} className="btn btn-outline-dark btn-sm">Voir plus</Link>
                    <a href="#" className="text-dark small text-muted">par {post.user.name}</a>
                </div>
            </div>
            {
                toComment && <CommentForm postId={post.id} />
            }
        </>
    );
}

export default BlogPrincipal;