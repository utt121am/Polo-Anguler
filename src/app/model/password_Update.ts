export class PasswordUpdateModel {
    uid: String;
    currentPassword: String;
    newPassword: String;
    confirmPassword: String;

    constructor() {
        this.uid = '';
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
    }
}