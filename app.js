const express = require('express');
const client = require('prom-client');
const morgan = require('morgan');

const app = express();
const port = 5000;

// Create a Registry to register the metrics
const register = new client.Registry();

// Define a custom counter metric
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP Requests',
  labelNames: ['method', 'route', 'status_code'],
});

register.registerMetric(httpRequestCounter);
client.collectDefaultMetrics({ register });

// Middleware to count requests and log them
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.labels(req.method, req.path, res.statusCode).inc();
    console.log(JSON.stringify({
      time: new Date().toISOString(),
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      message: "Request handled"
    }));
  });
  next();
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from observability app!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
