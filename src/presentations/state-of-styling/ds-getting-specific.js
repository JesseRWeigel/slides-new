/* eslint-disable react/prop-types */
// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Image,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Fill,
  Link,
  ComponentPlayground,
  Notes,
} from 'spectacle';

import examples from './examples';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import cssJsLibs from './css-in-js-libs.json';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  about: require('../../assets/about-me.png'),
  twitterLogo: require('../../assets/twitter-logo.svg'),
  githubLogo: require('../../assets/GitHub-Mark-120px-plus.png'),
  sponsors: require('../../assets/ds_sponsors.png'),
  intro: require('./assets/ds_gs_intro.png'),
  cssModulesLogo: require('./assets/css-modules-logo-cropped.png'),
  glamorousLogo: require('./assets/glamorous.png'),
  scLogo: require('./assets/styled-components.png'),
  concerns: require('./assets/separation_of_concerns.jpg'),
  styledForm: require('./assets/css-styled-form.png'),
  state: require('./assets/state.png'),
  props: require('./assets/props.png'),
  factory: require('./assets/factory.png'),
  eyes: require('./assets/eyes.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    codePaneBg: '#2d2d2d',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const SmallListItem = ({ style, ...rest }) => (
  <ListItem {...rest} style={{ ...style, fontSize: '1.75rem' }} />
);

const AppearList = ({ items, textColor, textSize = 42, style }) => (
  <List textColor={textColor} style={{ listStyleType: 'none', ...style }}>
    {items.map((val, i) => (
      <Appear key={i}>
        <ListItem style={{ fontSize: textSize, margin: '.5rem' }}>
          - {val}
        </ListItem>
      </Appear>
    ))}
  </List>
);

