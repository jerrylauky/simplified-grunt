#Simplified Grunt

As the size of my work project grows exponentially within just a few months, so does the Gruntfile.  
Evetually it became quite painful to maintain. So I took some of my spare time to split/reorganize grunt tasks based on an article I found (https://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/).

The following tasks are completed:
* Autoload grunt tasks using [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
  * But was removed later on because it is included in load-grunt-config, see below.
* Split up grunt tasks using [load-grunt-config](https://github.com/firstandthird/load-grunt-config)
  * where each grunt task is now defined in one file and stored under the **grunt/** directory
* Move variables around to ensure they still get passed properly into each grunt task file
* Break down the registerTasks into smaller chunks for flexibility
* Rewrote some of the glob patterns for file paths to keep grunt tasks short

##Installation

```
jerrylauky$> mkdir simplified-grunt && cd simplified-grunt && git clone <this-repo-here>.git .

jerrylauky$> npm install && bower install  // install dependencies

```

Run App:

```
jerrylauky$> grunt dev                     // run app

jerrylauky$> grunt prod:quick              // build with file compression and run app

```

Feel free to leave comments to let me know if there's anything else I can improve on this.
