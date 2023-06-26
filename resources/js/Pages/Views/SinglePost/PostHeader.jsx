import { Link } from "@inertiajs/react";

const PostHeader = ({title}) => {
    return (  
        <header className="page-header page-header-mini">
                <h1 className="title">{title}</h1>
                <ol className="breadcrumb pb-0">
                    <li className="breadcrumb-item"><Link href="/">Acceuil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
        </header>
    );
}
 
export default PostHeader;