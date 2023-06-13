import store from './redux/store';
import { toggleThemeAction, toggleStatusAction } from './redux/actions/actionCreators';

const themeBtn = document.getElementById('theme-btn');
const statusBtn = document.getElementById('status-btn');

themeBtn.addEventListener('click', () => {
  store.dispatch(toggleThemeAction());
});

statusBtn.addEventListener('click', () => {
  store.dispatch(toggleStatusAction());
});

store.subscribe(() => {
  const {
    togglerReducer: {
      theme,
      status
    }
  } = store.getState();

  const body = document.querySelector('body');
  const statusValue = document.getElementById('status-value');

  if (theme === 'Light') {
    themeBtn.innerText = 'Dark mode';
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  } else {
    themeBtn.innerText = 'Light mode';
    body.style.backgroundColor = '#333';
    body.style.color = '#fff';
  }

  if (status === 'Online') {
    statusBtn.innerText = 'Toggle to offline';
    statusValue.innerText = 'Online';
  } else {
    statusBtn.innerText = 'Toggle to online';
    statusValue.innerText = 'Offline';
  }
});
