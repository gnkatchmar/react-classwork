<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30>Build Automation and Dependency Management
===

## Issues and Questions
* My canvas account was set to mtn time. Let's standardize on 1pm!
* Questions from material and lab?

## Course Overview

## ES6

* New kata assignments!
* `let` and `const`

## Tools

### `eslint`
* Use of [env and parserOptions](http://eslint.org/docs/user-guide/configuring)
* `"extends": "eslint:recommended"`
* [rules](http://eslint.org/docs/rules/)

## Personal Training
* Overview from Amy

## Learning Objectives
* Install and track third party module dependencies 
_using `npm` and the project `package.json` file_.
* Copy and run other projects _using cloned git repos and `npm i`_
* Setup and run a build scripts for: 
    * linting code _using eslint_ 
    * running unit tests
        * once
        * when a `.js` file changes.
* Maintain a change log and understand `major.minor.patch` 
schema of Semantic Versioning

## Agenda

### Importing and Exporting Modules
* Why Module?
    * Readability
    * Organization
    * Seperation of Concerns
    * Namespace ("global" scope per file)
    * Reduce Merge Conflicts
* Passing things between modules?
    * 301 - Using Global namespace has Issues
    * Define mechanism for "exporting" and "importing"
    * (not every file has to have a wrapping IIFE)
* `module.exports =`
* `= require()`
    * relative path from current file
    * use standard NIX `./`, `../../`, etc.
* module export is cached
* resolving modules
    * `path` notation
    * static name
        * built-in node module
        * local `node_modules`
        * global `node_modules`

### `npm`
* Package Management
    * installing and updating locally available resources
* Tracking
* Publishing

## Build System
* Why?
    * Developer Sanity
    * Consistency of Process
* npm scripts
    * `npm run <script>`
    * `npm test` and `npm start`
    * `pre` and `post`
    * `--`
* Project Organization
    * `./lib` folder

## Versioning

* Semver
    * major - break
    * minor - add
    * patch - fiz

* CHANGELOG

