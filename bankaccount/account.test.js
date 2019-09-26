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
    
const BankAccount = require('./account.js');

test('Will not accept an empty name field as input', () => {
    expect(BankAccount(this.name == null)).toBe('invalid input');
});


test('Will not accept name as number input', () => {
        expect(BankAccount(this.name == Number )).toBe('invalid input');
    });


    test('Will not accept balance as character input', () => {
        expect(BankAccount(this.balance == (/[a-zA-Z]/gi) )).toBe('invalid input');
    });

test('Will return a bank account', () => {
    expect(
         deposit (name, balance)
        .toEqual(
            (Cleo, 2000)))});
            
        ;

  test('transactions against a closed account will fail', () => {
  expect(
     Close( Cleo, 0)
         ).toEqual(
                        (undefined)
                        );


            
});


        
