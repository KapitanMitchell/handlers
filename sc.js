let car = [
    "Mersedes",
    "Toyota",
    "Burym"
]

const template = Handlebars.compile(document.getElementById('template').innerHTML);
   
    const data = { name: "World" };
  document.getElementById('content').innerHTML = template(data);