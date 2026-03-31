

export interface TeamMember {
  name: string
  role: string
  image?: string   // imported image module — leave undefined to show generated avatar
  github?: string
  linkedin?: string
  instagram?: string
}

export interface TeamData {
  leadership: TeamMember[]
  technical: TeamMember[]
  events: TeamMember[]
  outreach: TeamMember[]
  contentPR: TeamMember[]
  documentation: TeamMember[]
}

const teamData: TeamData = {

  leadership: [
    {
      name: 'Durgesh',
      role: 'President',
      image: '/images/Durgesh_President.jpg',
      github: 'https://github.com/Drugexsh',
      linkedin: 'https://www.linkedin.com/in/durgeshfore/',
    },
    {
      name: 'Avaneesh Yajurvedi',
      role: 'Vice President',
      image: '/images/avaneesh_yajurvedi.jpg',
      github: 'https://github.com/AvaneeshYajurvedi',
      linkedin: 'http://www.linkedin.com/in/avaneesh-yajurvedi-99bb77377',
    },
  ],

  // technical: [
  //   { name: '', role: 'Tech Lead' },
  //   { name: '', role: 'Technical Member' },
  //   { name: '', role: 'Technical Member' },
  //   { name: '', role: 'Technical Member' },
  //   { name: '', role: 'Tech Lead' },
  //   { name: '', role: 'Technical Member' },
  //   { name: '', role: 'Technical Member' },
  //   { name: '', role: 'Technical Member' },
  // ],

  technical: [
    {
      name: 'Vallabh Chikhale',
      role: 'Technical Head',
      image: '/images/vallab.jpeg',
      github: '',
      linkedin: 'https://www.linkedin.com/in/vallabh-chikhale-628655326/',
    },
    {
      name: 'Yash Vasant Bhanushali',
      role: 'Technical Head',
      image: '/images/Yash.jpg',
      github: 'https://github.com/yash-yb',
      linkedin: 'https://www.linkedin.com/in/yash-bhanushali-87584b391/',
    },
     {
      name: 'Sujal Patil',
      role: 'Technical Member',
      image: '/images/sujal.jpeg',
      github: 'https://github.com/SujalPatil21',
      linkedin: 'https://www.linkedin.com/in/sujalpatil21/',
    },
    {
      name: 'Sibtain Raza',
      role: 'Technical Member',
      image: '/images/Raza.jpeg',
      github: 'https://github.com/sibtain-raza817',
      linkedin: 'https://www.linkedin.com/in/sibtain-raza-71ba56320/',
    },
   
    {
      name: 'Vaishnavi Ganesh Mahajan',
      role: 'Technical Member',
      image: '/images/devansh.jpg', 
      github: 'https://github.com/vaishnaviimahajann',
      linkedin: 'https://www.linkedin.com/in/vaishnavi-mahajan-819911390/',
    },
    {
      name: 'Aarya Joshi',
      role: 'Technical Member',
      image: '/images/arya.jpeg', 
      github: 'https://github.com/aaryajoshi-07',
      linkedin: 'https://www.linkedin.com/in/aarya-joshi-506a20377/',

    },
    {
      name: 'Devansh Deshmukh',
      role: 'Technical Member',
      image: '/images/vashnavi.jpeg', 
      github: 'https://github.com/devanshdeshmukh-hue',
      linkedin: 'https://www.linkedin.com/in/devansh-deshmukh-374974390/',
    },
    {
      name: 'Khushal Santosh Rayrikar',
      role: 'Technical Member',
      image: '/images/khusal.png', 
      github: 'https://github.com/Khushal-Rayrikar',
      linkedin: 'https://www.linkedin.com/in/khushal-rayrikar-777a10355/',
    },
  ],

  events: [
    {
      name: ' Shaikh Mohommad Muazzam Abdul Mubin',
      role: 'Event and logistics head ',
      image: '/images/Muazzam.jpg',
      github: 'https://github.com/muazzamshaikh333-md',
      linkedin: 'https://www.linkedin.com/in/mohommad-muazzam-shaikh-023620367/',
    },
    {
      name: 'Vedika yadav ',
      role: 'Event and logistics team member  ',
      image: '/images/sujal.jpeg',
      github: 'https://github.com/muazzamshaikh333-md',
      linkedin: 'https://www.linkedin.com/in/mohommad-muazzam-shaikh-023620367/',
    },
    {
      name: ' Shaikh Mohommad Muazzam Abdul Mubin',
      role: 'Event and logistics head ',
      image: '/images/sujal.jpeg',
      github: 'https://github.com/muazzamshaikh333-md',
      linkedin: 'https://www.linkedin.com/in/mohommad-muazzam-shaikh-023620367/',
    },
  ],

  outreach: [
    {
      name: 'Outreach Head',
      role: 'Team Head',
    },
    {
      name: 'Outreach Member 1',
      role: 'Team Member',
    },
    {
      name: 'Outreach Member 2',
      role: 'Team Member',
    },
  ],

  contentPR: [
    {
      name: 'Content Head',
      role: 'Team Head',
    },
    {
      name: 'Content Member 1',
      role: 'Team Member',
    },
    {
      name: 'Content Member 2',
      role: 'Team Member',
    },
  ],

  documentation: [
    {
      name: 'Docs Head',
      role: 'Team Head',
    },
    {
      name: 'Docs Member 1',
      role: 'Team Member',
    },
    {
      name: 'Docs Member 2',
      role: 'Team Member',
    },
  ],
}

export default teamData
