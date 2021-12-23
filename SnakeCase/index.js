function SnakeCase(str) {
  return str.replace(/\W/g, '_').toLowerCase();
}

// keep this function call here 
console.log(SnakeCase(readline()));