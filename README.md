<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
# OO Tic Tac Toe

## Objectives

1. Build a CLI Tic Tac Toe game!
2. Encapsulate Tic Tac Toe in a `TicTacToe` object.

## Overview

You're going to be building a 2 player CLI version of Tic Tac Toe by building a `TicTacToe` object. The game play will be very similar to other versions of TicTacToe.

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/e4TMZ0f6qoI" frameborder="0" allowfullscreen></iframe>

## Instructions

**Run `bundle` within this lab's directory before getting started.**

### Project Structure

```bash 
=======
# Tic Tac Toe in Ruby

## Overview

We'll build a two-player CLI version of Tic Tac Toe by defining a set of methods to encapsulate the game logic. 

## Objectives

1. Build and use helper methods within the Tic Tac Toe application
2. Write a method that is responsible for the game loop in Tic Tac Toe
3. Code the main executable file that will run the game in the CLI 

## The Final Product

When complete, the game will look something like this when played:

<iframe width="100%" height="100%" src="https://www.youtube.com/embed/e4TMZ0f6qoI" frameborder="0" allowfullscreen></iframe>

### Use Your Previous Tic Tac Toe Code

If you've been following along with the progression of Tic Tac Toe labs you've probably already built lots of the methods required to solve this lab. As you solve this lab, when you encounter a requirement you have previously solved, like defining the `WIN_COMBINATIONS` constant, or the `#display_board` method, you should take a second and find your old code. The ability to recognize previously solved problems and integrate a known solution is crucial to programming (and problem solving in general). Us programmers, we call that "Copy and Pasting."

### Project Structure

```
>>>>>>> tic-tac-toe-rb/master
├── Gemfile
├── Gemfile.lock
├── README.md
├── Rakefile
├── bin
│   └── tictactoe
├── lib
│   └── tic_tac_toe.rb
└── spec
    ├── 01_tic_tac_toe_spec.rb
    ├── 02_play_spec.rb
    ├── 03_cli_spec.rb
    └── spec_helper.rb
```

#### Gemfile and Rakefile

<<<<<<< HEAD
These files set up some tools and gems for our project and can mostly be ignored. Make sure to run `bundle` before starting this project so that you have all the required gems.
=======
These files setup some tools and gems for our project and can mostly be ignored. Make sure to run `bundle` before starting this project so that you have all the required gems.
>>>>>>> tic-tac-toe-rb/master

#### `bin/tictactoe`

This is our main executable and will be how we run our game.

#### `lib/tic_tac_toe.rb`

<<<<<<< HEAD
Our main `TicTacToe` class will be defined here with all the data and logic required to play a game of tic tac toe via instances of `TicTacToe`.

#### `spec`

There are three test files that should be completed in order. `01_tic_tac_toe_spec.rb` sets tests for our helper methods within `TicTacToe`. `02_play_spec.rb` tests the main `#play` method. `03_cli_spec.rb` tests the CLI.

### Your Object Oriented Tic Tac Toe

We're going to be building a very well encapsulated object for Tic Tac Toe where each instance method will represent a discrete, single responsibility or functionality of a Tic Tac Toe game.

We'll be following the Tic Tac Toe conventions of representing the board as an array with 9 elements where `" "` represents an empty cell in the board.

We'll be getting user input via `gets` and a player will choose a position by entering 1-9. Our program will then fill out the appropriate position on the board with the player's token.

We will keep track of which player's turn it is and how many turns have been played. We will check to see, at every turn, if there is a winner. If there is a winner, we'll congratulate them. If there is a tie, we will inform our players.

## Instructions

### `TicTacToe` class.

Open up `lib/tic_tac_toe.rb`. You'll be defining the main game class, `TicTacToe` in `lib/tic_tac_toe.rb`. Without that file defining a `TicTacToe` class, everything will break.

Every method you build will be encapsulated by this class.

### `#initialize` and `@board`

The first test in `01_tic_tac_toe_spec.rb` will ensure the requirement that when a new game of Tic Tac Toe is started — that is, when a new instance of `TicTacToe` is initialized — the instance of the game must set the starting state of the board, an array with 9 `" "` empty strings, within an instance variable named `@board`.

In other words, your `#initialize` method should set a `@board` variable equal to a new, empty array that represents the game board.

#### `WIN_COMBINATIONS`

Define a `WIN_COMBINATIONS` constant within the `TicTacToe` class, and set it equal to a nested array filled with the index values for the various winning combinations possible in Tic Tac Toe.

**Top-Tip:** When you see this line, `TicTacToe::WIN_COMBINATIONS`, in the test suite, that means the test suite is accessing the constant `WIN_COMBINATIONS` that was declared inside the `TicTacToe` class.

```ruby
# within the body of TicTacToe

WIN_COMBINATIONS = [
  [0,1,2], # Top row
  [3,4,5]  # Middle row
  # et cetera, creating a nested array for each win combination
]

# the rest of the TicTacToe class definition
```
**Tip:** The next bunch of methods we will be describing have already been defined in previous labs. You can copy your code from those labs, paste them in this one, and tweak them slightly to work with the object oriented approach to pass the tests.

