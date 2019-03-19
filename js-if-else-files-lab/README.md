<<<<<<< HEAD
# Strings and Numbers Outside of the Browser

In our effort to familiarize ourselves with the Learn IDE, Let's play with strings and numbers again but in the Learn IDE. First things first though, let's open this lab in the Learn IDE. Go ahead and click the blue "Open" button at the top of this page. You should then be _whisked_ away to the IDE. 

Alright! This lab is *very important*. I'm going to teach you how to approach all labs...and really everything in coding. That's a huge statement, but programming is actually fairly simple if you follow this process.

First things first, let's run the code we are given. That should always be your first task. Just like when you are using a map to find a new restaurant, you need to know where you are _now_ before you can know where you need to go. To run the code, type `nodejs index.js` in your terminal. You should get something like this:

```
Name:
Joe
Height:
74
```

Look familiar? Open up the `index.js` file and take a look. No HTML here, but you can see some basic things. The first two lines of code are below:

```javascript
var name = "Joe"
var height = "74"
```

These two just assign the value `"Joe"` and `"74"` to `name` and `height`, respectively. `name` and `height` are variables. `"Joe"` and `"74"` are Strings. We know they are Strings because they are wrapped in quotes. The next four lines do all of the outputting to your terminal.

```javascript
console.log("Name:")
console.log(name)

console.log("Height:")
console.log(height)
```

The first two at first print the String `"Name:"`, then it prints the _value inside `name`_. Earlier in our program, we assigned `name` a value of `"Joe"`. So, it prints out `Joe`. Nice! What if we put `name` in quotes?. Give it a try, then run your program again by typing `nodejs index.js`. You should see it print out the literal `name` instead of `Joe`. You just converted `name` from a variable into a String. Remove the quotes and everything will work again.

Ok, go ahead and change the `name` variable to your name. To do this, modify the first line to something like this `var name = "Janet"`. Re-run your code and you'll see everything gets updated. Awesome.

Finally, we are going to modify our height. You could modify the height the same way we modified `name`. Simply change the `"74"` to whatever your height is. Remember last time though? We wanted to just have you "grow" but adding `1` to our current height. We can try that out by modifying the `console.log(height)` line by writing `console.log(height+1)`. If you re-run that code you'll see it just appends `1` to the end of whatever height you had. That's not what we want! We want proper addition
to occur. Just like last time, we need to translate our String (`"74"`) into a number. You can do this in your `console.log` like this: `console.log(parseInt(height) + 1 )`. That converts `"74"` into a number and then adds one. If you re-run the code now you'll see that it works! The other way we can modify this is to change the assignment of the variable in the first place. So let's modify the `var height = "74"` line to look like this

```javascript
var height = 74
```

Boom! We took away the quotes and now it's a number not a string. You can remove the `parseInt` part of your `console.log` to look like this: `console.log(height + 1)` and everything should work properly.

Now it's time to submit your work back to learn. Go ahead and run `learn submit` in the terminal. You should then get a few more green lights and be ready to move on to the next lesson. Congratulations

<p class='util--hide'>View <a href='https://learn.co/lessons/js-node-practice-lab'>Node Practice</a> on Learn.co and start learning to code for free.</p>
=======
# Using Conditionals and Multiple Files in JS

We now know how to use conditionals. Now let's use conditionals to test our code for correctness. This is your first step towards how professional developers write software. Professional developers have to test their code for correctness. Instead of constantly clicking around their applications, most developers write additional code, called tests that ensure their code is outputting the right things. 

We will eventually explain how to use the professional testing tools but first, let's go over a simple example.

After you open this lesson in the IDE, double-click on `index.js`. You'll see some basic code:

```javascript
var name = "Joe"
var height = "74"

// Don't worry about this
module.exports = { name, height
}
```

First of all, don't worry about the `module.exports` stuff right now, we'll get to that later. You've seen the rest of this stuff before but let's review. This assigns `"Joe"` to the `name` variable using the assignment operator (`=`). It also assigns `"74"` to `height`. Both `"Joe"` and `"74"` are Strings. We know that because they are wrapped in quotes. We have our code, but we don't have our tests. Let's write a test right below the `var height = "74"` line to check that `name` is equal to `"Susan"`. That should look something like this:

