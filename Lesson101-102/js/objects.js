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
    }
]

users.push(
    {
        name: 'Ivan',
        age: 30,
        isAdmin: true
    }
)

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}



const foo = 'Hello, world!'
console.log(foo.toUpperCase()) 