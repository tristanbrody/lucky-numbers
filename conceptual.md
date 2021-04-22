### Conceptual Exercise

Answer the following questions below:

-   What is RESTful routing?

RESTful routing is a design principle for APIs. An API adhering to a RESTful schema will traditionally have a 'root' URL; based on the operation a given developer is requesting from the API, they'll add 'resources' to that URL.

For example, the API's root might be '/api/production/'. A single item might be requested by adding a resource like 'item', resulting in an endpoint of '/api/production/item'.

With a RESTful model, there are usually standardized patterns for forming discrete endpoints. This makes it easier for developers to interact with your API, because they'll recognize the patterns used by the endpoints.

-   What is a resource?

A resource is a portion of a URL added to an API endpoint. For example, in '/api/dogs', 'dogs' is a resource. It should represent the type of object or data with which the HTTP verb interacts.

-   When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

-   What does idempotent mean? Which HTTP verbs are idempotent?

Idempotent means that no matter how many times you repeat an operation, you'll get the same result. GET, PUT, PATCH and DELETE are considered idempotent.

-   What is the difference between PUT and PATCH?

PATCH updates part of a resource, while PUT is used to update an entire resource.

-   What is one way encryption?

One way encryption refers to protecting data such that, were a bad actor to intercept the data, they would not have a way to reverse-engineer the true value based on the encrypted value.

-   What is the purpose of a `salt` when hashing a password?

A 'salt' is a random string added to a hashed password. This makes it more difficult to reverse engineer an encrypted value because, even if somebody could replicate the encryption pattern, they wouldn't be able to figure out how to generate the salt.

-   What is the purpose of the Bcrypt module?

The Bcrypt module handles most of the hard work of encryption for you by implementing an advanced algorithm to hash and salt passwords behind the scene. All we have to do is import Bcrypt and call a few methods, rather than needing to understand how to create a highly sophisticated encryption model.

-   What is the difference between authorization and authentication?

Authentication is the process of making sure somebody is who they say they are (for example, by having them answer security questions or complete a two factor authentication check). Authorization is the process of ensuring every user of your application has the correct permissions (for example, a user with default permissions isn't supposed to see private messages from another user).
