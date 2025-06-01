const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'John',
        age: 30,
        isAdmin: true
    },
    {
        name: 'Kilian',
        age: 76,
        isAdmin: false
    },
    {
        name: 'Vera',
        age: 36,
        isAdmin: true
    },
    {
        name: 'Tom',
        age: 18,
        isAdmin: false
    }
]

let regularUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        regularUsersCount++;
    }
}
console.log('Количество обычных пользователей:', regularUsersCount);
