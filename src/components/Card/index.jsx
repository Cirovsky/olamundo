import React from 'react';
import Button from 'components/Button';
import { Link, useHref } from 'react-router-dom';

export default function Card({ post }) {
    const capa = post.capa;
    let location = useHref();
    console.log(location)
    
    return (
        <div className='card'>
            <div className='card__container-image'>
                <img src= {capa} />
            </div>
            <div className='card__container-text'>
                <h2>{post.titulo}</h2>
            </div>
            <div className='card__container-button' >
            <Link to={location=`/posts/${post.id}`} ><Button>Ler</Button></Link>
            </div>
        </div>
    );
}