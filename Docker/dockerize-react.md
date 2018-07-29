https://www.telerik.com/blogs/dockerizing-react-applications-for-continuous-integration

Learn how to use Docker and containerization in your React apps and understand the benefits though this straightforward example.

There's a dominant trend in software development around the idea of organizing our applications into sharable ecosystems called containers. This process of putting a piece of software into a virtual container is commonly known as containerization.

Containerization is useful because it provides a consistent environment for code to grow in, from development to deployment. Today, I want to walk through an effective strategy for doing this with a React app. We'll be considering how containerization enables us to better utilize the practices of continuous integration.

Creating and Containerizing an Application
To start things off, we'll generate a React application with create-react-app:

# If you haven't installed create-react-app:

npm install -g create-react-app
create-react-app continious-integration-app
PowerShell
This will scaffold a new React application in a directory called continous-intergration-app. The naming of things doesn't really matter at all here, so feel free to use a name of your choosing. We'll also need to add a Dockerfile in our project as well. We can do this via:

touch Dockerfile
PowerShell
Our Dockerfile is going to be the cornerstone for how the actual virtual machine environment is built out for our React application. We'll be filling it in with all the configuration and dependencies we need to effectively run, test, and deploy our code.

An initial draft of a Dockerfile for a React application might look something like this:

# The Node version that we'll be running for our version of React.

# You may have to search the Node directory for a version that fits

# the version of React you're using.

FROM node:8.9-alpine

# Create a work directory and copy over our dependency manifest files.

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:

# yarn build

RUN npm install --production --silent && mv node_modules ../

# Expose PORT 3000 on our virtual machine so we can run our server

EXPOSE 3000
Docker
There are a few interesting things about our Dockerfile setup that I want to point out. The biggest decision we're making is developing against what our ideal production environment would be. The advantage of this is that we're essentially able to simulate a production machine of any kind (Windows, macOS, or Linux) and have lots of confidence that the code we're writing translates perfectly to its final destination.

However, there is a bit of a limiting factor by only targeting production in our Dockerized container. We'll cover those drawbacks in a bit. Before we do, we need to focus on how to effectively orchestrate, configure, and run the container we just built.

Orchestrating Your Containers
Our first step with container orchestration is to get used to using docker-compose. This tool allows us to orchestrate multiple containers and configurations to build out a Docker image that's just right for our current needs.

For our React app, we'll initially just want to create something like the following:

# docker-compose.yml

version: '3.4'

services:
web:
build:
context: .
dockerfile: Dockerfile
environment: - NODE_ENV=production
command: npm start
ports: - 3000:3000
volumes: - .:/app
YAML
These few lines of code dictate everything from environmental variables to start commands for our containers. For more resources on what you can do in a docker-compose.yml file, check out Docker's documentation on Compose.

To build out everything, we'll run a short command:

docker-compose build web
PowerShell
The process that follows may take some time to complete. Docker is going to fetch the necessary assets to build our virtual container and then compile them. Once finished, we can start the container via:

docker-compose up web
PowerShell
This will trigger npm start and kick off our React server. Once up and running, we should be able to access our application from http://localhost:3000 just like we normally would for a create-react-app instance!

With some basic orchestration principles implemented, we can now start looking into better optimizing our containers for continuous integration!

Docker and Continuous Integration
Containerizing our React application allows us to effectively develop in a consistent environment from development to production. However, it also unlocks an enormous value when it comes to the practice of continuous integration.

Many build services like TravisCI, Codeship, or CircleCi allow developers to use their Docker configurations to run everything from testing to deployment in an Dockerized environment. The idea of continuous integration makes our always-on production environment settings a bit interesting. Because of this, we need to configure a test and development container for our application as well.

We'll be breaking apart our docker-compose.yml into pieces that better accommodate our environmental needs. There is also going to be a need to juggle multiple Dockerfiles. However, docker-compose will be doing most of the heavy lifting for us here.

First, we're going to write up a production.yml compose configuration to inject into our base docker-compose.yml file. We'll be renaming our existing Dockerfile to Dockerfile-production as well.

# production.yml

version: '3.4'

services:
web:
build:
context: .
dockerfile: Dockerfile-production
environment: - NODE_ENV=production
YAML
Next, we'll start whittling down our docker-compose.yml file:

# docker-compose.yml

version: '3.4'

services:
web:
command: npm start
ports: - 3000:3000
volumes: - .:/app
YAML
With two separate .yml configuration files in the mix now, we'll need to adjust how we instruct docker-compose to build our containers. We'll now use the command:

docker-compose -f docker-compose.yml -f production.yml build web
PowerShell
The command is a lot more verbose than our normal docker-compose build web. However, we now have the advantage of replacing whatever .yml configuration we want depending on our environment. We'll often have to create a new Dockerfile to accurately reflect some of these environmental settings.

For example, let's say we wanted to simulate what a test version of our application looked like, so we could run tests on CI services. We would need to have our Dockerfile install our testing/nonproduction dependencies in order to be able to run tests.

The new Dockerfile is going to look like our initial draft, with one difference: We're not building for production.

# The Node version that we'll be running for our version of React.

# You may have to search the Node directory for a version that fits

# the version of React you're using.

FROM node:8.9-alpine

# Create a work directory and copy over our dependency manifest files.

RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:

# yarn build

RUN npm install --silent && mv node_modules ../

# Expose PORT 3000 on our virtual machine so we can run our server

EXPOSE 3000
Docker
With a nonproduction Dockerfile, we'll write a test.yml configuration to utilize it and set the proper environmental variables:

version: '3.4'

services:
web:
build:
context: .
dockerfile: Dockerfile
environment: - NODE_ENV=test
YAML
Based on our previous experience, the command to build this would be:

docker-compose -f docker-compose.yml -f test.yml build web
PowerShell
With our container built and configured, we can run any kind of testing command via:

docker-compse run web [my_test_command]
PowerShell
Each environmental configuration is fairly bare. However, we're now able to specifically tailor dependencies and functionality to whatever environment we need to test, develop, or deploy from.

What's Next?
So far we've built a Docker container tailored for a React app, learned effective orchestration commands, and broken its configuration out into something that can support multiple environments. These elements are all essential for effectively developing with continuous integration.

From here, the best place to start is in developing and shipping code! Our boilerplate configuration will serve as a great place for configurations and practices to grow based off of what works best for you ad your team. You'll be able to develop software in a more consistent and efficient way.

No longer will you have to wrestle with debugging differences between an OSX development environment and a Linux production server. We can move on to focusing on optimizing and fixing code issues that are more important to the overall scheme of what we're creating.
