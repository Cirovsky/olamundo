import React from 'react';
import Card from 'components/Card';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Recommended from 'components/Recommended';

export default function MainContent({ posts, aboutme, article }) {
    if (posts) {
        const cards = posts.map(post => <Card key={post.id} post={post} />);
        return (
            <main className='main'>
                <div className='container__cards'>
                    {cards}
                </div>
            </main>
        );
    }
    if (aboutme) {
        const { titulo, texto, capa } = aboutme;
        const subtitulo = aboutme.subtitulo ? <h3>{aboutme.subtitulo}</h3> : <></>;

        return (
            <main className='main' style={{ marginBottom: 0 }}>
                <div className='main__title'><h2>{titulo}</h2></div>
                <div className='main__title-background'
                    style={{ backgroundImage: `url(${capa})` }}>
                </div>
                <div className='main__content'>
                    {subtitulo}
                    <div className='main__content-text'>
                        <div className='image-container'></div>
                        <ReactMarkdown>{texto}</ReactMarkdown>
                    </div>
                </div>
            </main>
        )
    }
    if (article) {
        const { titulo, texto, capa } = article;
        const subtitulo = article.subtitulo ? <h3>{article.subtitulo}</h3> : <></>;

        return (
            <main className='main'>
                <div className='main__title'><h2>{titulo}</h2></div>
                <div className='main__title-background'
                    style={{ backgroundImage: `url(${capa})` }}>
                </div>
                <div className='main__content'>
                    {subtitulo}
                    <div className='main__content-text post-markdown-container'>
                        <ReactMarkdown>{texto}</ReactMarkdown>
                    </div>
                </div>
                <Recommended post={article}/>
            </main>
        )
    }

}
