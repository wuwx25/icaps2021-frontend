import { test } from "../config/env.js";
let CLIENT_ID;
if (test){
    CLIENT_ID = 'AWNahEkuGKJiJ3HHYXO6XNRBvL1WUnQpnv9bYBSOItoskfkjhP4d-EqOlQoYZFabgZone_r-qUyvpfm_';
} else {
    CLIENT_ID = 'AVrWIwOUjJSbL0KvYZBxyOpje01WWC21yZyU2Xkvp6Ja6nl4Fz3QqS7c24gMFgK2fF_GB24jEle0y4o5';
}
export const paypal_url="https://www.paypal.com/sdk/js?client-id=" + CLIENT_ID;