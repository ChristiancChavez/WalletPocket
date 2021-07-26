export const loginRules = [
    {
        variable: 'User Name',
        id: 'username',
        rules : ['Minimun 8 lettes', 'no sensitive case', 'Maximun 15 letters']
    },
    {
        variable: 'Amount wallet',
        id: 'amountwallet',
        rules : ['Minimun 4 numbers', 'Maximun 10 numbers', 'The currency is $COP']
    }
]