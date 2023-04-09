import React from 'react'
import Banner from 'components/Banner';
import MainContent from 'components/MainContent';
import avatar from 'assets/erro_404.png';

const erro = {};

erro.titleErro= '404'

erro.bannerTitle = 'Ops! Página não encontrada.'

erro.bannerContent = `Tem certeza de que era isso que você estava procurando?
    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.`

erro.pic = {image: avatar, alt: 'cachorro fofinho indicando erro'}


export default function PageNotFound() {

    return (
        <div>
            <Banner 
            erro={erro.titleErro} 
            title={erro.bannerTitle} 
            content={erro.bannerContent}
            pic = {erro.pic}
            />
            <MainContent/>
        </div>
    )
}
