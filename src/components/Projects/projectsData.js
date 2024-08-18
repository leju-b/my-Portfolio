import startStopImage from '../../assets/images/start_stop.png';
import project2Image from '../../assets/images/target.png'; // Add your actual image paths
import project3Image from '../../assets/images/airbnb.png';
import project4Image from '../../assets/images/portfolio.png';
import project5Image from '../../assets/images/amplify.png';

const projectsData = [
  {
    id: 1,
    title: 'Instance Start/Stop Automation Using AWS Lambda and CloudWatch',
    description: 'Automated the start and stop of AWS EC2 instances using AWS Lambda and CloudWatch EventBridge.',
    githubLink: '',
    image: startStopImage ,
    category: 'devops'
  },
  {
    id: 2,
    title: 'Automated Infrastructure Setup Using Ansible',
    description: 'Developed an Ansible playbook to automate the setup, configuration, and deployment of applications on AWS EC2 instances.',
    githubLink: 'https://github.com/leju-b/Profile-App',
    image: project2Image,
    category: 'devops'
  },
  {
    id: 3,
    title: 'React Vite Application Deployment on AWS EC2 with NGINX',
    description: 'Deployed a React Vite application on an AWS EC2 instance using NGINX as a reverse proxy.',
    githubLink: 'https://github.com/leju-b/AirBnb-Clone-deployed-EC2',
    image: project3Image,
    // category: 'devops'
  },
  {
    id: 4,
    title: 'Personal Portfolio Website Using React and Node.js',
    description: 'Developed and deployed a personal portfolio website to showcase projects and skills.',
    githubLink: 'https://github.com/leju-b/my-Portfolio',
    image: project4Image,
    category: 'webdevelopment'
  },
  {
    id: 5,
    title: 'Travel Journal App Deployment Using AWS Amplify',
    description: 'Built and deployed a static travel journal application using React, HTML, and CSS, with automated deployment via AWS Amplify.',
    githubLink: 'https://github.com/leju-b/Travel-Journal-deploy-amplify',
    image: project5Image,
    category: ['devops','webdevelopment']
  }
//   // Add more projects as needed
];

export default projectsData;
