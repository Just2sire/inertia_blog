import { useMemo ,lazy, Suspense } from 'react';
import PostHeader from './PostHeader';
import { Head, usePage } from '@inertiajs/react';
import formatDate from '../Utils/FormatDate';
const CommentForm = lazy(() => import('./CommentForm'));
const Sidebar = lazy(() => import('../Home/Sidebar'));
const Comments = lazy(() => import('./Comments'));


const Post = () => {

    const { success, post, user, comments } = usePage().props;

    const postData = useMemo(() => post, [post])

    return (
        <>
            <Head title={`Desi-Blog - ${postData.title}`} ></Head>
            <PostHeader title={postData.title} />
            <section className="container">
                <div className="page-container">
                    <div className="page-content">
                        <div className="card">
                            <div className="card-header pt-0">
                                <h3 className="card-title mb-4">{postData.title}</h3>
                                <div className="blog-media mb-4">
                                    <img src={`/externalAsset/postImages/${postData.img}`} alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">{postData.tag}</a>
                                </div>
                                <small className="small text-muted">
                                    <a href="#" className="text-muted">par {user.name}</a>
                                    <span className="px-2">·</span>
                                    <span>{formatDate(postData.created_at)}</span>
                                    <span className="px-2">·</span>
                                    <a href="#" className="text-muted">{comments.length} Commentaires</a>
                                </small>
                            </div>
                            <div className="card-body border-top">
                                <p className="my-3"></p>
                            </div>

                            <div className="card-footer">
                                <h6 className="mt-5 mb-3 text-center">
                                    <a href="#" className="text-dark">Commentaires {comments.length}</a>
                                    {/* <a href="#" className="text-dark">Commentaires</a> */}
                                </h6>
                                <hr />
                                <Suspense fallback={<div>Loading...</div>} >
                                    <Comments />
                                </Suspense>
                                <h6 className="mt-5 mb-3 text-center">
                                    <a href="#" className="text-dark">Réagir</a>
                                </h6>
                                <hr />
                                <Suspense fallback={<div>Loading...</div> } >
                                    <CommentForm postId={postData.id} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <Suspense fallback={<div>Loading...</div>} >
                        <Sidebar />
                    </Suspense>
                </div>
            </section>
        </>
    );
}

export default Post;