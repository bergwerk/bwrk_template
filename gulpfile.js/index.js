/*
 gulpfile.js
 ===========
 Rather than manage one giant configuration file responsible for creating  multiple tasks,
 each task has been broken out into its own file in gulpfile.js/tasks. Any files
 in that directory get automatically required. Add a task file to that directory to create
 a new task.

 gulpfile.js/tasks/default.js specifies the default tasks to run when you run `gulp`.
 */

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
var dir = requireDir('./tasks', {recurse: true});
