// tests here
       
const BankAccount = require('./BankAccount');

test('Will not accept an empty name field as input', () => {
    expect(BankAccount(this.name == null)).toBe('invalid input');
});


test('Will not accept name as number input', () => {
        expect(BankAccount(this.name == Number )).toBe('invalid input');
    });


    test('Will not accept balance as character input', () => {
        expect(BankAccount(this.balance == (/[aeiou]/gi) )).toBe('invalid input');
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


        