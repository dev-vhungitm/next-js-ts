// Home
const homeName = 'Home';
const homePathname = '/';

// Not found
const notFoundName = 'Not Found';
const notFoundPathname = '/not-found';

// Services
const servicesName = 'Services';
const servicesPathname = '/services';

const softwareTestingName = 'Software Testing';
const softwareTestingPathname = servicesPathname + '/' + 'software-testing';

const digitalTransformationName = 'Digital Transformation';
const digitalTransformationPathname = servicesPathname + '/' + 'digital-transformation';

// News
const newsName = 'News';
const newsPathname = '/news';

// Contact
const contactName = 'Contact';
const contactPathname = '/contact-us';

// All path names
export const pathnames = {
  home: {
    name: homeName,
    pathname: homePathname
  },
  notFound: {
    name: notFoundName,
    pathname: notFoundPathname
  },
  services: {
    name: servicesName,
    pathname: servicesPathname,
    softwareTesting: {
      name: softwareTestingName,
      pathname: softwareTestingPathname
    },
    digitalTransformation: {
      name: digitalTransformationName,
      pathname: digitalTransformationPathname
    }
  },
  news: {
    name: newsName,
    pathname: newsPathname
  },
  contact: {
    name: contactName,
    pathname: contactPathname
  }
};
