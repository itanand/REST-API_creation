import { v4 as uuid4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => { //callback function
    console.log(users);

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid4() });

    res.send(`Hi,  ${user.firstname} Congratulations You have added to our Database`);
}

export const getUser = (req, res) => {
    const { id }  = req.params ;
    const fondUser =  users.find((user) => user.id === id );

    res.send(fondUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`user with the id ${id} deleted from thge database`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`user with the id ${id} has been Updated`);
}

