import Head from "next/head"
import Topo from "../components/topo"
import Home from "../components/home"
import Intro from "../components/intro"
import Metas  from "../components/metas"

export default function Tudo(){
    return(
        <>
        <Head>
            <title>Bem Vindo!</title>
        </Head>
        <Topo />
        <Home titulo="Os Objetivos de Desenvolvimento Sustentável no Brasil" texto="Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil."/>
        
        <Intro titulo="Objetivo 11 " texto="Cidades e comunidades sustentáveis"/>
        <Metas />
        </>
    )
}