const express = require("express");
const cron = require("node-schedule");
const moment = require("moment");
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");

const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();

/*
 *             Mongoose connection
 */

mongoose.Promise = global.Promise;
// mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(connection => {
    console.log("connected to database ...");
    return connection;
  })
  .catch(err => {
    console.log(err);
  });

/**
 *        Express Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("static"));
app.use(fileUpload());
app.use(express.static("static"));
app.get("/", async (req, res) => {
  res.send("Welcome to my api");
});

/**
 *          Custom Routes
 */
const {
  attendance,
  subject,
  student,
  className,
  parent,
  result,
  teacher,
  profile,
  message,
  notice
} = require("./routes/");

app.use("/api/student", student);
app.use("/api/parent", parent);
app.use("/api/subject", subject);
app.use("/api/teacher", teacher);
app.use("/api/class", className);
app.use("/api/result", result);
app.use("/api/attendance", attendance);
app.use("/api/profile", profile);
app.use("/api/message", message);
app.use("/api/notice", notice);

async function start() {
  const port = process.env.PORT || 3001;
  await app.listen(port, () => {
    console.log(`server is running on port:${port}`);
  });
}
start();

// async function start() {
//   const nuxt = new Nuxt(config);
//   const { host, port } = nuxt.options.server;
//   if (config.dev) {
//     const builder = new Builder(nuxt);
//     await builder.build();
//   } else {
//     await nuxt.ready();
//   }
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers
//   });

//   // server.use((req, res, next) => {
//   //   if (req.path.startsWith(opts.endpoint)) return next();
//   //   handle(req, res, next);
//   // });
//   app.use(nuxt.render);
//   // server.express.use(nuxt.render);
//   // server.use(app);

//   server.applyMiddleware({ app, });
//   const opts = {
//     playground: "/playground",
//     // port: `${port}`,
//     endpoint: "/graphql",
//     getEndpoint: true
//   };

//   // server.start(opts, ({ port }) =>
//   //   consola.ready({
//   //     message: `Graphql server running on http://${host}:${port}`,
//   //     badge: true
//   //   })
//   // );
//   app.listen(port, host);
//   consola.ready({
//     message: `Express Started on http://${host}:${port}`,
//     badge: true
//   });
// }
// start();

// Routes
// const student = require("./routes/student");
// const Parent = require("./routes/parent");
// const Subject = require("./routes/subject");
// const Teacher = require("./routes/teacher");
// const className = require("./routes/className");
