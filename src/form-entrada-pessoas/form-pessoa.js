import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent } from "@mui/material";
import "./form-pessoa.style.css";

const FormPessoa = () => {
    return (
        <>
        <div class="componentes-form">
            <Card class="color"  sx={{ minWidth: 275 }}>
                <CardContent>
                    <Box 
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}

                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="inNome" label="Nome" variant="outlined" />
                        <TextField id="inSobrenome" label="Sobrenome" variant="outlined" />
                        <TextField id="inIdade" label="Idade" variant="outlined" /> <br></br>
                        <Button variant="text">Salvar</Button>
                    </Box>
                </CardContent>
            </Card>
            </div>
        </>
    );
}

export default FormPessoa