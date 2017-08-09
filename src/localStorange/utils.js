//保存到localStorage里
const USERS = 'users';
export default  {
    //保存用户
    saveUser(user){
        user.id = Date.now();
        //先取出上次保存的老用户对象数组
        let usersStr = localStorage.getItem(USERS);
        //把这个字符串转成对象数组，如果原来没有的话就是空数组
        let users = usersStr?JSON.parse(usersStr):[];
        //把这个新对象添加到老数组中
        users.push(user);
        //把这个新的数组保存到USERS里去
        localStorage.setItem(USERS,JSON.stringify(users));
    },
    readUsers(){
        let usersStr = localStorage.getItem(USERS);
        return usersStr?JSON.parse(usersStr):[];
    },
    delUser(id){
        let usersStr = localStorage.getItem(USERS);
        //把这个字符串转成对象数组，如果原来没有的话就是空数组
        let users = usersStr?JSON.parse(usersStr):[];
        users = users.filter(user=>user.id!==id);
        localStorage.setItem(USERS,JSON.stringify(users));
    }
}