const express = require('express');
const app =express();

app.get('/',(req,resp)=>{
    resp.send('heyaa');
    console.log(req);
});
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
});