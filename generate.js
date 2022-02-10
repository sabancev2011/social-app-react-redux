
const faker = require('faker');
const fs = require('fs');

let data = () => ({
    users: [...Array(25)].map((_, index) => ({
        id: index + 1,
        img: `https://image.freepik.com/free-photo/_176420-${Math.floor(Math.random() * 10000)}.jpg?size=150`,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        country: faker.address.country(),
        city: faker.address.city(),
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        dateOfBirth: faker.date.between('1975-01-01', '2000-01-01').toLocaleDateString(),
        password: faker.internet.password()
    })),
    messages: [...Array(100)].map((_, index) => ({
        id: index + 1,
        messages: [],
    })),
    posts: [...Array(100)].map((_, index) => ({
        id: index + 1,
        posts: [],
    })),
    friends: [...Array(100)].map((_, index) => ({
        id: index + 1,
        friends: [],
    })),
})

fs.writeFileSync("./db.json", JSON.stringify(data()))

