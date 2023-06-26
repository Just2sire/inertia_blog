import React from 'react';
import { usePage, Link } from '@inertiajs/react';

const SecondNav = () => {

    const { user } = usePage().props.auth;
    // console.log(user);

    return (
        <nav style={{ backgroundColor: '#c2f6ea', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                    {/* <img src="/logo.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} /> */}
                    <h1 style={{ color: '#343a40', fontSize: '18px' }}>DesiBlog</h1>
                </div>
                <div style={{ margin: 'auto' }} >
                    <ul
                        style={{
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <li style={{ marginLeft: '10px' }}>
                            <Link href={'/'} style={{ color: '#343a40', textDecoration: 'none' }}>
                                Acceuil
                            </Link>
                        </li>
                         
                        <li style={{ marginLeft: '10px' }}>
                            <Link href={route('posts.create')} style={{ color: '#343a40', textDecoration: 'none' }}>
                                Ajouter un post
                            </Link>
                        </li>
                        {/*<li style={{ marginLeft: '10px' }}>
                            <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}>
                                Services
                            </a>
                        </li>
                        <li style={{ marginLeft: '10px' }}>
                            <a href="#" style={{ color: '#343a40', textDecoration: 'none' }}>
                                Contact
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div>
                    { (!!user) ? 
                        (<Link href={route('logout')} 
                        style={{
                            backgroundColor: '#343a40',
                            color: '#c2f6ea',
                            padding: '8px 12px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }} method="post" as="button">
                        Déconnexion
                        </Link>)
                        :
                        (<Link
                            href={route('login')}
                            style={{
                                backgroundColor: '#343a40',
                                color: '#c2f6ea',
                                padding: '8px 12px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}

                            as='button'
                            >
                                Connexion
                        </Link>)
                    }
                </div>
            </div>
        </nav>
    );
};

export default SecondNav;
