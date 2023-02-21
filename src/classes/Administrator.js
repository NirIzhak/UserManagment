import User from "./User";

export default class Administrator extends User {

    constructor(props) {
      super(props);
        this.userName = 'admin',
        this.password = 'admin1234admin'
    }
}


