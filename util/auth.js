import axios from "axios"


const API_Key = 'AIzaSyBH4T7oQs7VlLHiAB1fZ0AE1dZ601gYg5'
export async function createUser(email, password){
    const response = axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_Key,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }

    );
}