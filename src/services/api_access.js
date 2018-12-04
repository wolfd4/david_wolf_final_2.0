const api_root = "http://localhost:3000/fitnessApp";

export function GetState() {
    return myFetch(api_root + "/");
}

export function Login(name, age, height, weight, activity) {
    return myFetch(api_root + `/users`, { name, age, height, weight, activity })
}

export function GetCurrentUser() {
    return myFetch(api_root + "/Currentuser");
}

export function CalculateBMI() {
    return myFetch(api_root + "/setBMI");
}

export function CalculateBMR_TDEE() {
    return myFetch(api_root + "/setBMR_TDEE");
}

export function SetWorkout(day, workout) {
    return myFetch(api_root + "/addWorkout", { day, workout });
}

export function editAge(age) {
    return myFetch(api_root + "/editAge", { age });
}

export function editHeight(height) {
    return myFetch(api_root + "/editHeight", { height });
}

export function editWeight(weight) {
    return myFetch(api_root + "/editWeight", { weight });
}

export function findUser(id) {
    return myFetch(api_root + `/findUser/${id}`);
}

export function addFriend(id) {
    return myFetch(api_root + `/addFriend/${id}`);
}

function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
        }
    };
    if (data) {
        options = {
            ...options,
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                ...options.headers,
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
    }
    return fetch(url, options)
        .then(response => {
            return response.json()
        }); // parses response to JSON
}