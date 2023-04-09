import Button from 'components/Button';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Banner({ title, content, pic, erro }) {

    const back = useNavigate();

    if (erro) {
        return (
            <section className='banner-error'>
                <h1>{erro}</h1>
                <h2>{title}</h2>
                <p>{content}</p>
                <div className='banner-error__container'>
                    <div className='container__button'>
                        <div className='container__button-display' onClick={ () => back(-1)} >
                        <Button>Voltar</Button>
                        </div>
                    </div>
                    <div className='banner-error__image'>
                        <img src={pic.image} alt={pic.alt} />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='banner'>
            <div className='banner__left'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>

            <div className='banner__right'>
                <div className='banner__right-circle' />
                <div className='banner__right-image'>
                    <img src={pic.image} alt={pic.alt} />
                </div>
            </div>
        </section>
    )
}
