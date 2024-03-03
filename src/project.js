import Checkout from "./assets/portfolio/checkout.png";
import BIT from "./assets/BIT.png";
//import newsVideo from "./assets/portfolio/newsportal.mp4";
import newsPortal from "./assets/portfolio/telegrafi.png";
import avs from "./assets/portfolio/avs.png"
//import avsVideo from './assets/portfolio/avsvideo.mp4'

export const Projects = [
  {
    id: 1,
    name: "Checkout Store",
    videoUrl: "",
    image: Checkout,
    link: "https://checkoutstore.co.uk/",
    videoUrl:'',
    description:
      "Checkout store is an e-commerce project that helps buisnesses to manage stock, sales, orders , track state of order, menage point of sales, online payments etc.",
    tasks: [
      "Significantly improving the performance of the application, aiming for over 30 times faster execution.",
      "Developing a content management system (CMS) for dynamic and customizable web pages.",
      "Writing large stored procedures in SQL to enhance efficiency and responsiveness.",
      "Implementing file compression techniques to reduce the size of PDFs, Excel files,and other data formats.",
      "Integrating notification systems to send alerts to users' phones.",
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
    videoUrl:'',
    link: "https://www.building-intelligence.com/",
    description:
      "Introducing a project for efficient corporate building management. Our platform monitors gas emissions, providing real-time insights and predicting potential declines in building value. Users engage with eco-friendly practices, supporting renewable energy solutions and reducing greenhouse gas emissions.",
    tasks: [
      "Writing and optimizing high-performing queries in Entity Framework Core and Dapper.",
      "Implementing authentication and authorization based on roles and claims.",
      "Implementing general filtering and sorting functionalities for grids.",
      "Setting up and configuring SendGrid for email communication.",
      "Handling large calculations and generating graphs.",
      "Dockerizing applications for deployment.",
      "Applying design principles like SOLID, KISS, and the Factory pattern.",
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
    videoUrl: '',
    image: newsPortal,
    description:
      "News Portal is an application that allows you to upload your news and track all of the clicks and reaction of your visitors on your portal, also managing all users.",
    tasks: [],
  },
  {
    id: 4,
    name: "AVS",
    link:'https://avs.test.dcs.comitas.com/',
    videoUrl: '',
    image: avs,
    description: `MIRA: Empowering Swiss Children Through Education
    MIRA is a project developed for Switzerland, dedicated to providing additional educational support to children facing challenges in learning. Tailored to address the diverse needs of these students, MIRA introduces a user-friendly web application designed to streamline the application process for families and provide administrators with essential data for effective intervention.
    Through the MIRA web application, families can easily apply for specialized schooling programs, ensuring accessibility and inclusivity for all children in need. Simultaneously, administrators gain secure access to comprehensive data on enrolled children, enabling them to analyze, track progress, and tailor educational strategies to meet individual requirements.`,
    tasks: [
      "Working with PDFs and QR codes.",
      "Extracting files from emails.",
      "Working with CSV files",
      "Integrating Outlook Calendar.",
      "Implementing authentication and authorization based on roles and claims.",
      "Historizing data in Entity Framework Core.",
      "Background jobs.",
      "Reading data from other databases.",
    ],
  },
];
