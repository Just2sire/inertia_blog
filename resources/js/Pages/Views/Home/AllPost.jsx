import { useMemo } from 'react';
import { Link, usePage } from '@inertiajs/react';
import formatDate from '../Utils/FormatDate';

const AllPost = () => {
    
    const { posts } = usePage().props;
    
    const data = useMemo(() => posts, [posts]);

    return data.slice(1).map((post) => (
        <div className="col-lg-6" key={post.id}>
            <div className="card text-center mb-5">
                <div className="card-header p-0">
                    <div className="blog-media">
                        <img src={`/externalAsset/postImages/${post.img}`} alt="" className="w-100" />
                        <a href="#" className="badge badge-primary">{post.tag}</a>
                    </div>
                </div>
                <div className="card-body px-0">
                    <h5 className="card-title mb-2">{post.title}</h5>
                    <small className="small text-muted">{formatDate(post.created_at)}
                        <span className="px-2">-</span>
                        <a href="#" className="text-muted">{(post.comments).length} Commentaires</a>
                    </small>
                    <p className="my-2">{(post.content).substring(0, 75) + '...'}</p>
                </div>

                <div className="card-footer p-0 text-center">
                    <Link href={`post/${post.id}`} className="btn btn-outline-dark btn-sm">Voir plus</Link>
                </div>
            </div>
        </div>
    ));
}

export default AllPost;