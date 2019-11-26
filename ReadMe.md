//useful stuff to google 
Q) wata is react js  ? 
-> https://reactjs.org/

Q) what is redux 
-> google 

Q) boilerplate for project  is called create-react-app by facebook 
 ->boiler plate helps us with all necessary configuration needed for outr app. It was created by  faceboook itslef. 
 https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app

Q)WHy react native  ? 
->  you can googl for answer.  


project decomposition
1. Index.js = entry point of point.  This would be the first  to get executed. it is much of configuration then actual coding. 

2.  App/routes.js   =  this file holds all screen ( example,  MENU SCREEN, CART screen Information Modal ) which are in use througout project. It aslo holds the logic of  navigation between different screens. 


//  i realized that at some places i call dashboard screen as MENU screen , they both are infact one and the same. 


*** // a concept Which might help you in understnding Project  
In react native User Interface ( UI ) can be visualized as a pieces of code spitting out some UI whch is then rendered in mobile screen with some functionality associated to it. 
Consider this dashboard screen ( dashboard.js) for exmaple 

from a prespective of endUser Dash board screen displays  cards describing items in details . when you click on a card it opens and modal which either displays items information or prompts user to buy item.  

but, from a develoeprs prepective, we build single card seperately ( irrespective of dashbaord ) and import into dashboard and render it multiple times , where each time it renders it displays different item informamtion.  
pseudo code  
        1. itemsOfData = [ 'Granular Bar' , 'Avacado Toast' , 'Salad' , 'Wrap' ]
        // i will use javascript method called .map(https://www.geeksforgeeks.org/javascript-array-map-method/) it will iterate through each elements in array and display data inside 
        2.  itemsOfData.map( (individualData) => <Card> individualData</Card>)

        3. i will put this inside reder() method of react which will spit out UI in mobile screen. 



3.  App/ container / Dashboard.js
    the reason why we call it container is because it dashboard.js is stateful contianer, where heavy business logic for app resides and it can contol children cards. 
    example.  you are contolling card which is dummy component and not aware that other cards also exists and we ahve tied redux to dashboard compoennt 

4.  Cart .js



