const users = [
    {id: 1, name: 'ankur', job: 'doctor'}
]

console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'}
    ]
}
const firstJob = data.data[0].job;
console.log();

const user = {
    id: 5001,
    name: 'adison',
    address: {
        street: {
            first: '35/a kochikhet',
            second: 'hasu building',
            third: 'right side'
        },
        postOffice: 'cantonment'
    }
}

const userFloor = user.address?.stret?.second;
console.log(userFloor)