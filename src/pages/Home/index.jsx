import React, { useState } from 'react'
import MainContent from 'components/MainContent';
import posts from 'data/posts.json';


export default function home() {

    return (
        <>
            <MainContent posts={posts}/>
        </>
    );
}