import express from "express";
import proxy from "http-proxy-middleware";
import ParcelBundler, { ParcelOptions } from "parcel-bundler";
import path from "path";

if (!process.env.NIAGARA_SERVER_URL) {
  console.warn(
    "NIAGARA_SERVER_URL environment variable NOT set, skip proxy configuration",
  );
}

const app = express();

if (process.env.NIAGARA_SERVER_URL) {
  app.use(
    proxy(["**", "!/*.*", "!/"], {
      target: process.env.NIAGARA_SERVER_URL,
      ws: true,
    }),
  );
}

const entries = path.join(__dirname, "src/index.html");

const bundler = new ParcelBundler(entries);

app.use(bundler.middleware());

const port = 1234;
console.log(`Server running at http://localhost:${port}`);
app.listen(port);
