const db = require("../config/db_config");

class User {
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }


    static create(newUser, result) {
        db.query(
            `INSERT INTO users VALUES(?, ?, ?)`,
            [null, newUser.first_name, newUser.last_name, newUser.email ],
            (err, res) => {
                if(err) {
                    console.log("Error from User model - create method");
                    
                    if(err.code === "ER_DUP_ENTRY") {
                        result({ kind: "Email is taken already. "}, null);
                        return

                    }
                    result(err, data)

                } else {
                    
                }
            }
        )
    }
}