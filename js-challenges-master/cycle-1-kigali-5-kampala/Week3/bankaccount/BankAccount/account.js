class BankAccount {
    constructor (name, balance) {
        // your code here
        this.name = name;
      this.balance = balance; 
   }
    

    getBalance() {
        // your code here
 if (this.name != null) {
        return (this.name + " " + "your account balance is Ugx" + " " +this.balance);
       }  
       }

    open (){ 
        // your code here
    
        var FirstName = prompt("enter your firstName ");
       var LastName = prompt ("enter your LastName ");
       var newamount = prompt ("enter minimum deposit");
       this.name = FirstName + " " + LastName;
      this.balance = newamount;
       if (this.name != null && this.balance > 0){
          return (this.name + " " + " is your account name and Ugx" + " " + this.balance + "is your available balance.");
        }
            
        }
                

    deposit () {
        // your code here
       if (this.name != null){
              this.balance += newamount;
    }
    return (this.name + " " + " this is your new balance Ugx" + " " + this.balance);
  }
  


    withdraw ( ) {
        // your code here
        if (this.name != null && this.balance > newamount){
    
          this.balance -= newamount;
    }
    return (this.name + " " + " this is your new balance Ugx" + " " + this.balance);
    
} 

  
  close(){



        

    }

      
      }
      
      
      
      
      
    
