import { User } from './types'
import axios from 'axios'

const base_url = 'http://localhost:3004/users'

function getAllUser(): Array<User> {
    // Get all users
    // [TODO] remove this return to use a fetch API
    return [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
            },
            phone: '1-770-736-8031 x56442',
            company: {
                name: 'Romaguera-Crona',
            },
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
            },
            phone: '010-692-6593 x09125',
            company: {
                name: 'Deckow-Crist',
            },
        },
    ]
}
async function createUser(user: User): Promise<User> {
    // create a new post
    // [TODO] remove this return to use a fetch API
    const { data } = await axios.post(`${base_url}`, user)
    return data
}
async function updateUser(user: User): Promise<User> {
    // update a existing post
    // [TODO] remove this return to use a fetch API
    const { data } = await axios.put(`${base_url}/${user.id}`, user)
    return data
}

async function deleteUser(userID: User['id']): Promise<User['id']> {
    // delete a existing post
    // [TODO] remove this return to use a fetch API
    const { data } = await axios.delete(`${base_url}/${userID}`)
    return data
}


async function getUser(id: User['id']): Promise<User> {
    // Get a user
    // [TODO] remove this return to use a fetch API
    return {
        id,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
        },
        phone: '1-770-736-8031 x56442',
        company: {
            name: 'Romaguera-Crona',
        },
    }
}

export { getAllUser, getUser,createUser,updateUser,deleteUser }
