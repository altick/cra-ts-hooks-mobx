import UserProfileStore from './UserProfileStore';
import { createContext } from 'react';
import AppStore from './AppStore';

class RootStore {
    appStore = new AppStore(this);
    userProfileStore = new UserProfileStore(this);
}

export const RootStoreContext = createContext(new RootStore());
export default RootStore;