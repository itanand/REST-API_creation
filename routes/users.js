import express from 'express';
import { v4 as uuid4 } from 'uuid';

const router = express.Router();

let users = [

];

//all routes in here are starting with /users
router.get('/', (req, res) => { //callback function
    console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid4() });

    res.send(`Hi,  ${user.firstname} Congratulations You have added to our Database`);
});
// /users/2 => req.params


router.get('/:id', (req, res) => {
     const { id }  = req.params ;
     const fondUser =  users.find((user) => user.id === id );

     res.send(fondUser);
});

// name: anand,  id: 1234

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`user with the id ${id} deleted from thge database`);
});

//patch - patch is used for partial modification.
//put - put is used for completely override the data.


router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id === id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`user with the id ${id} has been Updated`);
});

export default router;
