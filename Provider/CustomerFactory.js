
// factory is a kind of class that takes the responsibility of creating the object
// factory is nothing but provider . like this factory provides customer objects
function FactoryCustomer(){
var _Create = function(Type){
    if(Type == "Simple"){
        return new Customer();
    }
    else if(Type == "WalkIn"){
        return new WalkInCustomer();
    }    
    else{
        return new Lead();
    }
}
return{
    Create : _Create
}
}