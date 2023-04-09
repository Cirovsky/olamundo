import React from 'react'
import MainContent from 'components/MainContent';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'data/posts.json';
import PageNotFound from 'pages/PageNotFound';
import DefaultPage from 'components/DefaultPage';


export default function Article() {
    
    const parametros = useParams();
    console.log(parametros.id)

    const post = posts.find(post =>{
        return post.id === Number(parametros.id);
    });

    if(!post){
        return (
            <PageNotFound/>
        )
    }
    return (
            <Routes>
                <Route path='*' element={<DefaultPage/>}>
                    <Route index element={<MainContent article={post}/>}/>
                </Route>
            </Routes>
    )
}
