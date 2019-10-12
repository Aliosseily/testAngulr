//provide things to the angular controller (bin der)

   // provide configuration using angular provider
    myApp.config(function($provider){
        //here you can provide your Constants / Values / Utility / Model

       // provide constants
       //the name of provider "Constants" come from the injection name in Binders
       $provider.costants("Constatns" , ProjectConstants)
       // provide values
       $provider.values("Values" , ProjectValues)
       // provide utility
       // we need to inject utility in a global way
       // so we use sevice because it is a global object
       $provider.service("Utility" , Utility) // global objects 
       // provide model
       $provider.provider("FactoryCustomer" , function(){
       var t = new FactoryCustomer();
       function _Create(_type){
           return t.Create(type)
       }
       return{
           $get : function(){
               return{
                   Create:_Create
               }
           }
       }
    })        
  })