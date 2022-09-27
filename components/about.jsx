import { Col, Container, Row } from "react-bootstrap"
import estilos from "../styles/about.module.css"
import Image from "next/image"

export default function Download(){
    return(
        <>
            <div className={estilos.container_bg}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image src="/assets/image-about.png" alt="" className="img-fluid" width={500} height={500}></Image>
                    </Col>
                    <Col xs={12} md={6} className={estilos.details}>
                        <h2>Best Offten Town</h2>
                        <b>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</b>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <button className={'btn ' + estilos.botao}>Download App</button>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}