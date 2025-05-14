import axios from 'axios'

const accounts = axios.create ({
    baseURL: 'http://localhost:9010/api/accounts'
})

export const GetAccounts = async()=> {
    return await accounts.get('',{})
}

export const CreateAccount = async (data: any) => {
    const url = accounts.post('', data)
        .then(() => {
            console.log(url)
        })
        .catch(err => {
            console.log("err:", err);
        });
}

export const UpdateAccount = async (data: any) => {
    const _id = data._id;
    const updateUrl = 'http://localhost:9010/api/accounts' + '/' + _id;
    const url = accounts.put(updateUrl, data)
        .then(() => {
            console.log(url)
        })
        .catch(err => {
            console.log("err:", err);
        });
}

export const DeleteAccount = async (data: any) => {
    const _id = data._id;
    const deleteUrl = 'http://localhost:9010/api/accounts' + '/' + _id;
    const url = accounts.delete(deleteUrl)
        .then(() => {
            console.log(url)
        })
        .catch(err => {
            console.log("err:", err);
        });
}
