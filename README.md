# electron-liveborad

###This project will be live on [livecoding.tv](https://www.livecoding.tv/fingerection/)

##What is this project?

Used in live broadcasting. Show some information on screen, which is a web site in electron has transparent background.

##What is it like?

For example, scoreboard on MLB live game. Updated by game changes.

## Tech problems to solve

1. build a electron app with transparent background.
2. make a simple scoreboard which supporting update by button
3. see what's more we can do.

I'll start github project on this website:

http://github.com/fingerection/liveboard

## Schedule

### TODO
* feature 4(KEY): visual effect for that!


## DONE LIST

`2016-06-03 23:00 CST` 

* split input part to another window. (how do two browser windows communicate? answer is: though IPC)
* handle jquery import problem.
* digging about what transparent window should notice
* feature 1: window always on top (done)
* feature 2: make a alpha settting for transparent (DONE)
* feature 3: we can control it by another input widge
* click submit: alert for the content of input.
* Make it transparent. (DONE)
* step1: make the window frame disappeared (DONE)
* step2: make the background transparent. (is it possible?) (yes, possible, and easy, just use transparent option in browser window) https://github.com/electron/electron/issues/2170



#### License [CC0 (Public Domain)](LICENSE.md)
