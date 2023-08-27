import { faker } from '@faker-js/faker'

const tutorialList = [{
    key: 0,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    description: faker.lorem.words(6),
    rating: "⭐" + Math.round(Math.random() * 5) + " " +faker.internet.userName()
},
{
    key: 1,
    avatar:faker.image.avatar(),
    name: faker.person.firstName(),
    description: faker.lorem.words(6),
    rating: "⭐" + Math.round(Math.random() * 5) + " " +faker.internet.userName()
},
{
    key: 2,
    avatar: faker.image.avatar(),
    name: faker.person.firstName(),
    description: faker.lorem.words(6),
    rating: "⭐" + Math.round(Math.random() * 5) + " " +faker.internet.userName()
},



]
export default tutorialList