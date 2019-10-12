function Customer(){
    this. FirstName = "Shiv"; // dispay it in uppercase
    this. LastName = "Koirala";
    this. Amount = "90909"; // display Round 2 , 3 
    this. PhoneNumber = "03256855";
    this.Validate = function(){
    if( this.FirstName.length == 0 || this.LastName.length == 0 || this.Amount.length == 0){
        return false;
    }
    return true;
    }
}

function WalkInCustomer(){
    this.Validate = function(){
        if(this.Amount.length == 0){
            return false;
        }
        return true;
        }
}
// using prototype we got all the properties in customer like inheritance
WalkInCustomer.prototype = new Customer();

function LeadCustomer(){
    this.Validate = function(){
        if(this.PhoneNumber.length == 0){
            return false;
        }
        return true;
        }
}

LeadCustomer.prototype = new Customer();