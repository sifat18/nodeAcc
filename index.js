const http=require('http')	
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write('<h1>Welcome to Full Stack Development </h1>')
    }
    else if(req.url==='/read'){
        fs.readFile('first.txt',(err,data)=>{
            if(err){
                res.write("failed to read file",err)
                res.end()
            }else{
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url==='/write'){
        fs.readFile('first.txt',(err,data)=>{
            if(err){
                res.write("failed to read file",err)
                res.end()
            }else{
                fs.writeFile('Second.txt',data,(err)=>{
                    if(err){
                        res.write("failed to write file",err)
                        res.end()
                }else{
                    res.write("File written successfully")
                    res.end()
                }
            })
            }
        })
    }
    else if(req.url==='/append'){
        fs.appendFile('first.txt','\nNo! It will be full not pull ! 😑',err=>{
            if(err){
                res.write("failed to append file",err)
                res.end()
            }else{
                res.write("File appended successfully")
                res.end()
            }
        })
    }
    else if (req.url==='/delete'){
        fs.unlink('Second.txt',err=>{
            if(err){
                res.write("failed to delete file",err)
                res.end()
            }else{
                res.write("File deleted successfully")
                res.end()
            }
        })
    }
})
server.listen(5000,()=>{
    console.log('Server is running on port 5000')
})