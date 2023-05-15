# birthday-wish
**Author:** Rachel Pontes 
**Created:** May 2023 <br/>

This program is a space themed birthday card. The first page asks you to input your name and birthday. The second page displays a six-line birthday poem written for you. The last page has an orbiting sphere with the 'NASA Picture of the Day' taken the day you were born rotated around the sphere. Congratulations on another year around the sun!


<img width="800" alt="Screenshot" src="https://user-images.githubusercontent.com/64368452/206534932-8726d434-e1cc-46f5-b1c7-8a513755e43a.png">


## Basic Details:
**Languages & Tools:** JavaScript, React.js

## Main Features:
* **Writing a Poem** <br/>
Uses the OpenAI API 'text-davinci-003' model to write a six-line rhyming birthday poem using your name as input. 
* **Fetching NASA Picture of the Day** <br/>
Uses the NASA API to fetch the picture taken on the date inputted.
* **Rotates the picture in an orbit** <br/>
_Note: Full credit to Adam M. Victor for this feature. I modified their code to change the picture orbited. Find their code [here](https://codepen.io/adamvictor0012/pen/LQNJdV)._
Rotates the two dimensional picture around a sphere and orbits it. Stars surrounding the sphere move towards the screen.


## Installation:

**Running this project locally** requires NodeJS and yarn/npm. To install the required packages, run the following command

```npm install```
