export const getUser = (req, res, next) => {
    const {id} = req.params;
    // get user from DB where user.id==id
    res.json(user);
}

export const getUserByName = (req, res, next) => {
    const {name} = req.query;
    // get user from DB where user.name==name
    res.json(user);
}

export const getUserList = (req, res, next) => {
    
    // get user from DB
    res.json(userList);
}

export const postUser = (req, res, next) => {
    const {user} = req.body;
    // insert user into DB
    res.status(200).json({success:true});
}

export const deleteUser = (req, res, next) => {
    const {id} = req.params;
    // delete user from DB where user.id==id
    res.json(user);
}