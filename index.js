
const strapi = require('strapi');

const koaApp = strapi('./build').server

console.log(koaApp)


koaApp.listen(3000);
