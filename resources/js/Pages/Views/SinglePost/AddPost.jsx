import { router, useForm, Head } from "@inertiajs/react";
import { useCallback, useRef } from "react";
import SecondNav from "@/Pages/Layouts/SecondNavigation";
import Navbar from "@/Pages/Layouts/Navbar";
import InputError from "@/Components/InputError";

const AddPost = () => {

    const fileInput = useRef();
    const showZone = useRef();
    const imgToShow = useRef();

    const styles = {
        dropzone: {
            position: 'relative',
            border: '1px dashed gray',
            borderRadius: '5px',
        },
        inputFile: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer'
        }
    };

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        tag: '',
        img: null,
        content: ''
    });

    const showImage = useCallback(() => {
        const file = fileInput.current.files[0];

        // Create a new FileReader object
        const reader = new FileReader();

        // Set the image source to the selected file
        reader.onload = () => {
            imgToShow.current.src = reader.result;


            setData('img', file);
        };

        // Display the image
        imgToShow.current.classList.remove('d-none');

        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        post(route('posts.store'));
    });

    return (
        <>
            <Head title={'DesiBlog - Ajout Post'} />
            <Navbar />
            <SecondNav />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1">
                        <form onSubmit={handleSubmit} >
                            <div className="form-row">
                                <div className="col-sm-6 form-group">
                                    <input type="text" onChange={(e) => setData('title', e.target.value)} name="title" className="form-control" required placeholder="Titre" />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <input type="text" onChange={(e) => setData('tag', e.target.value)} name="tag" className="form-control" required placeholder="Tag" />
                                    <InputError message={errors.tag} className="mt-2" />
                                </div>
                                <div className="my-3 col-sm-12">
                                    <h5 className="text-uppercase text-center mt-0 mb-3 bg-light p-2">Image </h5>
                                    <div className="my-2 p-4 text-center" style={styles.dropzone}>
                                        <input type="file" accept="image/*" onChange={showImage} ref={fileInput} style={styles.inputFile} className="form-control" required placeholder="Image" />
                                        {/* <input type="file" ref={tofRef} accept="image/*" onChange={imageChange} style={tof} name="tof" id="tof" required /> */}
                                        <InputError message={errors.img} className="mt-2" />
                                        <div className="dz-message text-center needsclick p-3">
                                            {/* <i className="h1 text-center text-muted dripicons-cloud-upload"></i> */}
                                            <h3 className="text-center">Cliquer ici pour ajouter une photo</h3>
                                        </div>
                                    </div>
                                    <div className="dropzone-previews mt-3" height="300px" ref={showZone} id="file-previews">
                                        <img src="" ref={imgToShow} className="d-none col-lg img-fluid h-50 mb-2 img-thumbnail" alt="" />
                                    </div>
                                </div>
                                {/* <div style={dropzone} className="col-sm-12 form-group">
                                    <input type="file" style={inputFile} className="form-control" required placeholder="Image" />
                                </div> */}
                                <div className="col-12 form-group">
                                    <textarea onChange={(e) => setData('content', e.target.value)} name="content" id="" cols="30" rows="10" className="form-control" required placeholder="Votre commentaire..."></textarea>
                                    <InputError message={errors.content} className="mt-2" />
                                </div>
                                <div className="form-group col-12">
                                    <button type="submit" className="btn btn-primary btn-block" >Poster</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default AddPost;