class fitnessApp {
    constructor() {
        this.users = [];
    }
};

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
    }
    get BMR() {
        return (66 + (6.2 * this.weight) + (12.7 * this.height) - (6.76 * this.age))
    }
    get TDEE() {
        return (this.BMR * this.activity)
    }
}

module.exports = {
    fitnessApp, User
}