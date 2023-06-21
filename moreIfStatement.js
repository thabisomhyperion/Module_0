
//molatos@hyperiondev.com

/* we have two inputs num1 and num2 
const num1 = 5;
const num2 = 10;
const num3 = 15;  
if ((num1 > 10 && num2 > 20)) || num3 >= 14)
  //          false             true
{
  console.log('All conditions are met')
}else
{
  console.log('not all conditions are met')
}

firstcondition  secondcondition    output
 true              true            true
 false              X              false
 X                  false          false
 false              false          false
&& operator two condition must be true for output to be true*/ 


/* Courier Companies

d = DHL  tarrif(30km) = R20.99 and the rest of Km = R12 p\km  T = 20.99 + ((35 - 30) * 12 )
c = Courier Guy tarrif(20km) = R21.00 and the rest of km = R13.00 p\km T = 

t = Takealot tarrif(25km) = R21.00 and the rest of km = R12.00 p\km T = 

user input = character (d, c or t)
Total_price(R)
tarrif(R)
Distance_travelled(km)
*/

courier_company =prompt("Enter courier company (d - DHL or c - Courier Guy or t - takealot ): ").toUpperCase()

distance_travelled = Number(prompt("Enter distance travelled(km): "))
                            
let tarrif = 0.00
let total_price = 0.00


if (courier_company == "D"){

    if (distance_travelled <= 30)
    {
      total_price =  20.99
      console.log(total_price)
      console.log(courier_company)
    }else
    {
      tarrif = 12.00
      total_price = 20.99 + (distance_travelled - 30) * tarrif
      console.log(total_price)
      console.log(courier_company)
    }
}else if(courier_company == "C"){
    if (distance_travelled <= 20)
    {
      total_price =  21.00
      console.log(total_price)
      console.log(courier_company)
    }else
    {
      tarrif = 13.00
      total_price = 21.00 + (distance_travelled - 20) * tarrif
      console.log(total_price)
      console.log(courier_company)
    }
}else if (courier_company == "T")
{
    if (distance_travelled <= 25)
    {
      total_price =  21.00
      console.log(total_price)
      console.log(courier_company)
    }else
    {
      tarrif = 12.00
      total_price = 20.99 + (distance_travelled - 25) * tarrif
      console.log(total_price)
      console.log(courier_company)
    }
}else{
  console.log('Please enter correct code for courier')
}




















/*courier_company =prompt("Enter courier company: ").toUpperCase()
kilometers = Number(prompt("Enter kilometers: "))
console.log(kilometers +10)*/