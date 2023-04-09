import React from 'react'
import posts from 'data/posts.json'
import Card from 'components/Card';

export default function Recommended({post}) {

    const postsCopy = [...posts];
    const index = postsCopy.indexOf(post);
    postsCopy.splice(index, 1);
    const filteredPosts = postsCopy.filter( (post, f) => f < 4);

    const recommendedCards = filteredPosts.map(post => <Card key={post.id} post={post}/> );

    return (
        <section className='recommended'>
            <h2 className='recommended__title' >Outros posts que você pode gostar:</h2>
            <div className='recommended-cards'>
                {recommendedCards}
            </div>
        </section>
    );
}
