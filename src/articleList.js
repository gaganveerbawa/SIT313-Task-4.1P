import { faker } from '@faker-js/faker'

const articleList = [{
    key: 0,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    description: faker.lorem.words(6),
    rating: "⭐" + Math.round(Math.random() * 5) + " " +faker.person.lastName()
},
{
    key: 1,
    avatar:faker.image.avatar(),
    name: faker.person.firstName(),
    description: faker.lorem.words(6),
    rating: "⭐" + Math.round(Math.random() * 5) + " " +faker.person.lastName()
},
{
    key: 2,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    description: faker.lorem.words(6),
    rating: "⭐" + Math.round(Math.random() * 5) + " " +faker.person.lastName()
},



]
export default articleList