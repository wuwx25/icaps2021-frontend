import { test } from "../config/env.js";
let backendBaseUrl;
if(test) {
    backendBaseUrl = "http://192.168.0.224:5440";
} else {
    backendBaseUrl = 'https://icaps21.icaps-conference.org';
}
export {backendBaseUrl};