#### `#display_board`

Define a method that prints the current board representation based on the `@board` instance variable.

#### `#input_to_index`

Define a method into which we can pass user input (in the form of a string, e.g., `"1"`, `"5"`, etc.) and have it return to us the corresponding index of the `@board` array. Remember that, from the player's point of view, the board contains spaces 1-9. But the indices in an array start their count at 0. If the user inputs `5`, your method must correctly translate that from the player's perspective to the array's — accounting for the fact that `@board[5]` is *not* where the user intended to place their token.

#### `#move`

Your `#move` method must take in two arguments: the index in the `@board` array that the player chooses and the player's token (either `"X"` or `"O"`). The second argument, the player's token, should default to `"X"`.

#### `#position_taken?`

The `#position_taken?` method will be responsible for evaluating the user's desired move against the Tic Tac Toe board and checking to see whether or not that position is already occupied. Note that this method will be running *after* `#input_to_index`, so it will be checking index values. When it is passed the index value for a prospective move, `#position_taken?` will check to see if that position on the `@board` is vacant or if it contains an `"X"` or an `"O"`. If the position is free, the method should return `false` (i.e., "the position is not taken"); otherwise, it will return `true`.

#### `#valid_move?`

Build a method `valid_move?` that accepts a position to check and returns `true` if the move is valid and `false` or `nil` if not. A valid move means that the submitted position is:
=======
All of our game methods will be coded here.

#### `spec`

There are three test files that should be completed in order. `01_tic_tac_toe_spec.rb` sets tests for our helper methods. `02_play_spec.rb` tests the main `#play` method. `03_cli_spec.rb` tests the CLI.

### Your Tic Tac Toe Game

There are infinite ways to build Tic Tac Toe. We, however, have been building up to a very specific structure with the methods we've been building throughout this course. We'll be using many of those methods here. These methods represent the basic requirements and logic of the game.

Why build and utilize the helper methods we've been constructing?

Let's take a look at what it would require to print out a board three times, without any helper methods:

```ruby
board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

puts " #{board[0]} | #{board[1]} | #{board[2]} "
puts "-----------"
puts " #{board[3]} | #{board[4]} | #{board[5]} "
puts "-----------"
puts " #{board[6]} | #{board[7]} | #{board[8]} "

puts " #{board[0]} | #{board[1]} | #{board[2]} "
puts "-----------"
puts " #{board[3]} | #{board[4]} | #{board[5]} "
puts "-----------"
puts " #{board[6]} | #{board[7]} | #{board[8]} "

puts " #{board[0]} | #{board[1]} | #{board[2]} "
puts "-----------"
puts " #{board[3]} | #{board[4]} | #{board[5]} "
puts "-----------"
puts " #{board[6]} | #{board[7]} | #{board[8]} "
```

Now, let's take a look at the same task, encapsulated into a method that we can simply call, or invoke, three times.

```ruby
def display_board(board)
  puts " #{board[0]} | #{board[1]} | #{board[2]} "
  puts "-----------"
  puts " #{board[3]} | #{board[4]} | #{board[5]} "
  puts "-----------"
  puts " #{board[6]} | #{board[7]} | #{board[8]} "
end

board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

display_board(board)
display_board(board)
display_board(board)
```

When our logic is well encapsulated by individual methods everything about our code is easier. We can re-use the same logic again and again, painlessly.

You'll approach building Tic Tac Toe in this manner, first defining helper methods according to the test requirements and then slowly putting them together to define the complete play logic.

You'll then use this play method within a CLI and build a fully functioning 2 player Tic Tac Toe CLI in Ruby!

### Game Conventions

We'll be representing a Tic Tac Toe board using an array of `" "` strings. We'll pass this board to every method as an argument so the helper methods can interact with or introspect on the board.

We'll be getting user input via `gets` and a player will choose a position on the board by entering 1-9. Our program will then fill out the appropriate position on the board with the player's token. The term 'position' will refer to the spot on the board as the player sees it (1-9).

We will keep track of which player's turn it is and how many turns have been played. We will check to see, at every turn, if there is a winner. If there is a winner, we'll congratulate them. If there is a tie, we will inform our players.

## Instructions

### Helper Methods

Open up `lib/tic_tac_toe.rb`. You'll be coding your helper methods here. Run the tests for these methods by typing `rspec spec/01_tic_tac_toe_spec.rb` in the terminal. Use the test output, along with the guidelines below, to build these methods.

#### `WIN_COMBINATIONS`

Define a constant in `lib/tic_tac_toe.rb` `WIN_COMBINATIONS` and set it equal to a nested array filled with the index values for the various win combinations in tic tac toe.

```ruby
WIN_COMBINATIONS = [
  [0,1,2], # Top row
  [3,4,5]  # Middle row
  # ETC, an array for each win combination
]
```

#### `#display_board`

Define a method that prints the current board representation based on the `board` argument passed to the method.

An empty board would be:

