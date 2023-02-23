import User from "./User";


export default class Administrator extends User {

    constructor(userName,password) {
      super(userName,password);
        this.userName = 'admin',
        this.password = 'admin1234admin'
    }


}




