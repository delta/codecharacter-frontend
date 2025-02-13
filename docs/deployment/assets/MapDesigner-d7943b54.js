import {
  C as e,
  d as o,
  u as t,
  k as s,
  e as r,
  c as a,
  A as n,
  _ as i,
} from './index-24a58ae8.js';
import { M as p } from './MapDesigner-5fad8ad1.js';
import { T as c } from './TourProvider-f8fb0617.js';
import './Modal-5efe701c.js';
import './ThemeProvider-092c2682.js';
import './useWindow-9130f6b7.js';
import './objectWithoutPropertiesLoose-87a5ea27.js';
import './setPrototypeOf-b9a4b5f8.js';
import './createWithBsPrefix-6a3b0d2e.js';
import './index-06bcf729.js';
import './divWithClassName-cc198704.js';
import './Container-4692a76f.js';
import './Row-59744247.js';
import './Button-0a98cdad.js';
const m = [
    {
      selector: '#tower-selection',
      content:
        'These are your tower defenses. You can drag and drop them to the map to place them.',
    },
    {
      selector: '#tool-selection',
      content:
        'This is the tool selection panel. You can use these tools to edit the map.',
    },
    {
      selector: '#coins',
      content:
        'This counter displays the coins you have to build your defenses.',
    },
    {
      selector: '#Psuedo',
      content:
        'This is your Map Designer. You can drag and drop towers to place them on the map.',
    },
  ],
  d = () => {
    const d = new e(o),
      l = t(s),
      u = r();
    return a(c, {
      setOpened: e => {
        !1 === e &&
          d
            .updateCurrentUser({
              name: l.name,
              country: l.country,
              college: l.college,
              updateTutorialLevel: 'NEXT',
            })
            .then(() => {
              u('/Leaderboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof n && i.error(e.message);
            });
      },
      steps: m,
      children: a(p, { pageType: 'MapDesigner' }),
    });
  };
export { d as default };
