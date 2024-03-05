import React from 'react';
import { ComponentProps } from 'lib/component-props';
import { ImageField, LinkField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type KitchenSinkProps = ComponentProps & {
  fields: {
    Image: ImageField;
    Link: LinkField;
    RichText: RichTextField;
  };
};

const data = {
  uid: '52a9552b-fddd-47ab-967a-7745397c7e52',
  componentName: null,
  dataSource: '{01DE6515-705C-477C-96C9-FDF5EA529620}',
  fields: {
    Link: {
      value: {
        href: '/',
        text: 'Home Page',
        anchor: '',
        linktype: 'internal',
        class: '',
        title: '',
        querystring: '',
        id: '{D595CB34-7E12-414E-A37B-465FD58075BC}',
      },
    },
    Image: {
      value: {
        src: 'https://ciplacm.dev.local/-/media/gojo-saturo-3.jpeg?h=675&iar=0&w=1200&hash=E160EF9E655013678BAFA4307E5BE45F',
        alt: 'Gojo saturo',
        width: '1200',
        height: '675',
      },
    },
    RichText: {
      value:
        "<section>\n<hgroup>\n<h1>h1 HTML5 Kitchen Sink</h1>\n<h2>h2 Back in my quaint <a>garden</a></h2>\n<h3>h3 Jaunty <a>zinnias</a> vie with flaunting phlox</h3>\n<h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>\n<h5>h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.</h5>\n<h6>h6 Pack my box with five dozen liquor jugs.</h6>\n</hgroup>\n</section>\n<section>\n<header>\n<nav>\n<ul>\n    <li><a>Home</a></li>\n    <li><a>About</a></li>\n    <li><a>Contact</a></li>\n</ul>\n</nav>\n</header>\n<article>\n<p>This paragraph is nested inside an article. It contains many different, sometimes useful, <a>HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr>abbr</abbr>. Similarly, you can use acronym tag like this: <acronym>ftw</acronym>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>\n<p>You can also use <kbd>keyboard text</kbd>, which sometimes is styled similarly to the <code>&lt;code&gt;</code> or <samp>samp</samp> tags. Even more specifically, there is a tag just for <var>variables</var>. Not to be mistaken with blockquotes\nbelow, the quote tag lets you denote something as <q>quoted text</q>. Lastly don't forget the sub (H<sub>2</sub>O) and sup (E = MC<sup>2</sup>) tags. </p>\n</article>\n<aside>This is an aside.</aside>\n<footer>This is footer for this section</footer>\n</section>\n<section>\n<blockquote>\n<p>Blockquote: I quickly explained that many big jobs involve few hazards</p>\n</blockquote>\n<blockquote>\n<p>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you&rsquo;ve got to focus on. But that&rsquo;s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick\ncarefully. I&rsquo;m actually as proud of the things we haven&rsquo;tdone as the things I have done. Innovation is saying no to 1,000 things.\n<cite>Steve Jobs &ndash; Apple Worldwide Developers&rsquo; Conference, 1997</cite>\n</p>\n</blockquote>\n</section>\n<section>\n<table>\n    <caption>Tables can have captions now.</caption>\n    <tbody>\n        <tr>\n            <th>Person</th>\n            <th>Number</th>\n            <th>Third Column</th>\n        </tr>\n        <tr>\n            <td>Someone Lastname</td>\n            <td>900</td>\n            <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>\n        </tr>\n        <tr>\n            <td><a>Person Name</a></td>\n            <td>1200</td>\n            <td>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.</td>\n        </tr>\n        <tr>\n            <td>Another Person</td>\n            <td>1500</td>\n            <td>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</td>\n        </tr>\n        <tr>\n            <td>Last One</td>\n            <td>2800</td>\n            <td>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</td>\n        </tr>\n    </tbody>\n</table>\n</section>\n<section>\n<dl>\n    <dt>Definition List Title</dt>\n    <dd>Definition list division.</dd>\n    <dt>Kitchen Sink</dt>\n    <dd>Used in expressions to describe work in which all conceivable (and some inconceivable) sources have been mined. In this case, a bunch of markup.</dd>\n    <dt>aside</dt>\n    <dd>Defines content aside from the page content</dd>\n    <dt>blockquote</dt>\n    <dd>Defines a section that is quoted from another source</dd>\n</dl>\n</section>\n<section>\n<ul>\n    <li>Unordered List item one\n    <ul>\n        <li>Nested list item\n        <ul>\n            <li>Level 3, item one</li>\n            <li>Level 3, item two</li>\n            <li>Level 3, item three</li>\n            <li>Level 3, item four</li>\n        </ul>\n        </li>\n        <li>List item two</li>\n        <li>List item three</li>\n        <li>List item four</li>\n    </ul>\n    </li>\n    <li>List item two</li>\n    <li>List item three</li>\n    <li>List item four</li>\n</ul>\n<hr />\n&nbsp;</section>\n<section>\n<pre>pre {\n  display: block;\n  padding: 7px;\n  background-color: #F5F5F5;\n  border: 1px solid #E1E1E8;\n  border-radius: 3px;\n  white-space: pre-wrap;\n  word-break: break-all;\n  font-family: Menlo, Monaco;\n  line-height: 160%;\n}&nbsp;</pre>\n</section>\n<section>\n<form>\n    <p>\n    <label>Email address</label>\n    <input />\n    </p>\n    <p>\n    <label>Number</label>\n    <input />\n    </p>\n    <p>\n    <label>Password</label>\n    <input />\n    </p>\n    <p>\n    <label>Search</label>\n    <input />\n    </p>\n    <p>\n    <label>Telephone number</label>\n    <input />\n    </p>\n    <p>\n    <label>Text</label>\n    <input />\n    </p>\n    <p>\n    <label>Url</label>\n    <input />\n    </p>\n    <p>\n    <label>Color</label>\n    <input />\n    </p>\n    <p>\n    <label>Date</label>\n    <input />\n    </p>\n    <p>\n    <label>Date / Time</label>\n    <input />\n    </p>\n    <p>\n    <label>Date / Time local</label>\n    <input />\n    </p>\n    <p>\n    <label>Month</label>\n    <input />\n    </p>\n    <p>\n    <label>Week</label>\n    <input />\n    </p>\n    <p>\n    <label>Time</label>\n    <input />\n    </p>\n    <p>\n    <label>Example select</label>\n    <select>\n    <option />1\n    \n    <option />2\n    \n    <option />3\n    \n    <option />4\n    \n    <option />5\n    \n    </select>\n    </p>\n    <p>\n    <label>Example multiple select</label>\n    <select>\n    <option />1\n    \n    <option />2\n    \n    <option />3\n    \n    <option />4\n    \n    <option />5\n    \n    </select>\n    </p>\n    <p>\n    <label>Example textarea</label>\n    <textarea></textarea>\n    </p>\n    <p>\n    <label>File input</label>\n    <input />\n    </p>\n    <fieldset>\n    <legend>I am legend</legend>\n    <div>\n    <label>\n    <input /> Option one is this and that&mdash;be sure to include why it's great\n    </label>\n    </div>\n    <div>\n    <label>\n    <input /> Option two can be something else and selecting it will deselect option one\n    </label>\n    </div>\n    <div>\n    <label>\n    <input /> Option three is disabled\n    </label>\n    </div>\n    </fieldset>\n    <fieldset>\n    <legend>I am also legend</legend>\n    <input /> Check me out\n    <input /> Or check me out\n    </fieldset>\n    <p>\n    <button>Button</button>\n    <input />\n    <input />\n    <input />\n    </p>\n</form>\n</section>",
    },
  },
};

const KitchenSink = ({ fields }: KitchenSinkProps): JSX.Element => {
  console.log('Kitchen Sink Component:', fields, data);
  return <div>KitchenSink</div>;
};

export default KitchenSink;
