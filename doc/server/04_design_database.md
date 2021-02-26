## Design database schema

In this step, we work on Mongoose schemas and middlewares. It's worth to think about it seriously because the database is the core of your platform.

Our mail app, has 2 schemas, which is enough for us to start building some basic feature:

- Create `/models/Message.js`:

  ```javascript
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const messageSchema = Schema(
    {
      from: { type: Schema.ObjectId, required: true, ref: "User" },
      to: { type: Schema.ObjectId, required: true, ref: "User" },
      title: { type: String, required: true },
      body: { type: String, required: true },
      status: { type: String, enum: ["seen", "unseen"] },
      isDeleted: false,
    },
    {
      timestamps: true,
    }
  );

  const Message = mongoose.model("Message", messageSchema);
  module.exports = Message;
  ```

  You can see that we have `isDeleted` flag which has a boolean value. The idea is we will not permanently delete the message. If user want to delete a message, we turn the `isDeleted` value to `true`. It's quite common to keep the "important" data like this example.

  Then when user browse messages, we only return messages with `isDeleted` is `false`. To automate that we integrate a mongoose plugin for the message schema:

- Create `models/User.js`:

  ```javascript
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;

  const userSchema = Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ["user", "admin"] },
      isDeleted: false,
    },
    { timestamps: true }
  );

  const User = mongoose.model("User", userSchema);
  module.exports = User;
  ```

### Evaluation

- Run `npm run dev`, you should see on the terminal:
  ![](./images/400_server_log_1.png)
  ...
  ![](./images/401_server_log_2.png)

- You can also find the data in the DB using Compass:
  ![](./images/402_compass.png)

Good job! [Back to instructions](/README.md)
