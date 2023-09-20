import { logger } from "@vendetta";
import Settings from "./Settings";

import { findByStoreName, findByProps } from "@vendetta/metro"
import { after, instead } from "@vendetta/patcher"

export default {
    onLoad: () => {
        logger.log("shiggy!");

        const UserStore = findByStoreName("UserStore")
        
        let patches = [];
        
        patches.push(after("getCurrentUser", UserStore, (_, user) => {
            user.premiumType = 2;
            return user
        }));
    },
    onUnload: () => {
        logger.log("leaving or smth");
        for (const unpatch of patches) unpatch();
    },
    settings: Settings,
}
