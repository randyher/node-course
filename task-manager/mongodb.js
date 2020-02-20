const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taskmanager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect");
    }

    const db = client.db(databaseName);

    //Insert One Users
    // db.collection("users").insertOne(
    //   {
    //     name: "Nicky",
    //     age: 29
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert Users");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    //Insert Many Users
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Alta",
    //       age: 24
    //     },
    //     {
    //       name: "Regis",
    //       age: 29
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    //Insert Many Tasks
    db.collection("tasks").insertMany(
      [
        {
          description: "Finish tech interview",
          completed: true
        },
        {
          description: "Intro lecture prep",
          completed: true
        },
        {
          description: "Go home",
          completed: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert users");
        }

        console.log(result.ops);
      }
    );
  }
);
