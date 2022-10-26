import React, { useContext } from 'react';
import { ChartContext } from './context';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

export default function MenuBar() {
    const { handleNewFile, handleLoadFile, handleSaveFile, handleSaveAsFile } = useContext(ChartContext);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: 'flex', mr: 1 }} />

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 4,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CHART EDITOR
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                       <Button
                           key="0"
                           onClick={handleNewFile}
                           sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
                       >
                           New
                       </Button>
                        <Button
                            key="1"
                            onClick={handleLoadFile}
                            sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
                        >
                            Load
                        </Button>
                        <Button
                            key="2"
                            onClick={handleSaveFile}
                            sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
                        >
                            Save
                        </Button>
                        <Button
                            key="3"
                            onClick={handleSaveAsFile}
                            sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}
                        >
                            Save As
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
