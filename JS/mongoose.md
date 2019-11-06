https://mongoosejs.com/docs/

Schema
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

Model
Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.
When you call mongoose.model() on a schema, Mongoose compiles a model for you.
The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. ** Thus, for the example above, the model Tank is for the tanks collection in the database.

Note: The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()!
An instance of a model is called a document. Creating them and saving to the database is easy.
const Tank = mongoose.model('Tank', yourSchema);

Note that no tanks will be created/removed until the connection your model uses is open. Every model has an associated connection. When you use mongoose.model(), your model will use the default mongoose connection.
mongoose.connect('mongodb://localhost/gettingstarted', {useNewUrlParser: true});

Queries
Mongoose models provide several static helper functions for CRUD operations. Each of these functions returns a mongoose Query object.

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndRemove()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()

A mongoose query can be executed in one of two ways. First, if you pass in a callback function, Mongoose will execute the query asynchronously and pass the results to the callback.

A query also has a .then() function, and thus can be used as a promise.
