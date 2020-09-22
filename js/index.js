const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

//Navbar
console.log(siteContent.nav['nav-item-1'])
 const navBar = document.querySelector('.container > header:nth-child(1) > nav:nth-child(1) > a:nth-child(1)') ;
 navBar.textContent = siteContent.nav['nav-item-1'];
 const navBar2 = document.querySelector('.container > header:nth-child(1) > nav:nth-child(1) > a:nth-child(2)') ;
 navBar2.textContent = siteContent.nav['nav-item-2'];
 const navBar3 = document.querySelector('.container > header:nth-child(1) > nav:nth-child(1) > a:nth-child(3)') ;
 navBar3.textContent = siteContent.nav['nav-item-3'];
 const navBar4 = document.querySelector('.container > header:nth-child(1) > nav:nth-child(1) > a:nth-child(4)') ;
 navBar4.textContent = siteContent.nav['nav-item-4'];
 const navBar5 = document.querySelector('.container > header:nth-child(1) > nav:nth-child(1) > a:nth-child(5)') ;
 navBar5.textContent = siteContent.nav['nav-item-5'];
 const navBar6 = document.querySelector('.container > header:nth-child(1) > nav:nth-child(1) > a:nth-child(6)') ;
 navBar6.textContent = siteContent.nav['nav-item-6'];
 const img = document.querySelector('img').src = siteContent.nav['img-src'];


 //section  -- .cta-text > h1:nth-child(1)

 const h1 = document.querySelector('.cta-text > h1').textContent = siteContent.cta['h1'];
 const button = document.querySelector('.cta-text > button').textContent = siteContent.cta['button'];
const img2 = document.getElementById("cta-img").src= siteContent.cta['img-src'];


//main-content


const Features = document.querySelector('.top-content > div:nth-child(1) > h4:nth-child(1)').textContent = siteContent["main-content"]["features-h4"];

const pFeatures = document.querySelector('.top-content > div:nth-child(1) > p:nth-child(2)').textContent = siteContent["main-content"]['features-content'];

const About = document.querySelector('.top-content > div:nth-child(2) > h4:nth-child(1)').textContent = siteContent["main-content"]["about-h4"];

const pAbout = document.querySelector('.top-content > div:nth-child(2) > p:nth-child(2)').textContent = siteContent["main-content"]['about-content'];

const imgOfCode = document.getElementById("middle-img").src= siteContent["main-content"]['middle-img-src'];


const Service = document.querySelector('.bottom-content > div:nth-child(1) > h4:nth-child(1)').textContent = siteContent["main-content"]['services-h4'];

const pService = document.querySelector('.bottom-content > div:nth-child(1) > p:nth-child(2)').textContent = siteContent["main-content"]['services-content'];

const Product = document.querySelector('.bottom-content > div:nth-child(2) > h4:nth-child(1)').textContent = siteContent["main-content"]['product-h4'];
 
const pProduct = document.querySelector('.bottom-content > div:nth-child(2) > p:nth-child(2)').textContent = siteContent["main-content"]['product-content'];

const vision = document.querySelector('.bottom-content > div:nth-child(3) > h4:nth-child(1)').textContent = siteContent["main-content"]['vision-h4'];

const pvision = document.querySelector('.bottom-content > div:nth-child(3) > p:nth-child(2)').textContent = siteContent["main-content"]['vision-content'];
 


//contact

const contact = document.querySelector('.contact > h4:nth-child(1)').textContent = siteContent.contact['contact-h4'];
const address = document.querySelector('.contact > p:nth-child(2)').textContent = siteContent.contact['address'];
const phone = document.querySelector('.contact > p:nth-child(3)').textContent = siteContent.contact['phone'];
const email = document.querySelector('.contact > p:nth-child(4)').textContent = siteContent.contact['email'];



//footer
const footer = document.querySelector('.container > footer:nth-child(5) > p:nth-child(1)').textContent = siteContent.footer['copyright'];
