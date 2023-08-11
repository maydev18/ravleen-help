const fs = require('fs');
const requesthandler = (request , response)=>{
    // console.log(request.url , request.method , request.headers);
    if(request.url === '/'){
        response.write('<html><head><title>My page</title></head><body><form action="/message" method="POST"><input type="text" name="name"><button type="submit">Submit</button></form></body></html>');
        return response.end();
    }
    if(request.url === '/message' && request.method === 'POST'){
        const body = [];

        //when chunk of data is coming from the request
        request.on('data' , (chunk_of_data)=>{
            console.log(chunk_of_data , " ");
            body.push(chunk_of_data);
        })

        //when all chunks of data has arrived
        return request.on('end' , ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            //write file sync works synchronously and blocks the code execution so use writeFile only.
            fs.writeFile('file.txt',parsedBody.split('=')[1] , (err)=>{
                console.log(err);
                response.statusCode = 302;
                response.setHeader('Location','/'); 
                return response.end();
            });
        })
    }
    //sending the response
    response.setHeader('Content-Type' , 'text/html');
    response.write('<html><head><title>My page</title></head><body><h1>This is my server</h1></body></html>')
    response.end();
    //process.exit();  //to stop the server, to exit the event loop
}
module.exports = requesthandler;