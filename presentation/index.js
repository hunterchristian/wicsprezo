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
  Table,
  TableBody,
  TableRow,
  TableItem,
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
  nucleusArchitecture: require('../assets/Architecture.png'),
  productPod: require('../assets/productPod.png'),
  nucleusLogo: require('../assets/nucleus-logo.png'),
  experienceExample: require('../assets/experience.png')
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
            Introductions
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Objective of this course
          </Heading>
          <List>
            <ListItem margin="20px">Saying "yes" more often</ListItem>
            <ListItem margin="20px">Speed to market</ListItem>
            <ListItem margin="20px">"Take care of the customer, and the rest will take care of itself"</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Obstacles to "yes"
          </Heading>
          <List>
            <ListItem margin="20px">"Works on my machine"</ListItem>
            <ListItem margin="20px">UX and Product visibility into Engineering</ListItem>
            <ListItem margin="20px">High cost deployments</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Tools in our toolbox
          </Heading>
          <List>
            <ListItem margin="20px">Harmony CLI</ListItem>
            <ListItem margin="20px">Harmony UI</ListItem>
            <ListItem margin="20px">Nucleus</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <ListItem margin="20px">Pre-flight check</ListItem>
            <ListItem margin="20px">Key terms</ListItem>
            <ListItem margin="20px">Problem #1 - Standardization</ListItem>
            <ListItem margin="20px">Problem #2 - Discoverability</ListItem>
            <ListItem margin="20px">Lunch</ListItem>
            <ListItem margin="20px">Problem #3 - Deployment</ListItem>
            <ListItem margin="20px">Recap</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            We are going to understand this
          </Heading>
          <Image src={images.harmonyArchitecture} />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            And this!
          </Heading>
          <Image src={images.nucleusArchitecture} />
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
          <Text>Component</Text>
          <Text>Experience</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Components
          </Heading>
          <List>
            <ListItem margin="20px">Reusable, encapsulated code that meets an existing UX approved standard</ListItem>
            <ListItem margin="20px">Separate from consuming apps and experiences</ListItem>
            <ListItem margin="20px">Feature-level, not element-level</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Example
          </Heading>
          <List>
            <ListItem margin="20px">Ratings and Reviews</ListItem>
            <ListItem margin="20px">Buy-belt</ListItem>
            <ListItem margin="20px">Product-pod</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Experience
          </Heading>
          <List>
            <ListItem margin="20px">Single page that defines a particular layout</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Experiences are layout managers
          </Heading>
          <List>
            <ListItem margin="20px">Collection of feature-components within a shell</ListItem>
            <ListItem margin="20px">NOT a place to call APIs</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Experience
          </Heading>
          <Text>An experience can be a single page or multiple pages. Think of it as the experience a customer gets when using our site. As an example, this could be a grouping of pages, layouts and features for the Appliance category and in that experience it may have different feature layouts based on the different sub-categories like oven vs. refrigerator.</Text>
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
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Problem #1 - "Works on my machine"
          </Heading>
          <List>
            <ListItem margin="20px">Every component is different</ListItem>
            <ListItem margin="20px">Tribal knowledge</ListItem>
            <ListItem margin="20px">"Yes...but I need 2 months"</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Solution - Standardize
          </Heading>
          <List>
            <ListItem margin="20px">Common development environment for all</ListItem>
            <ListItem margin="20px">Generators</ListItem>
            <ListItem margin="20px">Local dev runner</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image src={images.harmonyLogo} />
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Harmony CLI</Heading>
          <List>
            <ListItem>Code generator</ListItem>
            <ListItem>Pull request creation</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Things we can create</Heading>
          <List>
            <ListItem>Component</ListItem>
            <ListItem>Utility</ListItem>
            <ListItem>Experience</ListItem>
            <ListItem>Style</ListItem>
            <ListItem>Guideline</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Development flow</Heading>
          <List>
            <ListItem>harmony make</ListItem>
            <ListItem>harmony branch</ListItem>
            <ListItem>harmony push</ListItem>
            <ListItem>harmony pr</ListItem>
            <ListItem>harmony release</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Demo</Heading>
          <Text>https://harmony.homedepot.com/welcome</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.harmonyArchitecture} />
        </Slide>
        <Slide>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
              <Heading style={{maxWidth: '400px'}} size={5} textColor="secondary">You can do it, we can help</Heading>
              <Text>Create a ProductPod component</Text>
            </div>
            <div>
              <Image src={images.productPod} width={300} />
            </div>
          </div>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Problem #2 - UX and Product visibility into Engineering
          </Heading>
          <List>
            <ListItem margin="20px">"What's currently in flight?"</ListItem>
            <ListItem margin="20px">"What were we doing before?"</ListItem>
            <ListItem margin="20px">"Does a similar component already exist?"</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Also problem #2 - Engineering visibility into Engineering
          </Heading>
          <List>
            <ListItem margin="20px">"How does this component work?"</ListItem>
            <ListItem margin="20px">"How do I use this component?"</ListItem>
            <ListItem margin="20px">"Does a similar component already exist?"</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Solution - Make a UI
          </Heading>
          <List>
            <ListItem margin="20px">"live" components</ListItem>
            <ListItem margin="20px">Previous versions</ListItem>
            <ListItem margin="20px">Development branches</ListItem>
            <ListItem margin="20px">Documentation</ListItem>
            <ListItem margin="20px">Discoverability</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image src={images.harmonyLogo} />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Harmony UI Deep Dive
          </Heading>
          <Text>http://om-curriculum-b.apps-np.homedepot.com/custom-workshops/frontend-at-thd/intro-to-components/</Text>
        </Slide>
        <Slide>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
              <Heading style={{maxWidth: '400px'}} size={5} textColor="secondary">You can do it, we can help</Heading>
              <Text>Publish your ProductPod component</Text>
            </div>
            <div>
              <Image src={images.productPod} width={300} />
            </div>
          </div>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.harmonyArchitecture} />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.nucleusArchitecture} />
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Component Pipelines</Heading>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.nucleusArchitecture} />
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Problem #3 - High cost deployments
          </Heading>
          <List>
            <ListItem margin="20px">Small bugs discovered after deployment</ListItem>
            <ListItem margin="20px">Small changes blocked by other unrelated changes</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Problem #3 - High cost deployments
          </Heading>
          <List>
            <ListItem margin="20px">Deploying requires rebuilding a monolithic app</ListItem>
            <ListItem margin="20px">Each app has own GCP instance</ListItem>
            <ListItem margin="20px">Hard on SREs, time consuming</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Solution
          </Heading>
          <List>
            <ListItem margin="20px">Separate business logic from rendering logic</ListItem>
            <ListItem margin="20px">Separate "what" the customer sees from "how" they see it</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Solution
          </Heading>
          <List>
            <ListItem margin="20px">Slice website into "experiences" that can be deployed independently</ListItem>
            <ListItem margin="20px">"deployment" becomes copy/pasting from one GCS bucket into another</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Image src={images.nucleusLogo} width="600px" />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Should I add a client-side router to my experience?
          </Heading>
          <Text>Only for filtering and other actions that are not at risk for "overwriting" other experiences</Text>
          <Text>We want requests to be routed through Rules Engine, so that Rules Engine can determine which experience to render. While implementing client-side routing, it is possible to "trap" users within a single experience, and prevent users from seeing another experience.</Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What's a shell?
          </Heading>
          <List>
            <ListItem margin="20px">HTML file that wraps an experience</ListItem>
            <ListItem margin="20px">Includes tools that are common to all experiences</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What's in the shell?
          </Heading>
          <List>
            <ListItem margin="20px">Header and footer</ListItem>
            <ListItem margin="20px">Event bus</ListItem>
            <ListItem margin="20px">Polyfills</ListItem>
            <ListItem margin="20px">...much more</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What's an event bus?
          </Heading>
          <List>
            <ListItem margin="20px">Agnostic inter-component communication</ListItem>
            <ListItem margin="20px">"Display a message in the buy-belt when customer clicks checkbox"</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Demo
          </Heading>
          <Link>https://pages.github.homedepot.com/cxt8h3t/Harmony/docs/create-an-experience</Link>
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            How does an experience get published?
          </Heading>
          <List>
            <ListItem margin="20px">Experience transformed into JSON and eval'ed</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.nucleusArchitecture} />
        </Slide>
        <Slide>
          <Heading size={5} textColor="secondary">Experience Pipelines</Heading>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.nucleusArchitecture} />
        </Slide>
        <Slide bgColor="primary">
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            How does an experience get rendered?
          </Heading>
          <List>
            <ListItem margin="20px">Node.js server</ListItem>
            <ListItem margin="20px">Universal Rendering</ListItem>
            <ListItem margin="20px">Experience transformed into JSON and eval'ed</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.nucleusArchitecture} />
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Universal Rendering
          </Heading>
          <Text>http://om-curriculum-b.apps-np.homedepot.com/custom-workshops/frontend-at-thd/universal-rendering-crash-course/</Text>
        </Slide>
        <Slide>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column', minWidth: '400px'}}>
              <Heading style={{maxWidth: '400px'}} size={5} textColor="secondary">You can do it, we can help</Heading>
              <Text>Create an experience for your ProductPod</Text>
            </div>
            <div>
              <Image src={images.experienceExample} width={1750} style={{margin: '50px'}} />
            </div>
          </div>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            Rules Engine
          </Heading>
          <Text>https://confluence.homedepot.com/pages/viewpage.action?spaceKey=OUS&title=Rule+Engine+Requirements</Text>
        </Slide>
        <Slide>
          <Heading margin="50px" size={5} lineHeight={1} textColor="secondary">
            What do we understand so far?
          </Heading>
          <Image src={images.nucleusArchitecture} />
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
