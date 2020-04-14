import axios from 'axios';
/**
 * @author：me
 * @description：
 * @date：2020/3/19
 */
// 获取用户信息
export const getUserInfo = () => axios.post('/getUserInfo');
