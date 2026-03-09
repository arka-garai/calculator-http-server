//http server that supports 4 routes (/sum, /sub, /mul, /div)
//http framework : express , hono , elysiajs, trpc
const path = require("path");
const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})
//query param based
// http://localhost:3002/sum?a=1&b=2
// app.get("/sum", (req, res) => {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//
//     const sum = a + b;
//
//     res.json({
//         ans: sum
//     })
// })
//

//path param based
// http://localhost:3002/sum/1/3
// app.get("/sum/:a/:b", (req, res) => {
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//
//     const sum = a + b;
//
//     res.json({
//         ans: sum
//     })
// })

//post req based using body (request payload)
app.post("/sum", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const sum = a + b;

    res.json({
        ans: sum
    })
})
app.post("/sub", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const sub = a - b;

    res.json({
        ans: sub
    })
})
app.post("/mul", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const mul = a * b;

    res.json({
        ans: mul
    })
})
app.post("/div", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const div = a / b;

    res.json({
        ans: div
    })
})
app.listen(3002);

