import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import api from "../axios/axios";

function Cadastro() {
  const [user, setUser] = useState({
    cpf: "",
    name: "",
    data_nascimento: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cadastro();
  };

  async function cadastro() {
    await api.postCadastro(user).then(
      (response) => {
        alert(response.data.message);
      },
      (error) => {
        console.log(error);
        alert(error.response.data.error);
      }
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "rgb(154, 154, 154)",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Box
          component="form"
          sx={{
            mt: 1,
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            color="rgb(154, 154, 154)"
            value={user.name}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            margin="normal"
             color="rgb(153, 154, 154)"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            margin="normal"
             color="rgb(154, 154, 154)"
            value={user.cpf}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="data_nascimento"
            name="data_nascimento"
            margin="normal"
             color="rgb(154, 154, 154)"
            type="date"
            value={user.data_nascimento}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            type="password"
            margin="normal"
             color="rgb(154, 154, 154)"
            value={user.password}
            onChange={onChange}
          />
          <Button
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              background:"rgb(154, 154, 154)",
              display: "flex",
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;