export const getUserSchedule = (req, res, next) => {
    const {id} = req.params;
    const {date} = req.params;
    // get user schedule from DB where user.id.date==date
    res.json(user);
}

export const deleteUserSchedule = (req, res, next) => {
    const {id} = req.params;
    const {date} = req.params;
    // get user schedule from DB where user.id.date==date
    res.json(user);
}

export const getUserScheduleList = (req, res, next) => {
    const {id} = req.params;
    // get user schedule list from DB
    res.json(user);
}

export const postUserSchedule = (req, res, next) => {
    const {user} = req.body;
    const {id} = req.params;
    // insert user schedule into DB
    res.status(200).json({success:true});
}