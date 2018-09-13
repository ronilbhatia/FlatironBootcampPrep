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

These files set up some tools and gems for our project and can mostly be ignored. Make sure to run `bundle` before starting this project so that you have all the required gems.

#### `bin/tictactoe`

This is our main executable and will be how we run our game.

#### `lib/tic_tac_toe.rb`

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

1. Present on the game board.
2. Not already filled with a token.

#### `#turn`

Build a method `#turn` to encapsulate the logic of a single complete turn composed of the following routine:

1. Ask the user for their move by specifying a position between 1-9.
2. Receive the user's input.
3. Translate that input into an index value.
4. If the move is valid, make the move and display the board.
5. If the move is invalid, ask for a new move until a valid move is received.

All these procedures will be wrapped into our `#turn` method. However, the majority of the logic for these procedures will be defined and encapsulated in individual methods that you've already built.

You can imagine the pseudocode for the `#turn` method:

```
ask for input
get input
translate input into index
if index is valid
  make the move for index
  show the board
else
  ask for input again
end
```

#### `#turn_count`

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

### Putting it all together: the `#play` method

#### `#play`

The play method is the main method of the Tic Tac Toe application and is responsible for the game loop. A Tic Tac Toe game must allow players to take turns, checking if the game is over after every turn. At the conclusion of the game, whether because it was won or ended in a draw, the game should report to the user the outcome of the game. You can imagine the pseudocode:

```
until the game is over
  take turns
end

if the game was won
  congratulate the winner
else if the game was a draw
  tell the players it ended in a draw
end
```

Run the tests for the `#play` method by typing `rspec spec/02_play_spec.rb` in your terminal.

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
