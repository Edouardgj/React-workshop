import { User } from './types'

const base_url = 'http://localhost:3004/users'

async function getAllUser(): Promise<Array<User>> {
    // Get all users
    // [TODO] remove this return to use a fetch API
    const response = await fetch(base_url);
    return await response.json();
    
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

export { getAllUser, getUser }