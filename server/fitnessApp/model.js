class fitnessApp {
    constructor() {
        this.users = [];
        this.usernames = [];
    }
}

class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class User {
    constructor(name, id, age, height, weight, activity) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.activity = activity;
        this.workouts = [" ", " ", " ", " ", " ", " ", " "];
        this.friendsList = [];
        this.UserBMI = " ";
        this.CalculateBMI = function (x) {
            this.UserBMI = x;
        }
        this.UserBMR = 0;
        this.CalculateBMR = function (x) {
            this.UserBMR = x;
        }
        this.UserTDEE = 0;
        this.CalculateTDEE = function (x) {
            this.UserTDEE = x;
        }
        this.editAge = function (x) {
            this.age = x;
        }
        this.editHeight = function (x) {
            this.height = x;
        }
        this.editWeight = function (x) {
            this.weight = x;
        }
    }
}

module.exports = {
    fitnessApp, User, Profile
}