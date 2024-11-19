import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NavArea from './NavArea';

const Main = () => {
    const [isVisible, setVisible] = useState(true);
    return (
        <>
            <NavArea />
            <Container>
                <div>
                
                </div>
                
            </Container>
        </>
    )
}

export default Main