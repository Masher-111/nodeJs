const http = require('http');

let userCount = 0;

const server = http.createServer((req, res) => {
    userCount++;
    if (req.url === '/') {
    res.writeHead(
        200,  {'Content-Type' : 'text/html; charset=UTF-8'});
    res.write(`<h4>Количество просмотров: ${userCount}</h4>`);
    res.end('<a href="./about">Перейти на страницу обо мне!</a>');
    
    } else if (req.url === '/about') {
        res.writeHead(
            200,  {'Content-Type' : 'text/html; charset=UTF-8'});
            res.write(`<h4>Количество просмотров: ${userCount}</h4>`);
        res.end('<a href="/">Перейти на главную страницу!</a>');
        } else {
            res.writeHead(
                404,  {'Content-Type' : 'text/html; charset=UTF-8'});
            res.end('<h1>Страница не найдена!</h1>');
        }
}


);

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
});
