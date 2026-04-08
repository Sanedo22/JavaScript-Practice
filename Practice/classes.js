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

let user1 = new User("Dhruv", "d@email.com");
