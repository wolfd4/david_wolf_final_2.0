const express = require('express');
const { fitnessApp, User, Profile } = require('./model');
var fitapp = new fitnessApp();
const app = express.Router();

function getBMI(height, weight) {
    var BMI = (703 * (weight / (Math.pow(height, 2))));
    if (BMI < 18.5) {
        return "You are underweight"
    }
    if (BMI >= 18.5 && BMI <= 24.9) {
        return "You are a healthy weight"
    }
    if (BMI >= 25.0 && BMI <= 29.9) {
        return "You are overweight"
    }
    if (BMI >= 30.0) {
        return "You are obese"
    }
}

function getBMR(weight, height, age) {
    return (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age))
}

function getTDEE(BMR, activity) {
    return (BMR * activity)
}

//shows all users*
app.get("/", function (req, res) {
    res.send(fitapp.users);
});

//adds a user to the fitapp*
app.post('/users', (req, res) => {
    const user = new User(req.body.name, fitapp.users.length + 1, req.body.age, req.body.height, req.body.weight, req.body.activity);
    fitapp.users.push(user);
    res.send(user);
})

//retrieves user based on ID***
app.get('/findUser/:id', (req, res) => {
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    const username = fitapp.users.find(n => n.id == req.params.id);
    if (!username) {
        res.status(404).send('User not found');
    };
    if (CurrentUser.friendsList.find(n => n.id === username.id)) {
        res.send(username)
    } else {
        const notFriend = new Profile(username.name, username.age)
        res.send(notFriend)
    }
})

//displays current user's info*
app.get('/Currentuser', (req, res) => {
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    res.send(CurrentUser);
})

//adds a friend to the user's friends list****
app.get('/addFriend/:id', (req, res) => {
    const friend = fitapp.users.find(n => n.id == req.params.id);
    if (!friend) {
        res.status(404).send('Friend not found');
    };
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    if (friend.id === CurrentUser.id) {
        res.status(404).send('Cannot add yourself as a friend')
    };
    CurrentUser.friendsList.push(friend);
    res.send(CurrentUser)
});

//Adds a workout to workout list*
app.post('/addWorkout', (req, res) => {
    var day = req.body.day;
    var workout = req.body.workout;
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    CurrentUser.workouts[day] = workout;
    res.send(CurrentUser);
});

// gets CurrentUser's BMI*
app.get('/setBMI', (req, res) => {
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    var BMI = getBMI(CurrentUser.height, CurrentUser.weight);
    CurrentUser.CalculateBMI(BMI);
    res.send(CurrentUser);
});

//gets CuurentUser's BMR and TDEE*
app.get('/setBMR_TDEE', (req, res) => {
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    var BMR = getBMR(CurrentUser.weight, CurrentUser.height, CurrentUser.age);
    CurrentUser.CalculateBMR(BMR);
    var TDEE = getTDEE(BMR, CurrentUser.activity);
    CurrentUser.CalculateTDEE(TDEE);
    res.send(CurrentUser);
});

// views friends information
app.post('/viewFriend/:name', (req, res) => {
    const friend = fitapp.users.find(n => n.name === String(req.params.name));
    if (!friend) {
        res.status(404).send('Friend not found');
    };
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    if (friend.id === CurrentUser.id) {
        res.status(404).send('Cannot find yourself as a friend')
    };
    const isFriend = friend.friendsList.find(n => n.id === CurrentUser.id)
    if (!isFriend) {
        res.status(404).send('You are not this users Friend. You cannot look at their inforamtion')
    }
    else {
        res.send(friend);
    }
});

//sets a users friend
app.post('/addFriendtoUser/:name', (req, res) => {
    const user = fitapp.users.find(n => n.name === String(req.params.name));
    const addedFriend = fitapp.users.find(n => n.name === req.body.name);
    user.friendsList.push(addedFriend);
    res.send(user)
});

module.exports = app;