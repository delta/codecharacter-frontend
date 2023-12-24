import {
  C as e,
  d as o,
  u as t,
  k as s,
  e as r,
  c as a,
  A as n,
  _ as i,
} from './index-624895d1.js';
import { M as p } from './MapDesigner-c6077f8a.js';
import { T as c } from './TourProvider-926faeac.js';
import './Modal-e0d29421.js';
import './ThemeProvider-a8cd1696.js';
import './setPrototypeOf-5f9718cf.js';
import './createWithBsPrefix-b4c3ccd3.js';
import './index-06bcf729.js';
import './divWithClassName-487073c7.js';
import './Container-27f3d7ab.js';
import './Row-e326ec9f.js';
import './Button-1591a852.js';
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
