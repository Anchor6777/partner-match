/**
 * 用户类别
 */
type UserType = {
    id: number;
    username: string;
    account: string;
    avatar?: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    createTime: Date;
}