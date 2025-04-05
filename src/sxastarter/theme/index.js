import UCare from './tailwnd.brand.ucare';
import Aspirus from './tailwind.brand.aspirus';

const themes = {
  // Apparently this can't be named `default`.
  defaultTheme: UCare,
  // If the above is named `default` this for some reason returns undefined, but only on first compile.
  // If you make a change and hot-reload it works fine.
  themes: [UCare, Aspirus],
  UCare: UCare,
  Aspirus: Aspirus,
};

export default themes;
