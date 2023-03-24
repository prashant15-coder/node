//globals - no windows
//no window objects
//anywhere we can use them
//__dirame -path to current directory
//__filename = file name
//require = function to use modules(common js)
//module = info about current modules(file)
//process = info about env where the program is eing executed (when we did api development  this process comes in handy beacuse server is in different environent and because of that we need to use this)
console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000);