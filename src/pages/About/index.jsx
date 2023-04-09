import React from 'react'
import MainContent from 'components/MainContent';
import sobremimCapa from 'assets/sobre_mim_capa.png';

const aboutmeTitle = 'Sobre mim'

const aboutmeSubtitle = 'Muito prazer, me chamo Ciro Monteiro!'

const aboutmeContent = `
Oi, tudo bem? Eu sou Ciro Monteiro, estudante de Front-end na Alura.
Tenho formação na área jurídica, e hoje atuo no acompanhamento técnico
de atendimento de pessoas atingidas pelo o desastre causado pelo Rompimento
da Barragem do corrégo do feijão em Brumadinho. Atualmente, estou buscando
fazer minha transição de carreira para área de desenvolvimento de sistemas, a qual me 
apaixonei, me tornando um estudioso voraz de lógica de programação, front-end, 
Orientação objetos. Tenho um grande desejo departicipar de projetos reais em que
os meus conhecimentos possam ser aplicados, contribuindo assim para o aperfeiçoamento
de sistemas para internet dos quais eu participar enquanto em desenvolvedor.
Neste momento, busco construir meus próprios projetos, para assim atingir maturidade atuar
como desenvolvedor de forma profissional. 

Desde já, agradeço a atenção a mim dispendida enquanto candidato para sua vaga, e pretendo,
dentro em breve, me tornar um colega da área de desenvolvimento, seja como parte do seu time, 
como parte da concorrência, rs. Até mais!!!
    `
const aboutme = {
    titulo: aboutmeTitle, 
    subtitulo: aboutmeSubtitle, 
    texto: aboutmeContent, 
    capa:sobremimCapa}

export default function About() {
    return (
            <MainContent 
                aboutme={aboutme}/>
    )
}
