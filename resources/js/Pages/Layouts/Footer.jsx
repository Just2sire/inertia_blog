const SocialMedia = () => {
    const data = [
        {
            icon: "ti-facebook pr-1",
            abonne: 123345
        },
        {
            icon: "ti-twitter pr-1",
            abonne: 321534
        },
        {
            icon: "ti-pinterest-alt pr-1",
            abonne: 543312
        },
        {
            icon: "ti-instagram pr-1",
            abonne: 123023
        },
        {
            icon: "ti-youtube pr-1",
            abonne: 231043
        }
    ]

    return data.map((media, id) => {
        return (
            <a href="#" key={id} className="font-weight-bold text-muted mr-4">
                <i className={media.icon}></i> {media.abonne}
            </a>
        );
    });
};

const InstaImg = () => {
    const instagramData = [
        {
            imageSrc: "/assets/imgs/insta-1.jpg",
            likes: 23,
            comments: 12
        },
        {
            imageSrc: "/assets/imgs/insta-2.jpg",
            likes: 23,
            comments: 12
        },
        {
            imageSrc: "/assets/imgs/insta-3.jpg",
            likes: 23,
            comments: 12
        },
        {
            imageSrc: "/assets/imgs/insta-4.jpg",
            likes: 23,
            comments: 12
        },
        {
            imageSrc: "/assets/imgs/insta-5.jpg",
            likes: 23,
            comments: 12
        },
        {
            imageSrc: "/assets/imgs/insta-6.jpg",
            likes: 23,
            comments: 12
        }
    ];

    return (
        <div className="instagram-wrapper mt-5">
            <div className="ig-id">
                <a href="#">Suivez @Just2sire Sur Instagram</a>
            </div>
            {
                instagramData.map((data, id) => (
                    <a href="#" className="insta-item" key={id}>
                        <img src={data.imageSrc} alt="" className="w-100" />
                        <div className="overlay">
                            <span>
                                <i className="ti-heart"></i> {data.likes}
                            </span>
                            <span>
                                <i className="ti-comment"></i> {data.comments}
                            </span>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

const Footer = () => {
    return (
        <>
            <InstaImg />
            <footer className="page-footer">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                            <img src="/assets/imgs/logo.svg" alt="" className="logo" />
                        </div>
                        <div className="col-md-9 text-center text-md-right">
                            <div className="socials">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                    <p className="border-top mb-0 mt-4 pt-3 small">&copy; <script>document.write(new Date().getFullYear())</script>, JoeBlog Created By <a href="#" className="text-muted font-weight-bold" target="_blank">Desiré.</a>  All rights reserved </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;