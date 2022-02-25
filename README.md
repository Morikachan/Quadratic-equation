# Quadratic equation solver
This is the program for solving different quadratic equation with usage of JavaScript and NodeJS.

## Installation
Firstly, let's start from repository.
You can download [Zip file](https://github.com/Morikachan/quadratic-equation/archive/refs/heads/main.zip) from main page of repository.

Or clone this repository to your local system:

```
$ git clone https://github.com/Morikachan/quadratic-equation.git
```

After one of the previous options you can download all necessary dependencies:

```
$ npm install
```

## Usage

This program has two modes: 

<details>
  <summary>Interactive</summary>
      <p>Input numbers from console.</p>
</details>

<details>
<summary>Non-Interactive</summary>
<p>Numbers are read from txt file.</p>
</details>

### Interective mode

```
$ npm start
```

### Non-Interactive mode

```
$ npm start 'file_name'.txt
```

#### Recomendation for Non-Interactive mod

For correct work of program, write your numbers in the file in this pattern: number'*space*'number'*space*'number

```
72 9 345
```

## Example of working

### Interactive mode

```
$ npm start

> quadratic-equation@1.0.0 start
> node index.js

Interactive mode on.

Input a: 4
Input b: 6
Input c: 2

Equation is: 4x^2 + 6x + 2
There're two roots:
x1 = -0.5
x2 = -1
```

### Non-Interactive

```
$ npm start testN.txt

> quadratic-equation@1.0.0 start
> node index.js "testN.txt"

Non-interactive mode on.

Equation is: 4x^2 + 6x + 2
There're two roots:
x1 = -0.5
x2 = -1
```

## Revert commit
[39ff9b9415c17a44ad9a0b3b395f856380d531c6](https://github.com/Morikachan/quadratic-equation/commit/095f052f91b040a0c630837771c46391f71d5623)
