import { test } from "../config/env.js";
let backendBaseUrl;
if(test) {
    backendBaseUrl = "http://101.34.38.32:5444";
} else {
    backendBaseUrl = 'https://icaps21.icaps-conference.org';
}
export {backendBaseUrl};
