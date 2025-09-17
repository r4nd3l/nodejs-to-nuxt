import http from "node:http";

//  mock API test cross-service calls
const PORT = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json; charset=utf-8");
  if (req.url === "/users") {
    res.end(
      JSON.stringify([
        { id: 1, name: "Mario" },
        { id: 2, name: "John Doe" },
      ])
    );
  } else if (req.url === "/health") {
    res.end(JSON.stringify({ ok: true, ts: Date.now() }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "not found", path: req.url }));
  }
});

server.listen(PORT, () => {
  console.log("Mock API listening on :" + PORT);
});
