const express = require('express');
const morgan = require('morgan');

const path = require('path');
const fs = require('fs');

const app = express();
const indexRoutes = require('./routes/index');
const characterRoutes = require('./routes/character');

/*                  Ajustes                     */
// Usa el puerto establecido o usa el puerto 3000
app.set('port', process.env.PORT || 3000);

/*                 Middleware                   */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use('/', characterRoutes);
app.use('/', indexRoutes);

/*                   Vistas                      */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*             Archivos Estáticos                */
app.use(express.static(path.join(__dirname, 'public')));

// Escucha en el puerto establecido
app.listen(app.get('port'), () => {
  console.log('Servidor en puerto', app.get('port'));
});