```javascript
if (name === "Susan") {
    console.log("The name is correct")
}
```

Write that, and then run your `index.js` file with a `nodejs index.js` in the terminal. You'll see nothing printed out. That's because our `name` variable doesn't equal `"Susan"`. Let's put in an `else` statement that prints `"Expected the name to be Susan"`. Give it a try on your own.

OK, you gave it a try, now let's look at the solution:

```javascript
if (name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected the name to be Susan")
}
```

See what we did there? Great! Now run your code again by typing `nodejs index.js` in the terminal and you should get `Expected the name to be Susan` printed out. Let's fix our `name` variable to equal `"Susan"`. Modify the first line to say:

```javascript
var name = "Susan"
```

Re-run your code and boom! you did it :)

### Separating Tests from Application Code

As you can probably imagine a large application will have many tests. Average sized applications will have thousands of tests. It gets a bit confusing to have the application code mixed in with your test code. We want to separate them out so it's not a pain to sift through our files.

Let's open up another javascript file and play around with separating things out. There is a blank JS file included in this lab called `other_file.js`. Double click on that and you'll see a blank file. Let's say we wanted to `console.log` the `name` variable from our `index.js` file. Seems fairly easy. Go ahead and type `console.log(name)`. Now let's run this new file by typing `nodejs other_file.js` in our terminal. BOOM! You'll get an error that looks like this:

```
/home/jmburges/code/labs/js-functions-lab/test.js:1                                     
(function (exports, require, module, __filename, __dirname) { console.log(name)         
                                                                          ^             
                                                                                        
ReferenceError: name is not defined                                                     
    at Object.<anonymous> (/home/jmburges/code/labs/js-functions-lab/test.js:1:75)      
    at Module._compile (module.js:570:32)                                               
    at Object.Module._extensions..js (module.js:579:10)                                 
    at Module.load (module.js:487:32)                                                   
    at tryModuleLoad (module.js:446:12)                                                 
    at Function.Module._load (module.js:438:3)                                          
    at Module.runMain (module.js:604:10)                                                
    at run (bootstrap_node.js:393:7)                                                    
    at startup (bootstrap_node.js:150:9)                                                
    at bootstrap_node.js:508:3       
```

The important line here is the `ReferenceError: name is not defined` line. That says that our `name` variable doesn't exist in the `other_file.js` file. That makes sense. In `other_file.js` we never write the line of code to create `name`. We have the line `var name = "Susan"` in `index.js`. We need to tell `other_file.js` about the existence of `index.js`! Let's do that by replacing the contents of `other_file.js` with the following line of code:

```javascript
var index = require("./index.js")
```

This tells javascript to load the `index.js` file and put its contents inside of the `index` variable within `other_file.js`. That's a bit confusing, but it's fairly straight forward to use. Thanks to `require()`, we now have access to the variables we exported from `index.js`, including `name`. To access `name` within `other_file.js`, we can simply refer to the `name` property of the `index` variable, which, again, is where we used `require()` to store the contents of `index.js`. Let's add the following line to `other_file.js`:

```javascript
var index = require("./index.js")

console.log(index.name)
```

Give that a run by typing `nodejs other_file.js` and you should see the name getting printed out. Awesome.


### Your Turn

You now know how multiple files interact as well as how `if` statements work. Now you have to write your code to match some specific tests. Open up `tests.js` and you will see two `if` statements. Let's give this a run to start things off by typing `nodejs tests.js`. You should get two messages:

```
Expected: Susan, Received: Joe
Expected: 70, Received: 74
```

Now it's your job to modify `index.js` so that when you run `tests.js` it says you got both `height` and `name`. **One note: Capitalization matters and String vs. Numbers matter. Numbers don't have any quotes around them, Strings do have quotes around them!** 
>>>>>>> js-if-else-files-lab/master
