import { computed, observable, action } from 'mobx';
import RootStore from './RootStore';

export default class AppStore {
    @observable editMode = false;

    @computed get title() {
        return `Welcome ${this.rootStore.userProfileStore.userName}!`;
    }

    constructor(private rootStore: RootStore) { }

    @action setEditMode(editMode: boolean) {
        this.editMode = editMode;
    }
}