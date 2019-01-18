import axios from 'axios';
 
export function getPost(postId) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
}
 
export function getComments(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
}

export function getPost2() {
    return axios.get('https://loc.flyasiana.com/I/kr/ko/ConvertCurrency.do?bizType=REV&fromCurrency=KRW&toCurrency=JPY&price=100');
}
 