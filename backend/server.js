const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'app_manage_event',
        user:'root',
        password:'admin'
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})

// obtener todo las reservas
app.get('/reservas', (req, res) => {
  const query = `SELECT * FROM reservas;`
  conexion.query(query, (error, resultado) => {
      if(error) return console.error(error.message)

      if(resultado.length > 0) {
          res.json(resultado)
      } else {
          res.json(`No hay registros`)
      }
  })
})

app.post('/reserva/agregar', (req, res) => {
  const usuario = {
      costo: req.body.costo,
      fecha: req.body.fecha,
      tipo_evento: req.body.tipo_evento,
      servicio_catering: req.body.servicio_catering,
      diseno_evento: req.body.diseno_evento,
      artista: req.body.artista,
      numero_invitados: req.body.numero_invitados,
  }

  const query = `INSERT INTO  reservas SET ?`
  conexion.query(query, usuario, (error) => {
      if(error) return console.error(error.message)

      res.json(`Se insertó correctamente el usuario`)
  })
})
