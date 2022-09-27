import { Col, Container, Row } from "react-bootstrap"
import estilos from "../styles/service.module.css"
import Image from "next/image"

export default function Service() {
    return (
        <>
            <div className={estilos.container_bg}></div>
            <Container className={estilos.container}>
                <Row>
                    <Col xs={12} md={4} className={estilos.centro}>
                        <Image src="/assets/image-one.png" alt="" className="img-fluid" width={200} height={200}></Image>
                        <h2>Best Offter in Town</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </Col>
                    <Col xs={12} md={4} className={estilos.centro}>
                        <Image src="/assets/image-two.png" alt="" className="img-fluid" width={200} height={200}></Image>
                        <h2>Fast Delivery</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </Col>
                    <Col xs={12} md={4} className={estilos.centro}>
                        <Image src="/assets/image-three.png" alt="" className="img-fluid" width={200} height={200}></Image>
                        <h2>Quality Food</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}