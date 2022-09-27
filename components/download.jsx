import { Col, Container, Row } from "react-bootstrap"
import estilos from "../styles/download.module.css"
import Image from "next/image"

export default function Download(){
    return(
        <>
            <div className={estilos.container_bg}>
            <Container className={estilos.container}>
                <h3>Get Food with FOODO</h3>
                <h3>Download the App</h3>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </Container>

            <Container className={estilos.imagens}>
                <Row>
                    <Col xs={12} md={6}>
                        <Image src="/assets/app-apple-btn.svg" alt="" className="img-fluid" width={244} height={76}></Image>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src="/assets/app-play-btn.svg" alt="" className="img-fluid" width={244} height={76}></Image>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}