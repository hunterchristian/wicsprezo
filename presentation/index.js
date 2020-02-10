// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  theHomeDepot: require('../assets/the-home-depot.svg'),
  goodWork: require('../assets/good-work.gif'),
  indeed: require('../assets/indeed.png'),
  glassdoor: require('../assets/glassdoor.png'),
  linkedin: require('../assets/linkedin.png'),
  tesla: require('../assets/tesla.svg'),
  airbnb: require('../assets/airbnb.svg'),
  facebook: require('../assets/facebook.svg'),
  reddit: require('../assets/reddit.svg'),
  netflix: require('../assets/netflix.svg'),
  cra: require('../assets/cra.png'),
  todoMVC: require('../assets/todoMVC.png'),
  todoApp: require('../assets/todoApp.png')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#FA6304',
    secondary: 'white',
    tertiary: 'black',
    quaternary: '#CECECE',
    todoApp: '#F5F5F5',
    todoMVC: '#FAFAFA'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Image src={images.theHomeDepot} width={300} />
          <Heading margin="50px" size={1} fit caps lineHeight={1} textColor="primary">
            Intermediate Web Development (React)
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            Kyle Bustard
          </Text>
          <Text margin="20px" textColor="tertiary" bold>
            Hunter Hodnett
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="todoApp" textColor="primary">
          <Image src={images.todoApp} width={800} />
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={1} fit caps lineHeight={1} textColor="secondary">
            Key takeaways
          </Heading>
          <List>
            <ListItem margin="20px">JSX and HTML</ListItem>
            <ListItem margin="20px">setState()</ListItem>
            <ListItem margin="20px">Conditional rendering</ListItem>
            <ListItem margin="20px">React hooks</ListItem>
            <ListItem margin="20px">React router</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={1} fit caps lineHeight={1} textColor="secondary">
            Why learn React.js?
          </Heading>
          <List>
            <ListItem margin="20px">React in the browser - React.js</ListItem>
            <ListItem margin="20px">React on mobile - React Native</ListItem>
            <ListItem margin="20px">React in the desktop - ReactDesktop.js</ListItem>
            <ListItem margin="20px">This presentation is written in React!</ListItem>
          </List>
        </Slide>
        <Slide style={{ alignItems: 'flex-start' }} transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="150px" size={6} textColor="primary" caps>
            Products built on React.js
          </Heading>
          <div style={ { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', gridColumnGap: '20px' } }>
            <Image src={images.theHomeDepot} style={ { alignSelf: 'center' } } />
            <Image src={images.reddit} style={ { alignSelf: 'center' } } />
            <Image src={images.airbnb} width={ 300 } style={ { alignSelf: 'center' } }/>
            <Image src={images.tesla} style={ { alignSelf: 'center' } } />
            <Image src={images.netflix} style={ { alignSelf: 'center' } } />
            <Image src={images.facebook} style={ { alignSelf: 'center' } } />
          </div>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            How did we get here?
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Early days - had to code special fixes for each browser
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            JQuery saves the day
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            One codebase that works in all browsers
          </Text>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Problem: spaghetti code
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Solution: organize code into components!
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            Angular 1.0 launched
          </Text>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Components
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            Separate UI into pieces called "components"
          </Text>
          <Text margin="20px" textColor="tertiary" bold>
            Each component responsible for its own HTML, JS, and CSS
          </Text>
          <Text margin="20px" textColor="tertiary" bold>
            Each component manages its own state
          </Text>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Problem: Angular 2.0 breaks the internet
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Solution: React.js!
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="150px" size={6} textColor="secondary" caps>
            Components: now with HTML in JS!
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            JSX
          </Text>
          <Text margin="20px" textColor="tertiary" bold>
            Benefit: can view all pieces of a component in one file
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary">
            JSX
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/untranspiled.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '23px' }}
          />
          <Heading size={6} textColor="secondary">
            JavaScript
          </Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/transpiled.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '23px' }}
          />
          <Text>
            See for yourself: <Link href="https://babeljs.io/en/repl">https://babeljs.io/en/repl</Link>
          </Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary">
            Create React App
          </Heading>
          <Text>
            Bootstraps a ready-to-go React application
          </Text>
          <Link>https://create-react-app.dev/docs/getting-started</Link>
        </Slide>
        <Slide bgColor="secondary">
          <Quote textColor="primary" textSize="50px" style={{textAlign: 'left'}}>
            npx create-react-app my-app
          </Quote>
          <Quote textColor="primary" textSize="50px" style={{textAlign: 'left'}}>
            cd my-app
          </Quote>
          <Quote textColor="primary" textSize="50px" style={{textAlign: 'left'}}>
            npm start
          </Quote>
        </Slide>
        <Slide transition={['fade']}>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/cra.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '23px' }}
          />
        </Slide>
        <Slide transition={['fade']}>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/cra-app.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '18px' }}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary">
            http://localhost:3000/
          </Heading>
          <Image src={images.cra} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading margin="100px" size={4} textColor="primary">
            "What if I need to learn a new JS framework?"
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="todoMVC" textColor="primary">
          <Image src={images.todoMVC} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="todoApp" textColor="primary">
          <Image src={images.todoApp} width={800} />
        </Slide>
        <Slide>
          <Heading margin="100px" size={6} textColor="secondary" caps>
            You can build it, we can help
          </Heading>
          <Text fit='true'>
            https://github.com/kylebustard/todomvc-react
          </Text>
        </Slide>
      </Deck>
    );
  }
}
