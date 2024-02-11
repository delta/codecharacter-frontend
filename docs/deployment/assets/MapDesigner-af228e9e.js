import {
  C as e,
  d as o,
  u as t,
  k as s,
  e as r,
  c as a,
  A as n,
  _ as i,
} from './index-3b0785b0.js';
import { M as p } from './MapDesigner-7b166df6.js';
import { T as c } from './TourProvider-a2db2cbe.js';
import './Modal-d30bd2b2.js';
import './ThemeProvider-528d6954.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-3a2cf2e8.js';
import './index-06bcf729.js';
import './divWithClassName-662bab3a.js';
import './Container-7e33f8ea.js';
import './Row-ee81c216.js';
import './Button-4e851fa0.js';
const d = [
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
  l = () => {
    const l = new e(o),
      m = t(s),
      u = r();
    return a(c, {
      setOpened: e => {
        !1 === e &&
          l
            .updateCurrentUser({
              name: m.name,
              country: m.country,
              college: m.college,
              updateTutorialLevel: 'NEXT',
            })
            .then(() => {
              u('/Leaderboard', { replace: !0 });
            })
            .catch(e => {
              e instanceof n && i.error(e.message);
            });
      },
      steps: d,
      children: a(p, { pageType: 'MapDesigner' }),
    });
  };
export { l as default };
