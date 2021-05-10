---
title: 'Background Task Queues'
date: '2021-01-06'
description: 'Project implementing a background tasks/jobs queue with React as frontend, Python to process the requests and Julia to run the jobs communicating using RabbitMQ.'
thumbnail: './preview.png'
---

### Introduction

The frontend (`React.js`) will generate a request (through `GraphQL` endpoints) to the backend in order to create new tasks. The backend (`Django`) will respond with a task item scheduled for running which is seen in the table with a `QUEUEING` status.

![stack](https://github.com/mattborghi/background-tasks-queue/raw/main/assets/stack.png)

`RabbitMQ` now handles the distribution of one or several tasks (which may be created by one or several users) using the `Work Queue` design pattern. One of the clients is the `Django` backend whom creates the tasks by pushing a json payload to a queue into the RabbitMQ Server. Then this message system distributes the work to the `Julia` workers. When a certain task is set to run its status changes to `RUNNING`. 

Right now two things can happen:

- The task fails with `FAILED` status.

- The task completes with `FINISHED` status. In this case the result is pushed to a Sink. This sink in the future might preserve the results in a separate database. Later, the sink mutates the django backend status with the calculated value.

Finally, a long polling connection between the frontend and the backend is made so the results are updated in a table.

As a side note, this pattern allowes us to recover the tasks assigned to a worker in case it is shut down for some reason and assign them to other free workers or remain in memory if all the workers are busy.

Below, there is a small video showcasing the project capabilities.

<span style="display:flex; flex-direction: row; align-items: center; justify-content: flex-start;">
Fore more information, visit the GitHub repository
<a style="padding-left: 10px;" href="https://github.com/mattborghi/background-tasks-queue">
  <img src="../../assets/github.svg" height="20px" width="20px">
</a>
</span>

<span style="display:flex; flex-direction: row; align-items: center; justify-content: flex-start;">
In order to see and test a live demo deployed using Heroku click here
<a style="padding-left: 10px;" href="https://mattborghi.github.io/background-tasks-queue/">
  <img src="../../assets/heroku.svg" height="20px" width="20px">
</a>
</span>

> Note: The webpage might be showing an error message because the dyno workers deployed in `Heroku` are turned off.

### Tech Used

- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Django](https://www.djangoproject.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Julia](https://julialang.org/)

### Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/8aVgLDDIEdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>