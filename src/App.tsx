import './App.css';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from './stores/RootStore';
import UserProfileEditor from './components/UserProfileEditor';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  const { appStore } = React.useContext(RootStoreContext);


  return (
    <div className="App">
      <header>{appStore.title}</header>
      <hr />
      {appStore.editMode
        ? <UserProfileEditor />
        : <UserProfile />}
    </div>
  );
}

export default observer(App);
