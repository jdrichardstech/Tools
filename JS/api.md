https://blogs.mulesoft.com/biz/tech-ramblings-biz/what-are-apis-how-do-apis-work/

#API
API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.

An API defines functionalities that are independent of their respective implementations, which allows those implementations and definitions to vary without compromising each other. Therefore, a good API makes it easier to develop a program by providing the building blocks.

An API endpoint decouples the consuming application from the infrastructure that provides a service. As long as the specification for what the service provider is delivering to the endpoint remains unchanged, the alterations to the infrastructure behind the endpoint should not be noticed by the applications that rely on that API.

You need a link to communicate your order to the kitchen and then to deliver your food back to your table. It can’t be the chef because she’s cooking in the kitchen. You need something to connect the customer who’s ordering food and the chef who prepares it. That’s where the waiter — or the API — enters the picture.

The waiter takes your order, delivers it to the kitchen, telling the kitchen what to do. It then delivers the response, in this case, the food, back to you. Moreover, if the API is designed correctly, hopefully, your order won’t crash!

##A real example of an API
How are APIs used in the real world? Here’s a very common scenario of the API economy at work: booking a flight.

When you search for flights online, you have a menu of options to choose from. You choose a departure city and date, a return city and date, cabin class, and other variables like your meal, your seat, or baggage requests.

To book your flight, you need to interact with the airline’s website to access the airline’s database to see if any seats are available on those dates, and what the cost might be based on the date, flight time, route popularity, etc.

You need access to that information from the airline’s database, whether you’re interacting with it from the website or an online travel service that aggregates information from multiple airlines. Alternatively, you might be accessing the information from a mobile phone. In any case, you need to get the information, and so the application must interact with the airline’s API, giving it access to the airline’s data.

The API is the interface that, like your helpful waiter, runs and delivers the data from the application you’re using to the airline’s systems over the Internet. It also then takes the airline’s response to your request and delivers right back to the travel application you’re using. Moreover, through each step of the process, it facilitates the interaction between the application and the airline’s systems – from seat selection to payment and booking.

APIs do the same for all interactions between applications, data, and devices. They allow the transmission of data from system to system, creating connectivity. APIs provide a standard way of accessing any application data, or device, whether it’s accessing cloud applications like Salesforce, or shopping from your mobile phone.

#What is a RESTful API?
One of the most popular types of API is REST or, as they’re sometimes known, RESTful APIs. REST or RESTful APIs were designed to take advantage of existing protocols. While REST - or Representational State Transfer - can be used over nearly any protocol, when used for web APIs it typically takes advantage of HTTP. This means that developers have no need to install additional software or libraries when creating a REST API.

One of the key advantages of REST APIs is that they provide a great deal of flexibility. Data is not tied to resources or methods, so REST can handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia. This flexibility allows developers to build an API that meets your needs while also meeting the needs of very diverse customers.

There are 6 key constraints to think about when considering whether a RESTful API is the right type of API for your needs:

Client-Server: This constraint operates on the concept that the client and the server should be separate from each other and allowed to evolve individually.
Stateless: REST APIs are stateless, meaning that calls can be made independently of one another, and each call contains all of the data necessary to complete itself successfully.
Cache: Because a stateless API can increase request overhead by handling large loads of incoming and outbound calls, a REST API should be designed to encourage the storage of cacheable data.
Uniform Interface: The key to the decoupling client from server is having a uniform interface that allows independent evolution of the application without having the application’s services, or models and actions, tightly coupled to the API layer itself.
Layered System: REST APIs have different layers of their architecture working together to build a hierarchy that helps create a more scalable and modular application.
Code on Demand: Code on Demand allows for code or applets to be transmitted via the API for use within the application.
Unlike SOAP, REST is not constrained to XML, but instead can return XML, JSON, YAML or any other format depending on what the client requests. And unlike RPC, users aren’t required to know procedure names or specific parameters in a specific order.

One of the disadvantages of RESTful APIs is that you can lose the ability to maintain state in REST, such as within sessions. It can also be more difficult for newer developers to use.

It’s important to understand what makes a REST API RESTful, and why these constraints exist before building your API.

To find out more about designing RESTful APIs(https://docs.mulesoft.com/api-manager/1.x/designing-your-api), and to discover whether a RESTful API is the right one for your project, download the eBook Undisturbed REST: A Guide to Designing the Perfect API.

Next, learn how designing a great API spec will save you time and money in the long run.
