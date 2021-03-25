
class User {
    constructor() {
        this.userInfoList = [
            {
                id: 1,
                name: "mario cystino",
                designation: "web designer",
                jobType: "Full Time",
                city: "Ahemdabad",
                phone: "78178 38490",
                address: "5th floor, bangalore",
                email: "abctest@gmail.com",
            },
            {
                id: 2,
                name: "larry anderson",
                jobType: "Full Time",
                designation: "web designer",
                city: "Ahemdabad",
                phone: "78178 38490",
                address: "5th floor, bangalore",
                email: "abctest@gmail.com",
            },
            {
                id: 3,
                name: "jack humby",
                jobType: "Full Time",
                designation: "web designer",
                city: "Ahemdabad",
                phone: "78178 38490",
                address: "5th floor, bangalore",
                email: "abctest@gmail.com",
            },
            {
                id: 4,
                name: "S4",
                jobType: "Part Time",
                designation: "web designer",
                city: "Ahemdabad",
                phone: "78178 38490",
                address: "5th floor, bangalore",
                email: "abctest@gmail.com",
            },
            {
                id: 5,
                name: "S5",
                designation: "web designer",
                city: "Ahemdabad",
                phone: "78178 38490",
                address: "5th floor, bangalore",
                email: "abctest@gmail.com",
            }
        ]
    }
    func() {
        console.log(this);
    }
    postData(data) {
        console.log(data);
        this.userInfoList.push(data);
    }

    getData(val) {
        return new Promise((resolve, reject) => {
            if (val === 5) {
                setTimeout(() => {
                    return resolve(this.userInfoList);
                }, 0);
            }
            else {
                setTimeout(() => {
                    return reject("Data not found");
                }, 2000);
            }
        })
    }

}

let user = new User();
let myData = {
    id: 11,
    name: "Akshay bro",
    designation: "Full stack Developer ",
    city: "Lucknow",
    phone: "78178 48548",
    address: "5th floor, bangalore",
    email: "akshay@gmail.com",
}
// user.postData(myData).then((data) => {
//     console.log(data)
// }).catch((e) => {
//     console.log(e)
// });
// user.getData(5).then((data) => {
//     console.log(data)
// }).catch((e) => {
//     console.log(e)
// });
const userObj = new User();

export default userObj;