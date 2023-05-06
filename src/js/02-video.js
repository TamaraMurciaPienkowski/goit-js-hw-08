import Player from '../../node_modules/@vimeo/player';
import myFunction from '../../node_modules/lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  myFunction(data => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);
const savedSettings = localStorage.getItem('videoplayer-current-time');
const parsedSettings = JSON.parse(savedSettings);
player.setCurrentTime(parsedSettings.seconds).then();
