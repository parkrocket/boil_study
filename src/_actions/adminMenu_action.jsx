import React from "react";
import axios from "axios";
import { SERVER_URL } from "../pages/Config";

import { ADMIN_MENU } from "./types";

export function adminMenu(dataTosubmit) {
    return {
        type: ADMIN_MENU,
        payload: dataTosubmit,
    };
}
