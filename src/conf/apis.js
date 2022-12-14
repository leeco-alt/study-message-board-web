


const HOST = process.env.VUE_APP_URL
console.log(process.env.NODE_ENV);
console.log(HOST);

const REGISTER_URL = `${HOST}/users/register`
const LOGIN_URL = `${HOST}/users/login`
const GET_USER_INFO_URL = `${HOST}/users/getUserInfo`
const CREATE_COMMENT_URL = `${HOST}/comment/create`
const COMMENT_LIST_URL = `${HOST}/comment/list`
const COMMENT_DEL_URL = `${HOST}/comment/del`
const COMMENT_UPDATE_URL = `${HOST}/comment/update`

export {
    REGISTER_URL,
    LOGIN_URL,
    GET_USER_INFO_URL,
    CREATE_COMMENT_URL,
    COMMENT_LIST_URL,
    COMMENT_DEL_URL,
    COMMENT_UPDATE_URL
}
