import { useMemo } from "react";
import { usePage } from "@inertiajs/react";

const Comments = () => {

    const { comments, tags } = usePage().props;

    const CommentData = useMemo(() => comments, [comments]);
    
    return (
        <>
            {
                CommentData.map(({ id, commentaire, user }) => {
                    return (
                        <div className="media mt-5" key={id}>
                            <img src={`/externalAsset/userAvatar/${user.image}`} className="mr-3 thumb-sm rounded-circle" alt="..." />
                            <div className="media-body">
                                <h6 className="mt-0">{user.name}</h6>
                                <p>{commentaire}</p>
                                {/* <a href="#" className="text-dark small font-weight-bold"><i className="ti-back-right"></i> Replay</a> */}
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Comments;


{/* <div className="media">
    <img src="/assets/imgs/avatar-1.jpg" className="mr-3 thumb-sm rounded-circle" alt="..." />
    <div className="media-body">
        <h6 className="mt-0">Janice Wilder</h6>
        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
        <a href="#" className="text-dark small font-weight-bold"><i className="ti-back-right"></i> Replay</a>
        <div className="media mt-5">
            <a className="mr-3" href="#">
                <img src="/assets/imgs/avatar.jpg" className="thumb-sm rounded-circle" alt="..." />
            </a>
            <div className="media-body align-items-center">
                <h6 className="mt-0">Joe Mitchell</h6>
                <p>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus</p>
                <a href="#" className="text-dark small font-weight-bold"><i className="ti-back-right"></i> Replay</a>

            </div>
        </div>
    </div>
</div> */}