const ArrayList = ({ items, textColor, textSize, style }) => (
  <List textColor={textColor} style={{ listStyleType: 'none', ...style }}>
    {items.map(
      (val, i) =>
        typeof val === 'string' ? (
          <ListItem style={{ fontSize: textSize }} key={i}>
            - {val}
          </ListItem>
        ) : (
          val
        )
    )}
  </List>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide
          transition={['slide']}
          style={{
            backgroundColor: '#f9f9f9',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center -70px',
            backgroundSize: 'contain',
            backgroundImage: `url(${images.intro})`,
          }}
        />
        <Slide
          transition={['slide']}
          style={{
            backgroundColor: '#f9f9f9',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundImage: `url(${images.about})`,
          }}
        />
        <Slide
          transition={['slide']}
          style={{
            backgroundColor: '#f9f9f9',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundImage: `url(${images.sponsors})`,
          }}
        />
        <Slide transition={['fade']} bgColor="primary">
          <Notes>
            <ul>
              <li>History of styling</li>
              <li>Compare and learn their advantages</li>
              <li>
                Based on React, but hopefully will inspire different prespective
              </li>
            </ul>
          </Notes>
          <Heading fit textColor="tertiary">
            What is this talk?
          </Heading>
          <AppearList
            items={[
              'Awareness of styling options',
              'Preview component driven styling',
              'Based on experiences as a developer',
            ]}
          />
        </Slide>
        <Slide
          transition={['slide']}
          bgColor="codePaneBg"
          notes={`<ul>
          <li>OG CSS - Global Namespace, loads of !important, naming and collision issues</li>
          <li>BEM - Better, still global, but better name collision</li>
          <li>SASS - Variables, mixins, nesting, but requires preprocessing step</li>
          </ul>`}
        >
          <Heading textColor="tertiary">History of CSS</Heading>
          <Text textColor="primary">(Abridged)</Text>
          <Layout>
            <Fill>
              <Appear>
                <Image src={images.styledForm} width={400} />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.OGCss} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="codePaneBg"
          notes={`<ul>
          <li>OG CSS - Global Namespace, loads of !important, naming and collision issues</li>
          <li>BEM - Better, still global, but better name collision</li>
          <li>SASS - Variables, mixins, nesting, but requires preprocessing step</li>
          </ul>`}
        >
          <Heading textColor="tertiary">History of CSS</Heading>
          <Text textColor="primary">(Abridged)</Text>
          <Layout>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.BEM} />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <CodePane lang="css" source={examples.Sass} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['slide']} style={{ backgroundColor: '#f9f9f9' }}>
          <Layout style={{ margin: '-2rem 0' }}>
            <Fill>
              <Appear>
                <div>
                  <Text style={{ zIndex: 10 }}>Props</Text>
                  <Image src={images.props} width={400} />
                </div>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <div>
                  <Text style={{ zIndex: 10 }}>State</Text>
                  <Image src={images.state} width={400} />
                </div>
              </Appear>
            </Fill>
          </Layout>
          <Layout style={{ flexDirection: 'column' }}>
            <Fill style={{ margin: '-4rem 0' }}>
              <Appear>
                <Image src={images.factory} width={400} />
              </Appear>
            </Fill>
            <Fill style={{ margin: '-3rem 0' }}>
              <Appear>
                <Image src={images.eyes} width={400} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['zoom']} bgColor="codePaneBg">
          <Notes>
            <ul>
              <li>View Library that takes attributes and creates a view</li>
              <li>brought html into our js</li>
              <li>Splified example, has lifecycle method and much more</li>
              <li>Update code to show custom title</li>
              <li>Show inline styles - first look at css-in-js</li>
            </ul>
          </Notes>
          <Heading
            lineHeight={1.25}
            textSize="52px"
            style={{ margin: '0 auto 2rem' }}
          >
            React
          </Heading>
          <ComponentPlayground
            theme="dark"
            previewBackgroundColor="#cdcdcd"
            code={examples.react}
          />
        </Slide>
        <Slide transition={['spin']} bgColor="codePaneBg">
          <Notes>
            <ul>
              <li>
                allow you to turn your stylesheet into an object of class names
              </li>
              <li>styleshet can be css, less, sass</li>
              <li>
                Processed with webpack or browserify, generates scoped class
                names
              </li>
              <li>Explicit dependencies</li>
            </ul>
          </Notes>
          <Image src={images.cssModulesLogo} width={200} />
          <Text textColor="primary">style.css</Text>
          <Layout>
            <Fill>
              <div className="filePane">
                <CodePane lang="css" source={examples.cssModules.style} />
              </div>
            </Fill>
            <Fill>
              <div className="filePane">
                <CodePane lang="css" source={examples.cssModules.style2} />
              </div>
            </Fill>
          </Layout>
          <Link
            textSize={24}
            padding="2rem auto 0"
            textColor="#696969"
            href="https://www.webpackbin.com/bins/-Kq6EIQauQV6A69K0JI-"
            target="_blank"
            style={{ position: 'absolute', bottom: '-50px', right: '-50px' }}
          >
            webpack bin
          </Link>
        </Slide>
        <Slide bgColor="tertiary" transition={['fade']}>
          <Notes>
            <ul>
              <li>All css-in-js libraries as listed in the GH repo</li>
              <li>Notice all the instances of React</li>
            </ul>
          </Notes>
          <Heading lineHeight={1.25} textSize="52px" textColor="primary">
            css-in-js
          </Heading>
          <ArrayList
            items={cssJsLibs}
            textSize="1.75rem"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          />
          <Link
            href="https://github.com/MicheleBertoli/css-in-js"
            target="_blank"
            textColor="primary"
            textSize="1rem"
          >
            Source: https://github.com/MicheleBertoli/css-in-js
          </Link>
        </Slide>
        <Slide bgColor="tertiary" transition={['fade']}>
          <Notes>
            <ul>
              <li>here is what we will focus on</li>
              <li>Unique approached and adoption</li>
              <li>React Specific, but I will mention non-react options</li>
            </ul>
          </Notes>
          <Heading lineHeight={1.25} textSize="52px" textColor="primary">
            css-in-js
          </Heading>

          <ArrayList
            items={cssJsLibs.map((v, i) => (
              <SmallListItem
                key={i}
                textColor={
                  [
                    'glamorous',
                    'styled-components',
                    //"aphrodite"
                  ].includes(v) && 'primary'
                }
              >
                - {v}
              </SmallListItem>
            ))}
            textSize="1.75rem"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          />
          <Link
            href="https://github.com/MicheleBertoli/css-in-js"
            target="_blank"
            textColor="primary"
            textSize="1rem"
          >
            Source: https://github.com/MicheleBertoli/css-in-js
          </Link>
        </Slide>
        {/* <Slide bgColor="codePaneBg">
          <Heading lineHeight={1.25} textSize="52px" margin="0 auto 2rem">
            Aphrodite
          </Heading>
          <CodePane lang="js" source={examples.aphrodite} />
        </Slide> */}
        <Slide bgColor="tertiary">
          <Heading
            lineHeight={1.25}
            textSize="52px"
            margin="0 auto 2rem"
            textColor="primary"
          >
            Styled Components
          </Heading>
          <Layout
            style={{
              backgroundColor: theme.screen.colors.codePaneBg,
              border: '2px solid white',
            }}
          >
            <Fill>
              <CodePane lang="js" source={examples.styleComponents} />
            </Fill>
            <Fill>
              <CodePane lang="js" source={examples.container} />
            </Fill>
          </Layout>
          <Link
            textSize={24}
            padding="5rem auto 0"
            textColor="#696969"
            href="https://www.webpackbin.com/bins/-Kq6EIYtLdyIkoktnxGk"
            target="_blank"
            style={{ position: 'absolute', bottom: '-100px', right: '-100px' }}
          >
            webpack bin
          </Link>
        </Slide>
        <Slide bgColor="codePaneBg">
          <Heading lineHeight={1.25} textSize="52px" margin="0 auto 2rem">
            Glamorous
          </Heading>
          <Layout>
            <Fill>
              <CodePane lang="js" source={examples.glamorous} />
            </Fill>
            <Fill>
              <CodePane lang="js" source={examples.container} />
            </Fill>
          </Layout>
          <Link
            textSize={24}
            padding="5rem auto 0"
            textColor="#696969"
            href="https://www.webpackbin.com/bins/-Kq6EIhbS25RsgdG8Yyi"
            target="_blank"
            style={{ position: 'absolute', bottom: '-100px', right: '-100px' }}
          >
            webpack bin
          </Link>
        </Slide>
        <Slide>
          <Heading>
            <Link textColor="tertiary" href="https://css-in-js-playground.com/">
              CSS-in-JS Playground
            </Link>
          </Heading>
          <Text>
            by <Link href="https://twitter.com/SchauDustin">Dustin Schau</Link>
          </Text>
        </Slide>
        <Slide>
          <Heading>Helpful Tools</Heading>
          <AppearList
            items={[
              <Link textColor="secondary" href="http://postcss.org/">
                PostCSS (Autoprefixer)
              </Link>,
              <Link
                textColor="secondary"
                href="https://github.com/JedWatson/classnames"
              >
                classnames
              </Link>,
              <Link
                textColor="secondary"
                href="https://github.com/styled-components/polished"
              >
                polished
              </Link>,
              <Link
                textColor="secondary"
                href="https://github.com/typekit/webfontloader"
              >
                webfontloader
              </Link>,
              <Link
                textColor="secondary"
                href="https://github.com/facebook/jest"
              >
                jest
              </Link>,
            ]}
          />
        </Slide>
        <Slide>
          <Heading>Recap</Heading>
          <Appear>
            <Heading textSize={48} textColor="tertiary" margin="10rem">
              You can use them together!
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You!
          </Heading>
          <Text margin="5rem 0 0" textColor="tertiary" size={3} bold>
            Kyle Welch
          </Text>
          <Link
            href="http://bit.ly/ds-getting-specific"
            margin=".5rem 0 0"
            textColor="tertiary"
            size={0.75}
            italic
          >
            http://bit.ly/ds-getting-specific
          </Link>
          <Layout style={{ marginTop: 100, justifyContent: 'space-between' }}>
            <Fill>
              <Text textColor="tertiary" style={{ textAlign: 'left' }}>
                <Image
                  src={images.twitterLogo}
                  style={{ height: 25, margin: '0 10px 0' }}
                />
                @kylewelch
              </Text>
            </Fill>
            <Fill>
              <Text style={{ textAlign: 'right' }}>
                <Image
                  src={images.githubLogo}
                  style={{ height: 30, margin: '0 10px 0' }}
                />
                /kwelch
              </Text>
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
