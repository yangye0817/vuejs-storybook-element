import faker from 'faker'

export const list = []
for (let i = 0; i < 325; i++) {
  list.push({
    id: faker.random.number(),
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
    modifyDate: faker.date.past()
  })
}
