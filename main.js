const http = require('http');

// TODO: Create an HTTP server

const server=http.createServer(function(req,res){
    const fs=require('fs');
    const args=process.argv.slice(2);

    if(fs.existsSync(args[0]))
    {
      fs.readFile(args[0],(err,data)=>{
        if(err)
        {
            res.end(console.log(err));
        }
        else
        {
            res.end(console.log(data.toString()));
        }
      })
    }
    else
    {
        res.end(console.log("File doesn't exists"));
    }
})

// TODO: Listen on port 3000
server.listen(3000);

// DO NOT EDIT BELOW THIS LINE (Uncomment it once you are done with your code)

