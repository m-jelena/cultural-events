export interface User {
    username: string;
    password: string;
    email: string;
    role: number;
    reset_password: ResetPassword;
}

interface ResetPassword {
    token: string;
    valid_until: Date;
}