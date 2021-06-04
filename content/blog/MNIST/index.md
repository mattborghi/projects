---
title: MNIST web app
date: "2021-06-03"
thumbnail: ./preview.png
description: Github pages deployment of a simple machine learning model that uses MNIST database for digit recognition using TensorFlow.js.
---


<span style="display:flex; flex-direction: row; align-items: center; justify-content: flex-start;">
For more information, visit the GitHub repository
<a style="padding-left: 10px;" href="https://github.com/mattborghi/mnist-webapp">
  <img src="../../assets/github.svg" height="20px" width="20px">
  <img src="../../assets/github_white.svg" height="20px" width="20px">
</a>
</span>

<span style="display:flex; flex-direction: row; align-items: center; justify-content: flex-start;">
In order to see and test the live demo click here
<a style="padding-left: 10px;" href="https://mattborghi.github.io/mnist-webapp/">
  <img src="../../assets/github.svg" height="20px" width="20px">
  <img src="../../assets/github_white.svg" height="20px" width="20px">
</a>
</span>

### Introduction

Github pages deployment of a simple machine learning model that uses the `MNIST` database for digit recognition using `TensorFlow.js`.

![image](https://raw.githubusercontent.com/mattborghi/mnist-webapp/main/assets/img/model.png)

**Figure 1.** Model summary table. 

### Key Challenges

Generally, having to train the model and making the data preprocessing is not difficult per se. Dealing with the user input images was the biggest deal as, for example, investigating how to transform the raw data into the desired arrays used for input into the `prediction` function.

Input images are obtained as a *112x112* array but need to be transformed into a *28x28* array.

![input](https://interactivechaos.com/sites/default/files/2020-09/tutdl_0072.jpg)

**Figure 2.** Input images.

Several things can be used for this like only saving 1 out of 4 pixels but I found out that key pixels were lost in the process. So I desided to use an average-like approach that works considerably better. Surely there are better methods that can be used but the latter was considered satisfactory. 