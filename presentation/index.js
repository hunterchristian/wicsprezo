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
  todoApp: require('../assets/todoApp.png'),
  omLogo: require('../assets/om-logo.png'),
  harmonyLogo: require('../assets/harmony-logo.png'),
  harmonyArchitecture: require('../assets/how-it-works.jpg'),
  nucleusArchitecture: require('../assets/Architecture.png')
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
          <Image src={images.omLogo} width={300} />
          <Heading margin="50px" size={1} fit caps lineHeight={1} textColor="primary">
            Intro to Building Frontend Apps in OCM
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            Hunter Hodnett
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem margin="20px">Pre-flight checklist</ListItem>
            <ListItem margin="20px">Harmony</ListItem>
            <ListItem margin="20px">Experiences</ListItem>
            <ListItem margin="20px">Rules Engine/Traffic Manager</ListItem>
            <ListItem margin="20px">JS Crash Course</ListItem>
            <ListItem margin="20px">React Crash Course</ListItem>
            <ListItem margin="20px">SASS Crash Course</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Things you'll be able to do after today
          </Heading>
          <List>
            <ListItem margin="20px">Migrate components</ListItem>
            <ListItem margin="20px">Migrate experiences</ListItem>
            <ListItem margin="20px">Connect a customer to an experience</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={1} fit caps lineHeight={1} textColor="secondary">
            Pre-flight checklist
          </Heading>
          <Text margin="20px" textColor="tertiary" bold>
            http://om-curriculum-b.apps-np.homedepot.com/custom-workshops/frontend-at-thd/getting-started/
          </Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Key terms
          </Heading>
          <Text>Experience</Text>
          <Text>Component</Text>
        </Slide>
        <Slide>
          <Image src={images.harmonyLogo} />
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Harmony UI</Heading>
          <List>
            <ListItem>Component Disovery</ListItem>
            <ListItem>Driving consensus on design and functionality of UI components</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Harmony CLI</Heading>
          <List>
            <ListItem>Code generator</ListItem>
            <List>
              <ListItem>Experiences</ListItem>
              <ListItem>Components</ListItem>
            </List>
            <ListItem>Pull request creation</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Experience
          </Heading>
          <Text>Composed of components, thin and disposable</Text>
          <Text>Simple layout logic and orchestration between components</Text>
          <Text>Not a place for business logic</Text>
          <Text>All domain-level business logic should come from APIs and all view logic should live within components</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Example
          </Heading>
          <Text>
            PIP experience for Appliances
          </Text>
          <List>
            <ListItem margin="20px">Want to give customers shopping for Refridgerators a different layout or set of components than those on a Washing Machine product page</ListItem>
            <ListItem margin="20px">Clone the existing Appliance experience, and change the layout as needed</ListItem>
            <ListItem margin="20px">This is why we discourage putting logic into an experience. It should be simple to clone and change components without having to manage duplication of logic.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Creating experiences
          </Heading>
          <Link>https://pages.github.homedepot.com/cxt8h3t/Harmony/docs/create-an-experience</Link>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Where are the main settings of my experience?
          </Heading>
          <Text>
            You'll see a file called config.json at the root of your experience. This is where the main configuration lives, and it may look something like this:
          </Text>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/config-json.example')}
            margin="20px auto"
            overflow="overflow"
            style={{ fontSize: '23px' }}
          />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Where do I look in the code to start rendering things to my experience?
          </Heading>
          <Text>
          Experiences are essentially divided into client and server directories that should be self-explanotory: /src/client/ /src/server/

If you want something done on the client, you're going to want to work in the client directory and vice-versa for the server.

In /src/server, you should find a /templates directory (the location of this may vary depending on if you have an adaptive or responsive experience, but they work the same). These files can and should contain Mustache to render the parts of your experience server-side.
          </Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Universal Rendering
          </Heading>
          <Text>http://om-curriculum-b.apps-np.homedepot.com/custom-workshops/frontend-at-thd/universal-rendering-crash-course/</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Should I add a client-side router to my experience?
          </Heading>
          <Text>Only for filtering and other actions that are not at risk for "overwriting" other experiences</Text>
          <Text>We want requests to be routed through Rules Engine, so that Rules Engine can determine which experience to render. While implementing client-side routing, it is possible to "trap" users within a single experience, and prevent users from seeing another experience.</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Components
          </Heading>
          <Text>
            Definition: Reusable, encapsulated code that meets an existing UX approved standard. These would be components that would live in separate repos, apart from the consuming apps/experiences.
          </Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Component development flow quick start
          </Heading>
          <Text>
            https://harmony.homedepot.com/welcome
          </Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Component development flow in detail
          </Heading>
          <Text>
            https://pages.github.homedepot.com/cxt8h3t/Harmony/docs/React-Component-Quick-Start
          </Text>
        </Slide>
        <Slide>
          <Image src={images.harmonyArchitecture} />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Harmony UI Deep Dive
          </Heading>
          <Text>http://om-curriculum-b.apps-np.homedepot.com/custom-workshops/frontend-at-thd/intro-to-components/</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Creating new chapters
          </Heading>
          <Text>(TODO: paraphrase this) https://github.homedepot.com/harmony/harmony-app/wiki/Writing-Chapters</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Rules Engine
          </Heading>
          <Text>https://confluence.homedepot.com/pages/viewpage.action?spaceKey=OUS&title=Rule+Engine+Requirements</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Traffic Manager
          </Heading>
          <Text>https://confluence.homedepot.com/display/OUS/Traffic+Manager+Requirements</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Putting it all together
          </Heading>
          <Image src={images.nucleusArchitecture} />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            JS Crash Course
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            React Crash Course
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            SASS Crash Course
          </Heading>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
