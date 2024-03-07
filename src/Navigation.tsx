//--- Dependencies
import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs';
import { tv } from 'tailwind-variants';

//--- Helpers
import Button from 'components/helpers/Buttons';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

const navigation = tv({
  slots: {
    navbar: 'flex justify-between p-4 bg-slate-400',
    navWrapper: 'flex items-center gap-8',
  },
});

const Navigation = (): JSX.Element => {
  const { navbar, navWrapper } = navigation();
  return (
    <div className={navbar()}>
      <nav>
        <ul className={navWrapper()}>
          <li>
            <a href="https://sitecore.com">
              <img src={`${publicUrl}/sc_logo.svg`} alt="Sitecore" />
            </a>
          </li>
          <li>
            <a href="https://jss.sitecore.com">JSS Documentation</a>
          </li>
          <li>
            <a href="https://github.com/Sitecore/jss">JSS Repository</a>
          </li>
        </ul>
      </nav>
      <Button text="Sign In" />
    </div>
  );
};

export default Navigation;