```ruby
board = [" "," "," "," "," "," "," "," "," "]
display_board(board)
```
Outputting:

```
   |   |   
-----------
   |   |   
-----------
   |   |   
```

A board with an "X" in the middle:
```ruby
board = [" ", " ", " ", " ", "X", " ", " ", " ", " "]
display_board(board)
```
Outputting:

```
   |   |   
-----------
   | X |   
-----------
   |   |   
```

#### `#input_to_index`

Once the user inputs where they would like to go on the board, we then have to convert this to the board index multiple times. Instead of doing that in a lot of places, we can remove this repetitive code and put it in this helper method. This method takes the user_input (which is a string), converts it to an Integer, and subtracts 1. Remember that, from the player's point of view, the board contains spaces 1-9. But, an array's indexes start their count at 0.

#### `#move`

Your `#move` method must take in three arguments: **1)** the board array, **2)** the index in the board array that the player would like to fill out with an "X" or and "O", and **3)** the player's character (either "X" or "O"). We previously had you write this method with a default argument of "X" for the third argument, but that is no longer needed.

#### `#position_taken?`

The `#position_taken?` method will be responsible for evaluating the position selected by the user against the Tic Tac Toe board and checking to see whether or not that index on the board array is occupied. If the user would like to fill out position 1, our `#position_taken?` method will check to see if that board index is vacant or if it contains an "X" or an "O". If the position is free, the method should return `false` (i.e. "not taken"), otherwise it will return `true`.

#### `#valid_move?`

Build a method `valid_move?` that accepts a board and an index to check and returns `true` if the move is valid and `false` or `nil` if not. A valid move means that the submitted position is:
>>>>>>> tic-tac-toe-rb/master

1. Present on the game board.
2. Not already filled with a token.

#### `#turn`

Build a method `#turn` to encapsulate the logic of a single complete turn composed of the following routine:

<<<<<<< HEAD
1. Ask the user for their move by specifying a position between 1-9.
2. Receive the user's input.
3. Translate that input into an index value.
4. If the move is valid, make the move and display the board.
5. If the move is invalid, ask for a new move until a valid move is received.

All these procedures will be wrapped into our `#turn` method. However, the majority of the logic for these procedures will be defined and encapsulated in individual methods that you've already built.
=======
1. Asking the user for their move by position 1-9.
2. Receiving the user input.
3. Convert user input to an index
4. If the move is valid, make the move and display board.
5. Otherwise (that is, if the move is invalid) ask for a new position until a valid move is received.

All these procedures will be wrapped into our `#turn` method. However, the majority of the logic for these procedures will be defined and encapsulated in individual methods which you've already built.
>>>>>>> tic-tac-toe-rb/master

You can imagine the pseudocode for the `#turn` method:

```
ask for input
get input
<<<<<<< HEAD
translate input into index
if index is valid
  make the move for index
  show the board
else
  ask for input again
=======
convert input to index
if move is valid
  make the move for index and show board
else
  ask for input again until you get a valid move
>>>>>>> tic-tac-toe-rb/master
end
```

#### `#turn_count`

<<<<<<< HEAD
This method returns the number of turns that have been played based on the `@board` variable.

#### `#current_player`

The `#current_player` method should use the `#turn_count` method to determine if it is `"X"`'s or `"O"`'s turn.

#### `#won?`

Your `#won?` method should return false/nil if there is no win combination present in the board and return the winning combination indexes as an array if there is a win. Use your `WIN_COMBINATIONS` constant in this method.

#### `#full?`

The `#full?` method should return true if every element in the board contains either an "X" or an "O".

#### `#draw?`

Build a method `#draw?` that returns `true` if the board is full and has not been won, `false` if the board is won, and `false` if the board is neither won nor full.

#### `#over?`

Build a method `#over?` that returns true if the board has been won or is full (i.e., is a draw).

#### `#winner`

Given a winning `@board`, the `#winner` method should return the token, `"X"` or `"O"`, that has won the game.
=======
This method takes in an argument of the board array and returns the number of turns that have been played.

#### `#current_player`

The `#current_player` method should take in an argument of the game board and use the `#turn_count` method to determine if it is `"X"`'s turn or `"O"`'s.

#### `#won?`

Your `#won?` method should accept a board as an argument and return false/nil if there is no win combination present in the board and return the winning combination indexes as an array if there is a win. Use your `WIN_COMBINATIONS` constant in this method.

#### `#full?`

The `#full?` method should accept a board and return true if every element in the board contains either an "X" or an "O".

#### `#draw?`

Build a method `#draw?` that accepts a board and returns true if the board has not been won and is full and false if the board is not won and the board is not full, and false if the board is won.

#### `#over?`

Build a method `#over?` that accepts a board and returns true if the board has been won, is a draw, or is full.

#### `#winner`

The `#winner` method should accept a board and return the token, "X" or "O" that has won the game given a winning board.
>>>>>>> tic-tac-toe-rb/master

### Putting it all together: the `#play` method

#### `#play`

