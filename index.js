let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
 // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
 // string

 let dataConstrutor = new Date();
 let dt = dataConstrutor.getFullYear();
 console.log(dt)