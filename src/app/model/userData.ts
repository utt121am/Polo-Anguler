class userDataModel {

    dateOfBirth: Date
    email: String
    gender: String
    name: String
    phoneNumber: String
    roles: String
    userId: String
    username: String
    verified: boolean

    constructor() {
        this.dateOfBirth = new Date
        this.email = ''
        this.gender = ''
        this.name = ''
        this.phoneNumber = ''
        this.roles = ''
        this.userId = ''
        this.username = ''
        this.verified = false
    }
}