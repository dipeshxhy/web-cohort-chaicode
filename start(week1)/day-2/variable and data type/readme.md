# Variable In Js
to store value in memory , we need to assign space , locate space in memory.
and to used the value we used to name that space That space , memory location is called variable 

and There may be many type of value that is called data type

in js we do not check variable type , we do not give type to variable , we give type to value that i store in that name of memory which is variable so That why it's called data type or say value type

## Data Types :
 suppose I want to register some user in my website what are the info the user provide they give their email,password,profile,phone,fullName

 In js How we store this info Like this 
 ```
 let fullName="Shubash Singh"
 let email="shubash@mail.com"
 let password="1234"
 let profile="https://myprofile.jpg"
 
 ```
 Here every value in **""** is called string type value

 ## There are very few types of data type we have to keep in mind
 1. string ``` let name="The Rock ```
 2. number ``` let age=56 ```
 3. boolean ``` let isWrestler=true```
 4. null    **: it is complete emptyness which we explicitly provide**
 5. undefined **: it is also pointed nothing is there in memory if value is not given to variable then js give undefined to show there is nothing in  varaible**

 suppose we want to make collection or group some people
 then how to do then we used array data type it helps to make collection with one unique name pointed to all the people in that group
 ```
 let people = ["Rohan", "Mohan", "Sohan", "Mukesh"]

 //to access value used arrayName[position] position start from 0
 console.log(people[3])
 ```

 there is also one  data type to group  that is object, ot helps to make group in key- value pair
 we can make label and give value to that label in object
**it's syntax is:**
```
let people={
    name:'Mukesh',
    username:'promise_resolved',
    language:'js',
    isEmployee:true
}

```
## how to decide what to used between array and objects

array is also object type data but it stores value in ordered manner , ordered of data ais maintained in array and we can access value by index of array

on other hand, object helps to store value in property:value pair mainly it is used to describe some objects , real world objects






