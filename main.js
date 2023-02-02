function fizzbuzz(number){
  // Check if number % 3
  if ((number % 3 == 0) && (number % 5==0))
    console.log("Fizzbuzz")
  // Check if number % 5
  else if(number % 5==0)
    console.log("buzz")
  else if (number % 3 == 0)
    console.log('fizz')
  else
    console.log(number)
}
fizzbuzz(9)

var pet ={
  name: 'Pheobe',
   breed: 'lasa apsu',
  age: 8
}
console.log ('Hello '+ pet.name)
pet.age=7
// Pheobe is 8 years old
console.log (pet.name+' is '+pet.age+' years old')
var animals =['cat','dog','cow','pig']
// Pheobe is a dog
console.log (pet.name+' is a '+animals[1])
console.log (animals.length)
animals.push('sheep')
animals[3]='horse'
console.log(animals)


for (var i=4;i>=0;i--){
  console.log(i)
  console.log(animals[i])
}
var counter=24
while (counter>0){
  console.log (counter)
  counter--
}
