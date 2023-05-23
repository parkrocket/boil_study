import axios from "axios";
import { SERVER_URL } from "../pages/Config";

import { ADMIN_MENU, CONFIG_SET } from "./types";

export function adminMenu(dataTosubmit) {
    return {
        type: ADMIN_MENU,
        payload: dataTosubmit,
    };
}

export function configSet(dataTosubmit) {
    const request = axios
        .post(`${SERVER_URL}/api/admin/stats/config`, dataTosubmit)
        .then((response) => response.data);

    return {
        type: CONFIG_SET,
        payload: request,
    };
}