<<<<<<< HEAD
The play method is the main method of the Tic Tac Toe application and is responsible for the game loop. A Tic Tac Toe game must allow players to take turns, checking if the game is over after every turn. At the conclusion of the game, whether because it was won or ended in a draw, the game should report to the user the outcome of the game. You can imagine the pseudocode:
=======
The play method is the main method of the tic tac toe application and is responsible for the game loop. A tic tac toe game must allow players to take turns, checking if the game is over after every turn, and at the conclusion of the game, whether because it was won or because it was a draw, reporting to the user the outcome of the game. You can imagine the pseudocode:
>>>>>>> tic-tac-toe-rb/master

```
until the game is over
  take turns
end

if the game was won
  congratulate the winner
else if the game was a draw
<<<<<<< HEAD
  tell the players it ended in a draw
=======
  tell the players it has been a draw
>>>>>>> tic-tac-toe-rb/master
end
```

Run the tests for the `#play` method by typing `rspec spec/02_play_spec.rb` in your terminal.

<<<<<<< HEAD
### The CLI: `bin/tictactoe`

Your `bin/tictactoe` CLI should:

1. Instantiate an instance of `TicTacToe`
2. Start the game by calling `#play` on that instance.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/oo-tic-tac-toe' title='Tic Tac Toe in Ruby'>OO Tic Tac Toe</a> on Learn.co and start learning to code for free.</p>
=======
# `gets` CLI Input

## Objectives
1. Understand the significance of capturing and operating on user input in a CLI application.
2. Create a prompt for user input in a CLI.
3. Use the `#gets` method to capture, store, and operate on that input.

## User Input and the CLI
>I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user. –– Bill Gates

It is inarguable that the advent of personal computing has changed the world and the way that individuals interact with it and with one another. The core of this revolution has been interactivity. The capability of computers to *be interacted with*. Who builds this interactive capability? We do! As a programmer, the underlying functionality of many of the applications you build will be interaction, the interaction between a user and your program. There are many ways in which that interaction can play out. Here, we'll discuss one of the most basic ways––the `#gets` method and the command line interface (CLI).  

## CLI Flow
The basic flow of a CLI app goes something like this:

1. Greet the user.
2. Ask the user for input.
3. Capture and store that input.
4. Do something with that input.

In this exercise, we'll be familiarizing ourselves with a CLI application that has already been built. To experience the user-flow of this application, first open this lab.

Run `learn` 

You'll need to modify the `greeting` method in `lib/hello_ruby_programmer.rb` so
that it accepts an argument called `name`.

**HINT:** Just change the line that reads `def greeting` to `def greeting(name)`.

Then run `ruby bin/greeting` in your terminal, from within the directory of this project.

Note that you are greeted, asked to provide input and then greeted again, this time with a phrase that uses the input you provided.

Let's take a closer look at the structure of this application.


## Project Structure
Check out the file structure below.

```
bin
   |–– greeting
lib
   |–– hello_ruby_programmer.rb
...
```  

Let's take a moment to review:

### The `bin` Directory
The `bin` directory holds our **executable** file. This file is responsible for running the program. It contains code that actually enacts the command line interaction––i.e. greeting the user, asking the user for input, storing that input and then acting on it.

Open up `bin/greeting`. Notice that we are requiring the `lib/hello_ruby_programmer.rb` file.

### The `lib` Directory
The `lib` directory is where we place the code that our program relies on to run. It is the meat of our CLI application. Our executable file *requires* the files in the `lib` directory and uses the code (for example, calling on any methods we might define) to enact the CLI.

Open up `lib/hello_ruby_programmer.rb` file. Notice that it defines a `#greeting` method that is called in the `bin/greeting` file. This is the pattern you'll become familiar with for CLI applications––defining methods in a `lib` directory and calling those methods in `bin` executable files to actually run the program.

Now, let's take a closer look at our code.

## The CLI Pattern
In `bin/greeting` you should see the following code:

```ruby
puts "Hi! Welcome to the wonderful world of Ruby programming."
puts "Please enter your name so that we can greet you more personally:"
name = gets.strip
greeting(name)
```

Here, we have all of the CLI flow steps outlined above. Let's break it down:

1 . Greet the user:

```ruby
puts "Hi! Welcome to the wonderful world of Ruby programming."
```

2 . Ask the user for input:

```ruby
puts "Please enter your name so that we can greet you more personally:"
```

3 . Capture that input using `#gets`

```ruby
name = gets.strip
```

4 . Use that input to do something else:

```ruby
greeting(name)
```

In this case, we are passing the user's input into the `#greeting` method as an argument. The greeting method then uses string interpolation to `#puts` out a personalized message.


## The `gets` Method
We've talked a lot about capturing and storing a user's input to the terminal and using it in our Ruby program. Now we'll take a closer look at exactly how that happens.

Let's take another look at our code from `bin/greeting`

```ruby
puts "Hi! Welcome to the wonderful world of Ruby programming."
puts "Please enter your name so that we can greet you more personally:"
name = gets.strip
greeting(name)
```

