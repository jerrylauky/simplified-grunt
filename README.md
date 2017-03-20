# Simplified Grunt

## Objective

As the size of my work project grows exponentially within just a few months, so does the Gruntfile.  
Evetually it became quite painful to maintain. So my goal was to improve Gruntfile for maintainability. 
I took some of my spare time to split/reorganize grunt tasks.

The following tasks are completed:
* Autoload grunt tasks using [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
  * But was removed later on because it is included in load-grunt-config, see below.
* Split up grunt tasks using [load-grunt-config](https://github.com/firstandthird/load-grunt-config)
  * where each grunt task is now defined in one file and stored under the **grunt/** directory
* Move variables around to ensure they still get passed properly into each grunt task file
* Break down the registerTasks into smaller chunks for flexibility
* Rewrote some of the glob patterns for file paths to keep grunt tasks short

## Installation

**Install repo**:

```
jerrylauky$> mkdir simplified-grunt && cd simplified-grunt && git clone <this-repo-here>.git .
```

**Install dependencies**:

```
jerrylauky$> npm install && bower install
```

**Run app**:

```
jerrylauky$> grunt dev
```

**Build with file compression and run app**:

```
jerrylauky$> grunt prod:quick
```
  
  
  
##TODOs:

* further update grunt so that it changes app configurations dynamically based on the environment specified
  
  
Feel free to leave comments to let me know if there's anything else I can improve on this.
