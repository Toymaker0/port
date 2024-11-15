import { motion,AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Nav from './Nav';

const Main = () => {
    const [isVisible, setVisible] = useState(true);

    return (
        <>
        <Nav/>
        
        <Row className='m-2 row-cols-5'>
            <motion.div
            style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "rgba(255,255,255,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
            }}
            onTap={() => setVisible(!isVisible)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 15,
                            backgroundColor: "#fff"
                        }}
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    />
                )}
            </AnimatePresence>
        </motion.div>
              
        </Row>
        </>
    )
}

export default Main