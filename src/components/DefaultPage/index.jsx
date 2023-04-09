import React from 'react'
import Banner from 'components/Banner'
import avatar from '../../assets/kermit.jpg'

import 'styles/styles.css'
import { Outlet } from 'react-router-dom';

const bannerTitle = "Olá, mundo";
const bannerContent =   `Boas vindas ao meu espaço pessoal! 
        Eu sou Ciro Monteiro, estudante de Front-end da Alura. 
        Aqui compartilho vários conhecimentos, 
        espero que aprenda algo novo :)`;

const pic = {image: avatar, alt: 'foto de Ciro Monteiro'}

export default function DefaultPage() {

    return (
        <>
            <Banner title={bannerTitle} content={bannerContent} pic={pic}/>
            <Outlet/>
        </>
    );
}

export{
    bannerTitle,
    bannerContent,
    pic,
}
