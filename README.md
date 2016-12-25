# thermostat

## Introduction
This is a repository for the Makers week 5 project to create a thermostat using Javascript.

It comes with an animation for the temperature. The temparature can be turned up, down and reset (to 20 degrees). There is also a power saving mode which will prevent the temperature going above 25 degrees. This project also uses the [weather api](https://openweathermap.org/api) to show you the temperature in certain countries.

This project uses pure javascript for the backend, which is tested using Jasmine and the front end uses JQuery for user interaction. It also takes advantage of Sinatra for its server.

## Instructions
* Clone repo to your local machine
* Type `ruby app.rb` in your terminal
* Visit localhost:4567 in your browser

## Analysis

This was built with a succession of other people and I have to give credit to Ken for the way the site looks. 

The reason I like this project so much is because it was the first app I built using Javascript. On Monday we were introduced to Javascript and by Friday we had this fully functioning thermostat which mimics the behaviour of a normal thermostat.

We also managed to interact properly with the weather API. As you can see, when using the drop down menu to change cities you receive the weather for that particular city. The weather icon also changes. I was very proud of managing to achieve this within a week because the weather API was the first API I ever dealt with.

Furthermore, the backend logic is well organised and the entire app was well tested using Jasmine.

![thermostat](http://i.imgur.com/QKrb5og.png Thermostat)
