let Data = "Important data";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        return Data;
    }
}

class Admin extends User {
    editData() {
        Data = "New data";
        return Data;
    }
}

let user1 = new User("Dhruv", "d@email.com");
let admin1 = new Admin("Admin", "a@email.com");
