# MongoDB Notes

## Introduction

- **MongoDB** is a NoSQL, document-oriented database.
- Stores data in flexible, JSON-like documents.
- Schema-less: documents in a collection can have different fields.

## Key Concepts

### Document

- Basic unit of data, stored as BSON (Binary JSON).
- Example:
  ```json
  {
      "_id": ObjectId("..."),
      "name": "Alice",
      "age": 25
  }
  ```

### Collection

- Group of MongoDB documents, similar to a table in relational databases.

### Database

- Container for collections.

### \_id Field

- Unique identifier for each document.

## CRUD Operations

### Create

```js
db.users.insertOne({ name: "Bob", age: 30 });
```

### Read

```js
db.users.find({ age: { $gt: 20 } });
```

### Update

```js
db.users.updateOne({ name: "Bob" }, { $set: { age: 31 } });
```

### Delete

```js
db.users.deleteOne({ name: "Bob" });
```

## Indexes

- Improve query performance.
- Example:
  ```js
  db.users.createIndex({ name: 1 });
  ```

## Aggregation

- Process data records and return computed results.
- Example:
  ```js
  db.users.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]);
  ```

## Advantages

- Flexible schema.
- Scalable and high performance.
- Good for handling large volumes of unstructured data.

## Useful Commands

## Useful Commands

| Command                                   | Description                           |
| ----------------------------------------- | ------------------------------------- |
| `show dbs`                                | List databases                        |
| `use <db>`                                | Switch database                       |
| `show collections`                        | List collections                      |
| `db.collection.find()`                    | Query documents                       |
| `db.createCollection('<name>')`           | Create a new collection               |
| `db.collection.insertOne({...})`          | Insert a single document              |
| `db.collection.insertMany([{...}, ...])`  | Insert multiple documents             |
| `db.collection.updateOne(query, update)`  | Update a single document              |
| `db.collection.updateMany(query, update)` | Update multiple documents             |
| `db.collection.deleteOne(query)`          | Delete a single document              |
| `db.collection.deleteMany(query)`         | Delete multiple documents             |
| `db.collection.drop()`                    | Drop a collection                     |
| `db.dropDatabase()`                       | Drop the current database             |
| `db.collection.countDocuments(query)`     | Count documents matching a query      |
| `db.collection.distinct('field')`         | Get distinct values for a field       |
| `db.collection.find().sort({field: 1})`   | Sort query results (1: asc, -1: desc) |
| `db.collection.find().limit(n)`           | Limit number of documents returned    |
| `db.collection.getIndexes()`              | List indexes on a collection          |

## Mongoose

- **Mongoose** is an ODM (Object Data Modeling) library for MongoDB and Node.js.
- Provides schema-based solutions to model application data.
- Adds structure, validation, and middleware to MongoDB documents.

### Key Features

- Schema definitions for collections.
- Model-based data access.
- Built-in validation and type casting.
- Middleware (hooks) for logic before/after operations.

### Example Usage

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user = new User({ name: "Alice", age: 25 });
user.save();
```

### Common Commands

| Command                           | Description                |
| --------------------------------- | -------------------------- |
| `mongoose.connect(uri)`           | Connect to MongoDB         |
| `new mongoose.Schema(definition)` | Define a schema            |
| `mongoose.model(name, schema)`    | Create a model             |
| `Model.find(query)`               | Find documents             |
| `Model.create(doc)`               | Create and save a document |
| `Model.updateOne(filter, update)` | Update a single document   |
| `Model.deleteOne(filter)`         | Delete a single document   |

## References

- [MongoDB Documentation](https://docs.mongodb.com/)
