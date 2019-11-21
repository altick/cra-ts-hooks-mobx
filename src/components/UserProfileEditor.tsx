import React, { MouseEventHandler, ChangeEventHandler } from 'react';
import { RootStoreContext } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';

type UserProfileEditorProps = {
};

const UserProfileEditor: React.FC<UserProfileEditorProps> = props => {
    const { appStore, userProfileStore } = React.useContext(RootStoreContext);
    const [userName, setUserName] = React.useState(userProfileStore.userName);

    const onSaveClick: MouseEventHandler<HTMLButtonElement> = e => {
        userProfileStore.setUserName(userName);
        appStore.setEditMode(false);
    }

    const onUserNameChanged: ChangeEventHandler<HTMLInputElement> = e => setUserName(e.target.value);

    return (
        <>
            <div>Edit your profile</div>
            <input value={userName} onChange={onUserNameChanged} />
            <button onClick={onSaveClick}>Save</button>
        </>
    );
}

export default observer(UserProfileEditor);