On the third line, the `gets` method is being called. Calling the `gets` method captures the last thing the user typed into the terminal. Whenever your program makes a call to `gets`, it will freeze and wait for user input.

### Waiting for the user Input
If the user never types anything in, your program will wait forever until it is otherwise exited. If you find your tests and your program stalling for long periods of time (anything over 5-10 seconds generally), you might be trapped in a gets.

From executing a program, a gets will look like:

![gets in program](https://dl.dropboxusercontent.com/s/ezddrtyotw5ahow/2015-09-10%20at%2012.12%20PM.png)

From a test run, a stalled gets will look like:

![gets in test](https://dl.dropboxusercontent.com/s/tijh1wyuvdfz11a/2015-09-10%20at%2012.13%20PM.png)

### Return value for `gets`
The return value of `gets` is the text typed into the terminal. So, setting a variable, `name`, equal to invoking the `gets` method sets that variable equal to the return value of `gets`––the last thing typed into the terminal. Then, the following line uses that `name` variable in string interpolation.

Once we store the return value of `gets` in a variable, we can treat that variable as we would any variable pointing to a string––interpolate with it, convert it to an integer, add it to an array, you name it.

Remember to run `learn submit` so you can move on to the next lesson. 

### Advanced: How `gets` gets input from the terminal
We already know, in general terms, how the `puts` method outputs text to the terminal, but here's a reminder from an earlier lesson, "Puts, Print and Return":

>How do the puts and print methods actually output text to your console? They use the `$stdout` global variable provided to us by Ruby. You don't need to worry about global variables right now. For the purposes of understanding how puts and print work, we just need to understand the following:

>Your computer has a stdout file that communicates with your operating system. So, puts and print actually send output to the `$stdout` variable. The `$stdout` variable sends that information to the stdout file on your computer which in turn communicates with your operating system which in turn outputs that information to the console.

The `gets` method works similarly. Just like your computer has a standard output file, it has a standard input file. When you enter text in your terminal, you are writing to that file. And, just like Ruby has a `$stdout` global variable, it has a `$stdin` global variable. The `$stdin` variable holds a stream from the standard input. It can be used to read input from the console.

The `gets` method wraps the `$stdin` variable, reading text from the standard input and allowing you to store that text in a variable, so that you can operate on it later.

### Sanitizing User Input: The `strip` and `chomp` Methods
One thing to know about the `#gets` method is that it captures a new line character at the end of whatever input it is storing. We don't want extra whitespace or new lines to be appended to the user input we are trying to store. So, we can chain a call to the `#strip`method to remove any new lines or leading and trailing whitespace.

The `#chomp` method works similarly, and you are likely to see `#gets.chomp` used in some examples online. The `#chomp` method removes any new lines at the end of a string while the `#strip` method removes whitespace (leading and trailing) *and* new lines.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/ruby-gets-input' title='gets CLI Input'>`gets` CLI Input</a> on Learn.co and start learning to code for free.</p>
>>>>>>> ruby-gets-input/master
=======
JavaScript Rock Dodger
---

## Objectives

1. Use JavaScript to build a rock-dodging game
2. Explain how `window.requestAnimationFrame()` is used to animate movement on a page
3. Explain how to use `setInterval()`
4. Show off your JavaScript know-how

## Instructions

You did it — you've made it to the end of the introductory JavaScript curriculum. You've learned how to write JavaScript and how to use JavaScript to manipulate the DOM. Now, only this lab stands between you and ~~freedom~~ the end of this course!

So that we don't catch you off-guard, know that this project is meant to be difficult. We're really testing the limits of what we've learned so far. But know that we've solved the lab using only things that we've taught — well, mostly. There are two things (which we've partially implemented for you) that you should know about.

### `window.requestAnimationFrame()`

This function tells the browser that we want to animate some change on the page. We'll use it in this lab for animating the movement of rocks and the dodger.

We can use [`window.requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) by passing it a callback that contains our animation:

``` javascript
function move(el) {
  var top = 0

  function step() {
    el.style.top = `${top += 2}px`

    if (top < 200) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}
```

If we call `move(el)` with a valid DOM element, `window.requestAnimationFrame()` will be called with the function `step`, which moves the `el` down the page in two-pixel increments until it's been moved 200 pixels. Pretty easy, right?

(Note that we can pass `step` to `window.requestAnimationFrame()` _inside_ of `step`. This is a nifty feature of JavaScript (and other languages) called [_recursion_](https://en.wikipedia.org/wiki/Recursion_(computer_science)). Don't worry if this concept makes your head spin a bit — that feeling is normal. For now, know that we can use `window.requestAnimationFrame()` as demonstrated above.)

### `setInterval()`

[`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) takes two arguments: a callback, and an interval in milliseconds. We can use it like so:

``` javascript
function sayHello() {
  console.log('hello')
}

const myInterval = setInterval(sayHello, 1000)
```

The above will print `'hello'` to console once every second.

Note that `setInterval()` returns a reference to the interval. We can stop the interval from executing by calling `clearInterval(myInterval)`.

### Getting Started

Open up `index.html` in your browser. You should see a black 400-by-400px box with a white square at the bottom. That square is the dodger — it can only move left and right.

Well, it _should_ be able to move only left and right — we'll need to implement that functionality!

Now open `index.js`. You'll see that we've defined a few functions for you, but we've left much of the file blank.

We've left enough comments to get you started, though, and we've defined all of the HTML and CSS that you'll need so that you can just focus on the JavaScript!

Remember to reload the page after updating and saving the file. You've got this!

Good luck!

## Resources

- [window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-rock-dodger'>Rock Dodger</a> on Learn.co and start learning to code for free.</p>
>>>>>>> javascript-rock-dodger/master
=======
# Barking Dog

## Objectives

1. Practice defining a class
2. Build instance methods––both setter and getter

![dog cartoon](https://s3-us-west-2.amazonaws.com/web-dev-readme-photos/oo-labs/dog.jpg)

## Introduction

In this lab, you'll be creating a Dog class. Every instance of a Dog should have
a name and be able to bark. In other words, I should be able to do:

```ruby
fido = Dog.new
fido.name = "Fido"

fido.name
# => "Fido"

fido.bark
woof!
# => nil
```

## Instructions

Run the test suite to get started. You'll be writing all your code in the `lib/dog.rb` file.

1. Define a class, called Dog. 
2. Write a setter method, `.name=`, that allows you to give a dog a name. 
3. Write a getter method, `.name` that returns an individual dog's name. 
4. Write a method, `.bark`, that `puts` "woof!" when called on an instance of Dog. 



<p data-visibility='hidden'>View <a href='https://learn.co/lessons/oo-barking-dog' title='Barking Dog'>Barking Dog</a> on Learn.co and start learning to code for free.</p>
>>>>>>> oo-barking-dog/master
=======
# Ruby Object Initialize Lab

## Objectives

1. Define a class with a custom initialize routine.
2. Set instance variable attributes from initialize.
3. Include a default argument for an initialize argument.

## Overview

You're going to be building a `Person` class that accepts a person's name when a person is initialized. You're also going to be building a `Dog` class that accepts a dog's name and breed on initialization. If no value for the dog's breed is provided, it should default to `"Mutt"`

## Instructions

Open this lab with `learn open` and run the tests with `learn`.

#### 1. `Person#initialize` with a Name

Define a `Person` class in `lib/person.rb` that provides an `#initialize` method that accepts an argument for the person's name. That argument should be stored within a `@name` instance variable.

#### 2. `Dog#initialize` with Name and Breed defaulting to "Mutt"

Define a `Dog` class in `lib/dog.rb` that provides an `#initialize` method that accepts an argument for the dog's name. That argument should be stored within a `@name` instance variable.

Additionally, `Dog#initialize` should accept a second optional argument for the dog's breed stored in an instance variable `@breed`. When none is provided, it should default to "Mutt".

Submit your solution with `learn submit`.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/ruby-object-initialize-lab' title='Ruby Object Initialize Lab'>Ruby Object Initialize Lab</a> on Learn.co and start learning to code for free.</p>
>>>>>>> ruby-object-initialize-lab/master
=======
# Ruby Object Attributes Lab

## Objectives 

1. Define ruby classes.
2. Define methods that read from and write to instance variables.
3. Create object properties using methods and instance variables.

## Overview

This lab is all about using instance variables within a class to create methods that represent attributes or properties of an object.

## Instructions

Get started with this lab by opening it with `learn open` and running `learn`.

## `Dog` and `lib/dog.rb`

### Give a Dog a Name

You'll be teaching `Dog` about their names through two methods, `#name`, and `#name=` that read and write to a corresponding instance variable `@name`.

### Give a Dog a Breed

You'll be teaching `Dog` about their breed through two methods, `#breed`, and `#breed=` that read and write to a corresponding instance variable `@breed`.

## `Person` and `lib/person.rb`

### Give a Person a Name

You'll be teaching `Person` about their names through two methods, `#name`, and `#name=` that read and write to a corresponding instance variable `@name`.

### Give a Person a Job

You'll be teaching `Person` about their jobs through two methods, `#job`, and `#job=` that read and write to a corresponding instance variable `@job`.

When you're done submit the lab with `learn submit`

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/ruby-object-attributes-lab' title='Ruby Object Attributes Lab'>Ruby Object Attributes Lab</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/ruby-object-attributes-lab'>Object Attributes Lab</a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/ruby-object-attributes-lab'>Object Attributes Lab</a> on Learn.co and start learning to code for free.</p>
>>>>>>> ruby-object-attributes-lab/master
=======
# Instance Methods Lab Ruby

## Objectives

1. Define a class.
2. Build instance methods for the class.

## Overview

You're going to be adding 2 instance methods to a `Dog` and `Person` class.
=======

# Classes And Instances Lab Ruby

## Objectives

1. Define new Ruby classes with the `class` keyword.
2. Instantiate instances of a `class`.

## Overview

This lab is all about defining classes and instantiating instances.
>>>>>>> classes-and-instances-lab/master

## Instructions

Open this lab with `learn open` and run your tests with `learn`.

<<<<<<< HEAD
#### 1. Define `Dog` in `lib/dog.rb`

Open `lib/dog.rb` and add a class definition for a `Dog` class.

#### 2. Define `#bark` in `Dog`

Add an instance method `#bark` to your `Dog` class in `lib/dog.rb` that will puts `"Woof!"`

#### 3. Define `#sit` in `Dog`

Add an instance method `#sit` to your `Dog` class in `lib/dog.rb` that will puts `"The Dog is sitting"`.

#### 4. Define a `Person` in `lib/person.rb`

Open `lib/person.rb` and add a class definition for a `Person` class.

#### 5. Define `#talk` in `Person`

Add an instance method `#talk` to your `Person` class in `lib/person.rb` that will puts `"Hello World!"`

#### 6. Define `#walk` in `Person`

Add an instance method `#walk` to your `Person` class in `lib/person.rb` that will puts `"The Person is walking"`.

When you're done, submit the lab with `learn submit`.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/instance-methods-lab-ruby' title='Instance Methods Lab Ruby'>Instance Methods Lab Ruby</a> on Learn.co and start learning to code for free.</p>
>>>>>>> instance-methods-lab/master
=======
### 1. Define `Dog` in `lib/dog.rb`

Open `lib/dog.rb` and add a class definition for a `Dog` class.

### 2. Make 3 dogs in `lib/dog.rb`

Under your `Dog` class definition, create three dogs in local variables, `fido`, `snoopy`, and `lassie`.

### 3. Define a `Person` in `lib/person.rb`

Open `lib/person.rb` and add a class definition for a `Person` class.

### 4. Make 2 people in `lib/person.rb`

Under your `Person` class definition, create two people in local variables, `adele_goldberg` and `alan_kay`

When you're done, submit the lab with `learn submit`.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/classes-and-instances-lab-ruby' title='Classes And Instances Lab Ruby'>Classes And Instances Lab Ruby</a> on Learn.co and start learning to code for free.</p>
>>>>>>> classes-and-instances-lab/master
=======
#### Reading the `#play` test specs and output

It'll help you a bit to understand how the tests are written for `#play` and what the failure output means. Open up `spec/02_play_spec.rb`. You'll see the first test block:

```ruby
it 'asks for players input on a turn of the game' do
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  allow($stdout).to receive(:puts)
  allow(self).to receive(:over?).and_return(false, true)

  expect(self).to receive(:gets).at_least(:once).and_return("1")

  play(board)
end
```

This test is built to confirm that your implementation of the `#play` method will at some point ask the user for input via the `gets` method. In order to ensure this requirement of the play method, our test needs to set up some conditions and expectations.

1 . First, we have a sample game board, `board`, as it would look at the start of the game, entirely empty.

```ruby
board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
```

2 . We state that any output to `$stdout` (which is how Ruby sends output to your terminal) should basically be ignored. Otherwise when we run our tests, we'll see all of our program's output and it'll be super confusing.

```ruby
allow($stdout).to receive(:puts)
```

3 . Our play method is going to involve looping. The test suite is going to ensure that when you build your game loop, you use the `#over?` method as a condition of when to end the loop. When we call `#play` in our test this loop will never end because there is no player input and no one ever wins the game in most of our tests. This would create an infinite loop in our test. So to avoid this, we fake the behavior of `#over?`, making sure it returns false the first time it is called and true the second.

```ruby
allow(self).to receive(:over?).and_return(false, true)
```

In this test it is as though the `#over?` method was defined to automatically return `false` the first time it is called and `true` all other times. Because the `#play` loop depends on `#over?`, when `#over?` returns true, the loop should end.

In our tests, we can stub the functionality of any method to behave exactly as we would like for this test to function and create the conditions that allow us to specify functionality. This technique of faking or hardcoding the return value and behavior of a method is called Mocking or Stubbing. It's a bit of an advanced technique in testing and for the most part, you don't need to worry about it.

4 . The main expectation of our test is that when `#play` is called, at some point the user will be prompted for input via the `gets` method. We set exactly this expectation:

```ruby
expect(self).to receive(:gets).at_least(:once).and_return("1")
```

The final bit of that, `and_return("1")`, states that when `gets` is called and the expectation is met, the call to `gets` should also be stubbed and return "1".

5 . Finally, after setting up the expectations of the behavior of `#play`, the test suite evokes the method. All expectations set must be met by the termination of that method call.

```ruby
play(board)
```


With a non-functioning `#play` method, let's look at the output of the failure.

```ruby
def play(board)
end
```

If we ran the test suite against that code in `lib/tic_tac_toe.rb`, we'd see.

```
1) ./lib/tic_tac_toe.rb #play asks for players input on a turn of the game
     Failure/Error: expect(self).to receive(:gets).at_least(:once).and_return("1")
       (#<RSpec::ExampleGroups::LibTicTacToeRb::Play:0x007fdafb0dea20>).gets(*(any args))
           expected: at least 1 time with any arguments
           received: 0 times with any arguments
     # ./spec/02_play_spec.rb:10:in `block (3 levels) in <top (required)>'
```

The key output is the failed expectation.

```
Failure/Error: expect(self).to receive(:gets).at_least(:once).and_return("1")
  expected: at least 1 time with any arguments
  received: 0 times with any arguments
```

The test is saying that during the call to `#play`, we expected the program to call `gets`, but it didn't. Let's fix this simply by updating the definition of `#play`.

```ruby
def play(board)
  input = gets
end
```

```
./lib/tic_tac_toe.rb
  #play
    asks for players input on a turn of the game

Finished in 0.0058 seconds (files took 0.1434 seconds to load)
1 example, 0 failures
```

And it works! We don't want to just use that, the `#play` method is way more complicated and probably shouldn't be calling `gets` itself but rather having some other method, like `#turn` call gets. As long as something `#play` does meets the expectations set, the test will pass.

#### Watch out for hanging test Stack Level Too Deep

The test may just appear to freeze in the middle or you might run into this error:

```
SystemStackError:
       stack level too deep
     # ./lib/tic_tac_toe.rb:60:in `puts'
     # ./lib/tic_tac_toe.rb:60:in `turn'
     # ./lib/tic_tac_toe.rb:67:in `turn'
     # ./lib/tic_tac_toe.rb:67:in `turn'
     # ./lib/tic_tac_toe.rb:67:in `turn'
     # ./lib/tic_tac_toe.rb:67:in `turn'
     ...
     ..
     .
```

This means that we're calling a method that gets stuck in an infinite loop. A common location where this occurs is testing the `play` method without using the `over?` method to determine if the game is over. This is because our test stubs the `over?` method to manually return true even when the game isn't over. So if you are not basing your decision in your code to stop taking turns when the game is `over?` then we end up in an infinite loop!

### The CLI: `bin/tictactoe`

Your `bin/tictactoe` CLI should:

1. Greet the players with "Welcome to Tic Tac Toe!"
2. Define a `board` array.
3. Display the starting board.
4. Begin the game by calling `#play`.

#### Tip: Using a Console

When building a large application like this one, it's useful to be able to explore your code through an interactive console that has all your code loaded. For example, imagine wanting to test your `#valid_move?` method. You might have built the method in `lib/tic_tac_toe.rb`, but besides finishing the entire lab and trying it in the context of your CLI or running the test suite and seeing output, it's very hard to know how the method you built behaves. So you might start `irb` in your terminal and copy the source of your `#valid_move` method into a new IRB session so you can play with it. But as the methods become more complex and dependent, that breaks down. So we've given you a console that will load your code for you into a sort of interactive playground.

First, run `bundle` to make sure all your gems are installed. Then, you can start the console with `rake console` in your terminal.

Imagine your `lib/tic_tac_toe.rb` containing:

```ruby
def move(board, index, player = "X")
  board[index] = player
end
```

If you run `rake console`, you'll see.

```
$ rake console
Loading your application environment...
Console started:
[1] pry(main)>
```

At your prompt, you can execute ruby just like you could in an IRB session. The only difference is that your console has already read all the code in your application, so you have access to it in this Pry session.

```
$ rake console
Loading your application environment...
Console started:
[1] pry(main)> board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
=> [" ", " ", " ", " ", " ", " ", " ", " ", " "]
[2] pry(main)> valid_move?(board, 0)
=> true
[3] pry(main)> board = ["X", " ", " ", " ", " ", " ", " ", " ", " "]
=> ["X", " ", " ", " ", " ", " ", " ", " ", " "]
[4] pry(main)> valid_move?(board, 0)
=> false
```

As you can see, it's easy to test the method with data we created.

## Play Your Game

Once you get all the tests to pass, play your game!

```
$ bin/tictactoe
```

Feel proud. You can't imagine how far we've come already.

## Code Coverage

Included with this lesson is a tool that will generate a Coverage Report that shows how much of our code is tested when we run our tests. After a test run, you can open the file generated in `coverage/index.html` from terminal with `open coverage/index.html` (**If you're using the Learn IDE, don't run the `open` command here. Instead run `httpserver` and then open the IP address noted in browser and select the link to `coverage/`**). It should pop up in your browser and look like:

![Coverage](https://dl.dropboxusercontent.com/s/59peed056jjk9xm/2015-09-20%20at%203.39%20PM.png)

When you click on `lib/tic_tac_toe.rb`, you'll see something like:

![Coverage 2](https://dl.dropboxusercontent.com/s/3xzof85jm0g5vwp/2015-09-20%20at%203.40%20PM.png)

The lines in green have been tested, the lines in red haven't. When all tests pass, you should see 100% test coverage.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/tic-tac-toe-rb' title='Tic Tac Toe in Ruby'>Tic Tac Toe in Ruby</a> on Learn.co and start learning to code for free.</p>
>>>>>>> tic-tac-toe-rb/master
