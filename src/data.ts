type Slide = {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  button?: string;
};

type Service = {
  id: number;
  title: string;
  subtitle: string;
  provide: [string, string, string];
};

type Project = {
  id: number;
  title: string;
  company: string;
  img: string;
  content: string;
};

type Image = {
  id: number;
  img: string;
};

type Slides = Slide[];
type Services = Service[];
type Projects = Project[];
type Gallery = Image[];

export const slides: Slides = [
  {
    id: 1,
    img: "/images/heroBg1.jpg",
    title: "Header",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aperiam eveniet eius labore, accusamus illum libero odio dolor pariatur velit rem repellat fugit officiis.",
    button: "Explore"
  },
  {
    id: 2,
    img: "/images/heroBg2.jpg",
    title: "Header",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aperiam eveniet eius labore, accusamus illum libero odio dolor pariatur velit rem repellat fugit officiis.",
    button: "Explore"
  },
  {
    id: 3,
    img: "/images/heroBg3.jpg",
    title: "Header",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aperiam eveniet eius labore, accusamus illum libero odio dolor pariatur velit rem repellat fugit officiis.",
    button: "Explore"
  },
];

export const services: Services = [
  {
    id: 1,
    title: "Lorem ipsum dolor consectetu",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab odit laudantium repellendus. Ratione quos illum dolor, voluptatibus in, tempore maxime omnis, ea a quaerat ex? At iusto ipsa laborum.",
    provide: [
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in"
    ]
  },
  {
    id: 2,
    title: "Lorem ipsum dolor consectetu",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab odit laudantium repellendus. Ratione quos illum dolor, voluptatibus in, tempore maxime omnis, ea a quaerat ex? At iusto ipsa laborum.",
    provide: [
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in"
    ]
  },
  {
    id: 3,
    title: "Lorem ipsum dolor consectetu",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab odit laudantium repellendus. Ratione quos illum dolor, voluptatibus in, tempore maxime omnis, ea a quaerat ex? At iusto ipsa laborum.",
    provide: [
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in"
    ]
  },
  {
    id: 4,
    title: "Lorem ipsum dolor consectetur",
    subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab odit laudantium repellendus. Ratione quos illum dolor, voluptatibus in, tempore maxime omnis, ea a quaerat ex? At iusto ipsa laborum.",
    provide: [
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in",
      "Ratione quos illum dolor, voluptatibus in"
    ]
  }
]
export const projects: Projects = [
  {
    id: 1,
    title: "Project Name",
    company: "Company Name",
    img: "project1.jpg",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nihil facilis maiores doloribus rerum architecto illum nam repudiandae odit saepe! Ipsam nulla quae accusamus ab. Ut doloremque totam a beatae!",
  },
  {
    id: 2,
    title: "Project Name",
    company: "Company Name",
    img: "project2.jpg",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nihil facilis maiores doloribus rerum architecto illum nam repudiandae odit saepe! Ipsam nulla quae accusamus ab. Ut doloremque totam a beatae!",
  },
  {
    id: 3,
    title: "Project Name",
    company: "Company Name",
    img: "project3.jpg",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, nihil facilis maiores doloribus rerum architecto illum nam repudiandae odit saepe! Ipsam nulla quae accusamus ab. Ut doloremque totam a beatae!",
  },
];

export const gallery: Gallery = [
  {
    id: 1,
    img: "slider1.jpg"
  },
  {
    id: 2,
    img: "slider2.jpg"
  },
  {
    id: 3,
    img: "about_img.jpg"
  },
]