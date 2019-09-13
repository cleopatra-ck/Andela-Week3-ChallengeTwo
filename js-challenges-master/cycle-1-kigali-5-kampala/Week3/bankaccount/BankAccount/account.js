class BankAccount {
    constructor (name, balance) {
        // your code here
        this.name = name;
      this.balance = balance; 
   }
    

    getBalance() {
        // your code here
 if (this.name != null) {
        return (this.name + " " + "your account balance is Ugx" + " " + this.balance);
       }  
       }

    open (){ 
        // your code here
    
        var FirstName = prompt("enter your firstName ");
       var LastName = prompt ("enter your LastName ");
       var newamount = prompt ("enter minimum amount");
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
        if (this.name != null && this.balance > amount){
    
          this.balance -= amount;
    }
    return (this.name + " " + " this is your new balance Ugx" + " " + this.balance);
    
} 

  
  close(){

if (this.name = name && this.balance == 0){ 
  
  return undefined }

        
   }

      
      }
      
      var user1= new BankAccount(Cleo,2000);
        user1.open();
        user1.deposit();


        var user2 = new BankAccount(Cliio,500);
        user2.withdraw();
        user2.getbalance();


        
        var user3 = new BankAccount(Patra
        ,0);
        user3.close(); 


        module.exports = BankAccount;
      
      
      
    
