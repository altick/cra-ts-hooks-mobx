import { observable, action } from 'mobx';
import RootStore from './RootStore';

export default class UserProfileStore {
    @observable userName = 'anonymous';

    constructor(private rootStore: RootStore) { }

    @action setUserName(userName: string) {
        this.userName = userName;
    }
}