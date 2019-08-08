import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { platform } from 'os';

import { Bubble } from '../Bubble';
import {
  Actions,
  Line,
  MenuItem,
  MenuItems,
  Background,
  Content,
  Icon,
  MenuItemTitle,
  Shortcut,
} from './style';
import { icons } from '~/renderer/constants';

const changeContent = () => () => {
  // store.overlay.currentContent = content;
};

const onFindClick = () => {
  /*store.overlay.visible = false;

  ipcRenderer.send(
    `find-show-${store.windowId}`,
    store.tabs.selectedTab.id,
    store.tabs.selectedTab.findInfo,
  );*/
};

const onDarkClick = () => {
  // store.settings.object.darkTheme = !store.settings.object.darkTheme;
  // store.theme = store.settings.object.darkTheme ? darkTheme : lightTheme;
  // store.settings.save();
};

const onShieldClick = () => {
  // store.settings.object.shield = !store.settings.object.shield;
  // store.settings.save();
};

const onAlwaysClick = () => {
  // store.isAlwaysOnTop = !store.isAlwaysOnTop;
  // getCurrentWindow().setAlwaysOnTop(store.isAlwaysOnTop);
};

const onMultrinClick = () => {
  // store.settings.object.multrin = !store.settings.object.multrin;
  // store.settings.save();
};

const onNewWindowClick = () => {
  // ipcRenderer.send('create-window');
};

const onIncognitoClick = () => {
  // ipcRenderer.send('create-window', true);
};

export const QuickMenu = observer(() => {
  // const invert = store.theme['overlay.foreground'] === 'light';
  const invert = true;

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
      }}
    >
      <Background></Background>
      <Content>
        <Actions>
          <Bubble
            // toggled={store.isAlwaysOnTop}
            toggled={false}
            onClick={onAlwaysClick}
            invert={invert}
            icon={icons.window}
          >
            Top Most
          </Bubble>
          <Bubble
            // toggled={store.settings.object.darkTheme}
            toggled={false}
            onClick={onDarkClick}
            invert={invert}
            icon={icons.night}
          >
            Dark
          </Bubble>
          <Bubble
            invert={invert}
            // toggled={store.settings.object.shield}
            toggled={false}
            icon={icons.shield}
            onClick={onShieldClick}
          >
            Shield
          </Bubble>
          {platform() === 'win32' && (
            <Bubble
              invert={invert}
              // toggled={store.settings.object.multrin}
              toggled={false}
              icon={icons.multrin}
              onClick={onMultrinClick}
            >
              Multrin
            </Bubble>
          )}
        </Actions>
        <MenuItems>
          <MenuItem>
            <Icon icon={icons.tab} />
            <MenuItemTitle>New tab</MenuItemTitle>
            <Shortcut>Ctrl+T</Shortcut>
          </MenuItem>
          <MenuItem>
            <Icon icon={icons.window} />
            <MenuItemTitle>New window</MenuItemTitle>
            <Shortcut>Ctrl+N</Shortcut>
          </MenuItem>
          <MenuItem>
            <Icon icon={icons.incognito} />
            <MenuItemTitle>New incognito window</MenuItemTitle>
            <Shortcut>Ctrl+Shift+N</Shortcut>
          </MenuItem>
          <Line />
          <MenuItem arrow>
            <Icon icon={icons.history} />
            <MenuItemTitle>History</MenuItemTitle>
          </MenuItem>
          <MenuItem arrow>
            <Icon icon={icons.bookmarks} />
            <MenuItemTitle>Bookmarks</MenuItemTitle>
          </MenuItem>
          <MenuItem>
            <Icon icon={icons.download} />
            <MenuItemTitle>Downloads</MenuItemTitle>
          </MenuItem>
          <Line />
          <MenuItem>
            <Icon icon={icons.settings} />
            <MenuItemTitle>Settings</MenuItemTitle>
          </MenuItem>
          <MenuItem>
            <Icon icon={icons.extensions} />
            <MenuItemTitle>Extensions</MenuItemTitle>
          </MenuItem>
          <Line />
          <MenuItem>
            <Icon icon={icons.find} />
            <MenuItemTitle>Find in page</MenuItemTitle>
            <Shortcut>Ctrl+F</Shortcut>
          </MenuItem>
          <MenuItem>
            <Icon icon={icons.print} />
            <MenuItemTitle>Print</MenuItemTitle>
            <Shortcut>Ctrl+P</Shortcut>
          </MenuItem>
        </MenuItems>
      </Content>
    </div>
  );
});
