import express from 'express';

const app = express();
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send("Olá Mundo!")
});

app.listen(8000,()=>{
    console.log("Meu servidor esta rodando na porta 8000")
});