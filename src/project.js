import Checkout from "./assets/portfolio/checkout.png";
import BIT from "./assets/BIT.png";
import newsVideo from "./assets/portfolio/news-portal.mp4";
import newsPortal from "./assets/portfolio/news-portal.jpg";
import avs from "./assets/portfolio/avs.png";
import avsVideo from "./assets/portfolio/avs.mp4";
import bitVideo from "./assets/portfolio/bitdemo.mp4";
import checkoutVideo from "./assets/portfolio/checkout-video.mp4";

export const Projects = [
  {
    id: 1,
    name: "Checkout Store",
    image: Checkout,
    link: "https://checkoutstore.co.uk/",
    videoUrl: checkoutVideo,
    description:
      "Checkout store is an e-commerce project that helps buisnesses to manage stock, sales, orders , track state of order, menage point of sales, online payments etc.",
    tasks: [
      "Significantly improving the performance of the application, over 30 times faster execution.",
      "Developing a content management system (CMS) for dynamic and customizable web pages.",
      "Writing large stored procedures in SQL  for increased efficiency and execution speed.",
      "Implementing file compression techniques to reduce the size of PDFs, Excel files,and other data formats.",
      "Integrating notification systems to send notifications to user's phones.",
      "Configuring email and SMS functionality for communication with users.",
      "Incorporating various payment methods such as PayPal and credit card processing.",
      "Implementing product view tracking mechanisms to analyze user behavior and preferences.",
      "Integrating coupon code functionality for discounts and promotions.",
    ],
  },
  {
    id: 2,
    name: "BIT",
    image: BIT,
    videoUrl: bitVideo,
    link: "https://www.building-intelligence.com/",
    description:
      "Our platform manages corporate building efficiency. It monitors gas emissions, presents opportunities for reducing emissions by selecting government funds.",
    tasks: [
      "Writing and optimizing high-performing queries in Entity Framework Core and Dapper.",
      "Authentication and authorization based on roles and claims.",
      "General filtering and sorting functionalities for grids.",
      "Email comunication",
      "Working will large calculations and graphs.",
      "Dockerizing applications for deployment.",
      "Applying design patterns",
      "Optimizing memory usage of applications.",
      "Optimizing render cycles in Angular applications to enhance performance.",
      "Sql chache",
      "Refactoring code to maximize reusability and maintainability across the application.",
      "Working with CSV files.",
    ],
  },
  {
    id: 3,
    name: "News Portal",
    videoUrl: newsVideo,
    gitLink: "https://github.com/berat422/NewsPortalApp",
    image: newsPortal,
    description:
      "News Portal is an application that allows you to upload your news and track all of the clicks and reaction of your visitors on your portal, also managing all users.",
    tasks: [],
  },
  {
    id: 4,
    name: "AVS",
    link: "https://avs.test.dcs.comitas.com/",
    videoUrl: avsVideo,
    image: avs,
    description: `
    AVS is a project for Swiss institutions that enables case management of children who need special education.`,
    tasks: [
      "Working with PDFs and QR codes.",
      "Scanning emails.",
      "Integrating Outlook Calendar.",
      "Historizing data in Entity Framework Core.",
      "Background jobs.",
      "Reading data from external sources.",
    ],
  },
];
