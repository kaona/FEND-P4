## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Checked out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> sudo npm install ngrok -g
  $> ngrok http 8080
  ```

I used ImageOptim 2 and Preview(on Mac) to resize and optimize images. I resized to the largest necessary size. I used the webfont js code to use fonts asynchronosly and not load the whole library.

I inlined all the css from styles.css and removed the file from the head. I used a media query on the print.css file. 

I used async on all render blocking scripts.

I used will-change:transform on the moving pizza elements in css to move them to their own layer.

I refactored the code for moving the pizzas by removing the constants to outside of the loop. I created an array to put the (i % 5) constants because the loop was doing a lot of work to come up with the same 5 answers.

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

I optimized  main.js by installing Grunt and running css, js and image optimization tasks. I used watch to automatically update the minified files.

I simplified the resizePizza javascript by including a for loop to resize each pizza in the switch case statement which renamed the change pizza size slider and the eliminated the second switch case and for loop. The first switch case now changes the css in randomPizzaContainer.

"Many Bothans died to submit this project."


