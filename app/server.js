const express = require("express");

const app = express();

app.get("/welcome", (req, res) => {
  res.json({
    message: "Welcome"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Jane"
    }
  ]);
});

app.get("/api/version", (req, res) => {
  res.json({
    version: "1.0.0"
  });
});

/*
 * HTML endpoint
 */
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          background: #f5f5f5;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          max-width: 600px;
        }

        h1 {
          color: #2563eb;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>DevOps Demo Application</h1>

        <p>
          This application demonstrates:
        </p>

        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>Terraform</li>
          <li>Ansible</li>
          <li>AWS EC2</li>
          <li>GitHub Actions</li>
        </ul>

        <p>
          Deployed automatically through CI/CD.
        </p>
      </div>
    </body>
    </html>
  `);
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
}

module.exports = app;

