const express = require('express')
const PORT = 8000;

export default class WebServer { 
    constructor () {
        this.app = express();
        this.app.use(express.static('dist/public'));
    }
    

    start () { 
        return new Promise((resolve, reject) => {   
            try {        
                this.server = this.app.listen(PORT, function () {          
                    resolve(PORT)        
                })      
            } catch (e) {        
                console.error(e)        
                reject(e)      
            }   
        })  
    };

    stop () {    
        return new Promise((resolve, reject) => {      
            try {        
                this.server.close(() => {          
                    resolve()        
                })      
            } catch (e) {        
                console.error(e.message)        
                reject(e)      
            }   
        })  
    }
};
