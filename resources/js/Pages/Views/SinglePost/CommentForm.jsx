import { useCallback, useEffect } from 'react';
import { router, useForm, usePage } from '@inertiajs/react';
import InputError from '@/Components/InputError';

const CommentForm = ({ postId }) => {

    const { auth } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        post_id: postId,
        user_id: auth.user?.id,
        commentaire: ''
    })

    const handleChange = useCallback((e) => {
        setData('commentaire', e.target.value);
    })

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        (auth.user) ? post(route('comments.store')) : router.get('register') ;
    })

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="form-row">
                    <div className="col-12 form-group">
                        <textarea name="commentaire" id="" cols="30" onChange={handleChange} rows="10" className="form-control" placeholder="Votre commentaire..." required></textarea>
                        <InputError message={errors.commentaire} className="mt-2" />
                    </div>
                    <div className="form-group col-12">
                        <button className="btn btn-primary btn-block" disabled={processing} >Poster</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CommentForm;