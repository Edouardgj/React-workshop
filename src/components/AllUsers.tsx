import React, { useReducer,useEffect, useState } from 'react'
import { User } from '../api/types'
import {getAllUser,createUser,updateUser,deleteUser} from '../api/user'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Field from '../private/Field'

type FormEvent =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>

type FormData = { name: string; value: string | number | undefined }

const formReducer = (state: User | User, event: FormData) => {
    return {
        ...state,
        [event.name]: event.value,
    }
}

const AllUsers = () => {
    const [users, setUsers] = useState<Array<User>>([])
    const [formData, setFormData] = useReducer(
        formReducer,
        {} as User | User
    )
    let { id } = useParams() // post id from url
    const navigate = useNavigate() // create a navigate function instance


    async function _getAllUsers(){
        console.log("useEffect");
        const data = await getAllUser();
        setUsers(data)
    }

    async function handleAddOrCreateUser(
        event: React.FormEvent<HTMLFormElement>
    ) {
        console.log(formData)
        // remove default reloading page
        event.preventDefault()

        if (id) {
            await updateUser(formData as User)
        } else {
            await createUser(formData)
        }

        // back to Home
        navigate('/')
    }

    async function handleDeleteUser() {
        await deleteUser(Number(id))
        // back to Home
        navigate('/')
    }

    function handleChange(event: FormEvent) {
        //
        const value =
            event.target.name === 'userId'
                ? Number(event.target.value)
                : event.target.value
        setFormData({
            name: event.target.name,
            value,
        })
    }


    useEffect(() => {
        _getAllUsers();
    }, []);

    function renderUsers(values: User){
        return (
            <div key={values.id}>
                <h1>{values.name}</h1>
                    <ul>
                        <li>Pseudo : {values.username}</li>
                        <li>Email: {values.email}</li>
                    </ul>
            </div>
        )
    }

    return (
        <>  
            <ul className="user-list">{users.map(renderUsers)}</ul>
            <form className="user-form" onSubmit={handleAddOrCreateUser}>
                <Field label="Nom">
                    <input
                        onBlur={handleChange}
                        name="name"
                        className="input"
                        type="text"
                        placeholder="Text input"
                        value={formData.name}
                    />
                </Field>
                <Field label="email">
                    <input
                        onBlur={handleChange}
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Text input"
                        value={formData.email}
                    />
                </Field>
                {!!id && (
                    <Field label="Extra actions">
                        <button
                            type="button"
                            className="button is-warning"
                            onClick={handleDeleteUser}
                        >
                            Delete User
                        </button>
                    </Field>
                )}
                <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                        <button type="submit" className="button is-primary"
                        >                          
                            Submit
                        </button>
                    </p>
                    <p className="control">
                        <Link to="/" className="button is-light">
                            Cancel
                        </Link>
                    </p>
                </div>
            </form>
        </>
    )
}

export default AllUsers