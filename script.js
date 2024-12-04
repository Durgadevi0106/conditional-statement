// Task-1  ONLINE LIBRARY MEMBERSHIP
/**
 Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:
Basic Membership: Access to only free books.
Standard Membership: Access to free books and discounted paid books.
Premium Membership: Access to all books, including exclusive content.
Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
 */
var memberShip = "Premium Membership";
if (memberShip == "Basic Membership") {
    console.log("Basic Membership :Access to only free books");
}
else if (memberShip == "Standard Membership") {
    console.log(" Standard Membership:Access to free books and discounted paid books");
}
else if (memberShip == "Premium Membership") {
    console.log("Premium Mumbership:Access to all books,including exclusic content");
}
else {
    console.log("Invalid Membership");
}

console.log("-------------------------------")
//task-2 E-commerce Discount Application
/**
 * Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:
Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.
VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.
Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.
 */
var membershipStatus = "VIP Customer";
var purchasePrice = -300;
if (membershipStatus === "Regular Customers") {
    if (purchasePrice < 100 && purchasePrice > 0) {
        discount = 0; //0% discount
        console.log(`Final price after discount:${purchasePrice - purchasePrice * discount}`)
    }
    else if (purchasePrice >= 100 && purchasePrice <= 500) {
        discount = 0.05; //5% discount
        console.log(`Final price after discount:${purchasePrice - purchasePrice * discount}`)
    }
    else if (purchasePrice > 500) {
        discount = 0.10;
        console.log(`Final price after discount:${purchasePrice - purchasePrice * discount}`)
    }
    else {
        console.log("Negative purchase amounts are Invalid")
    }
}
else if (membershipStatus === "VIP Customers") {
    if (purchasePrice < 100 && purchasePrice > 0) {
        discount = 0.10;  // 10% discount
        console.log(`Final price after discount:${purchasePrice - purchasePrice * discount}`)
    } else if (purchasePrice >= 100 && purchasePrice <= 500) {
        discount = 0.15;  // 15% discount
        console.log(`Final price after discount:${purchasePrice - purchasePrice * discount}`)
    } else if (purchasePrice > 500) {
        discount = 0.20;  // 20% discount
        console.log(`Final price after discount:${purchasePrice - purchasePrice * discount}`)
    }
    else {
        console.log("Negative purchase amounts are Invalid")
    }
}
else{
    console.log("Negative purchase amounts or unrecognized membership statuses.")
}
console.log("----------------------------")
// Task-3   Academic Scholarship Eligibility     
/** Context: A university offers scholarships to students based on their GPA and extracurricular involvement:
Merit-Based Scholarship: Requires a GPA of 3.5 or higher.
Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.
Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.
Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.
*/
var GPA=5;
var extracircculamActivities=3;
var communityServicesHours=80;
if(communityServicesHours>=100 &&GPA>=2.5 && GPA<=10){
         console.log("Community Scholorship")    
}
else if(extracircculamActivities>=2 && GPA>=3.0 && GPA<=10){
    console.log("Leadership Scholarship")
}
 else if(GPA>=3.5 && GPA<=10){
    console.log("Merit Scholorship")    
}
else if(GPA>10){
  console.log("Invalid GPA")
}
else{
    console.log("Your Disqualified for scholorship")
}

console.log("----------------------------------")
// Task-4  Movie Ticket Pricing
/**
 * Context: A movie theater charges different prices based on the day of the week and the customer's age:
Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.
Weekends: Standard price of $15. Seniors and children receive a 30% discount.
Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
 */
var day="weekends";
var age=41;
if((day=="weekdays"||day=="weekends") && (age<0 || age>90)){
         console.log("Invalid Details")
}
else if(day=="weekdays" &&(age<=12||age<=65)){
        var price=450
        console.log(`Standard Price${price}`)
        discount=0.5;
        console.log(`The discount price of ticket of standard price is:${price-price*discount}`)
}
else if ( (age<=12||age<=65)&&day=="weekends"){
    var price=600
    console.log(`Standard Price${price}`)
    discount=0.3;
    console.log(`The discount price of ticket of standard price is:${price-price*discount}`)
}
else(
    console.log("Enter Details correctly")
)
console.log("--------------------------------------------------")
// Task-5  Event Registration Validation
/**
 * Context: An event registration system needs to validate user inputs before confirming their registration:
*The user must be 18 years or older to register.
*The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.
*The user must provide a valid email address.
*Question: You have variables for the user’s age, the number of participants already registered, and their email address.
 Use conditional statements to validate whether the user can register for the event. 
 Think about how to handle cases where some or all conditions are not met.
 ?*/
var userAge=25;
var participants=89;
var email="durga@gmail.com"
if(userAge<18){
         console.log("User must be 18 years or older to register")
}
else if(participants>=100){
    console.log("The event is full, no more registrations are accepted")
}
else if(userAge>=18 && email.includes("@")&&email.includes(".")){
    console.log("User registration Successfully")
}
else{
    console.log("Check your email pattern")
}
