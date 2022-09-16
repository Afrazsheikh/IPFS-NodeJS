
import  ipfsClient from 'ipfs-http-client';
import express from 'express'
const ipfs =  ipfsClient.create('/ip4/127.0.0.1/tcp/5001')
import fs from 'fs';
//  import hash  from 'hash'
// const { ppid } = require('process');
// const hash =  require('hash')
const app  = express();
app.use(express.json());


app.get('/', (req, res)=> { 
    return res.send("welcome to my ipfs")
})

app.post('/upload',  async(req, res)=> { 
    const data = req.body
    console.log("d==> data", data);
    const fileHash =  await addFile(data)
    console.log("filehash",fileHash);
    return res.send(`/ip4/127.0.0.1/tcp/5001/${ fileHash }`)
})

const addFile  =  async ({path, content }) => { 
    const file  = {path : path, content : Buffer.from(content )};
    const filesAdded = await ipfs.add(" hello");
    let hash1  = filesAdded.path;
    console.log("hash1", hash1);
    return(hash1);}


app.listen(3000, ()=> { 
    console.log("server start on  :  3000");
})