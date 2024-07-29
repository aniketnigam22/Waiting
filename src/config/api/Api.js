import { loginurl } from "../url";
import { apiPost } from "../utils";

export const hitLoginApi = param => {
    return apiPost(loginurl, param);
};