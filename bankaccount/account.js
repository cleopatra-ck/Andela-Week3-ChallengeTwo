class BankAccount {
    constructor (name, balance) {
        // your code here
        this.name = name ;
      this.balance = balance; 



   }
    

    getBalance() {
        // your code here
 if (this.name != null) {
        return  ( "Your account balance is Ugx" + " " + this.balance);
       }  
       }

    open (minamount){ 
        // your code here
    
       var minamount;
       this.balance = minamount;
       if (this.name != null && this.balance > 0){
          return (this.name + " " + " is your account name and Ugx" + " " + this.balance + " " +"is your available balance.");
        }
            
        }
                

    deposit (newamount) {
        // your code here
        var newamount;
       if (this.name != null){
              this.balance += newamount;
    }
   return (this.name + " " + " this is your new balance Ugx" + " " + this.balance);
  }
  


    withdraw (amount ) {
        // your code here
        var amount;
        if (this.name != null && this.balance > amount){
    
          this.balance -= amount;
    }
    return (this.name + " " + " this is your new balance Ugx" + " " + this.balance);
    
} 

  
  close(name){

if (this.name = name && this.balance == 0){ 
  
  return undefined };

        
   }

      
      }
      
     var cleo= new BankAccount('cleo',1100);
        cleo.deposit(400);


        var Patra= new BankAccount('Patra',600);
        Patra.withdraw(100);
      
        var Pattie= new BankAccount('Pattie',100);
        Pattie.getBalance();

        
        var clio = new BankAccount('clio',0);
        clio.close(0); 

        var newacc = new BankAccount('newacc' ,5000);
        newacc.open(5000); 


       
     /* console.log (cleo);
      console.log (Patra);
      console.log (Pattie);
      console.log (clio);
      console.log (newacc);*/

       module.exports = BankAccount;
      
    
