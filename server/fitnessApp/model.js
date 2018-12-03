class fitnessApp {
    constructor() {
        this.users = [];
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
        this.workoutsDone = [];
        this.friendsList = [];
        this.goals = [];
        this.UserBMI = "";
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
    }
}

module.exports = {
    fitnessApp, User
}