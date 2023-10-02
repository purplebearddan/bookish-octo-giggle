interface Customer {
    name: string,
    age?: number
}


const customers: Customer[] = [
    {name:"Jane", age: 26}, 
    {name:"John", age: 27}, 
    {name:"Nancy"}, 
    {name:"Tom", age: 26}
]
/**
 * # Dan's Greeter
 * simple greeter function
 * @param customer: A Customer object containing a name(string) and optionally an age(number)
 *  
 */
const greeter = (customer: Customer):string => {
    return `Hi ${customer.name}, thanks for joining us`
}


customers.forEach(customer => console.log(greeter(customer)))