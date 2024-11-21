import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NavArea from './NavArea';
import { MotionValue, motion, useScroll } from 'framer-motion';
import Content from './Content';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';

const Main = () => {
    const [isVisible, setVisible] = useState(true);
    const { scrollYProgress } = useScroll();
    const darkTheme = createTheme({
        palette: {
          mode: 'light',
        },
      });
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <NavArea />
            </ThemeProvider>
           
        </>
    )
}

export default Main