import WebServer from './web.server'

let webServer = new WebServer();

webServer.start()
.then((res) => { 
    console.log(`Web server started on PORT on ${res}!`)  
})
.catch(err => {    
    console.error(err)    
    console.error('Failed to start web server')  
});
