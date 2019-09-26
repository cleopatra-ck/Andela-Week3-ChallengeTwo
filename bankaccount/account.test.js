// tests here
       
const BankAccount =   require('./account');

test('account deposit', () => {
    const cleo = new BankAccount('cleo',1100);
    expect(cleo.deposit(400)
    ).toBe("cleo  this is your new balance Ugx 1500");
    
})

test('account withdraw', () => {
    const clio = new BankAccount('clio',600);
    expect(clio.withdraw(100)
    ).toBe("clio  this is your new balance Ugx 500");
    
})
    


test('account get balance', () => {
    const pattie = new BankAccount('pattie',100);
    expect(pattie.getBalance()
    ).toBe("Your account balance is Ugx 100");
    
})

test('open account', () => {
    var newacc = new BankAccount('newacc' ,5000);
        expect(newacc.open(5000)
    ).toBe("newacc  is your account name and Ugx 5000 is your available balance.");
    
})
          
test('closed account', () => {
    var clio = new BankAccount('clio' ,0);
        expect(clio.close()
    ).toBe(undefined);

})
    



        
