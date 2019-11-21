import React, { MouseEventHandler } from 'react';
import { RootStoreContext } from '../stores/RootStore';
import { observer } from 'mobx-react-lite';

type UserProfileProps = {
};

const UserProfile: React.FC<UserProfileProps> = props => {
    const { appStore, userProfileStore } = React.useContext(RootStoreContext);

    const onEditClick: MouseEventHandler<HTMLButtonElement> = e =>
        appStore.setEditMode(true);

    return (
        <>
            <div>Your username: {userProfileStore.userName}</div>
            <button onClick={onEditClick}>Edit profile</button>
        </>
    );
}

export default observer(UserProfile);