export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  year: string;
  client: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Islamabad Modern Towers',
    category: 'Commercial',
    description: 'A landmark commercial development in the heart of Islamabad. Featuring state-of-the-art office spaces, sustainable smart-building automation, dynamic double-glazed facades for optimal temperature control, and a modern lobby with multi-tier security systems. This high-end office tower provides executive suites, co-working space layouts, high-capacity underground parking, and an exquisite rooftop sky lounge with panoramic views of the Margalla Hills.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070'
    ],
    year: '2024',
    client: 'Apex Holdings Pvt Ltd',
    location: 'Sector G-8, Islamabad'
  },
  {
    id: 2,
    title: 'Luxury Villa G-11',
    category: 'Residential',
    description: 'A premium residential custom villa designed with a high-end minimalist theme and state-of-the-art engineering. The villa boasts a sleek concrete and glass exterior structure, double-height ceiling lobby, smart home integration (lighting, security, climate), imported marble flooring, custom architectural woodwork, custom deck swimming pool, landscaped gardens, and premium thermal insulation layouts suitable for year-round comfort.',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2070'
    ],
    year: '2025',
    client: 'Dr. Nadeem Malik',
    location: 'Sector G-11, Islamabad'
  },
  {
    id: 3,
    title: 'Metropolitan Bridge',
    category: 'Civil Works',
    description: 'A major structural infrastructure project displaying engineering excellence and high-capacity construction. Built using reinforced pre-stressed concrete girders and advanced seismic dampers, this flyover and bridge network facilitates smooth traffic flow over critical arterial intersections. The project was completed ahead of schedule while maintaining absolute safety protocols and high structural integrity standards.',
    images: [
      'https://images.unsplash.com/photo-1545558014-8687977e99e4?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=2070'
    ],
    year: '2023',
    client: 'Capital Development Authority (CDA)',
    location: 'Kashmir Highway, Islamabad'
  },
  {
    id: 4,
    title: 'Blue Area Corporate Plaza',
    category: 'Commercial',
    description: 'A modern commercial complex constructed in the premier business district of Islamabad. The corporate plaza features energy-efficient LED light designs, solar power generation modules, a dedicated central HVAC plant, flexible modular floor layouts for multinational companies, luxury conference rooms, and custom high-speed glass lifts. Built with a focus on LEED green building sustainability standards.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070'
    ],
    year: '2024',
    client: 'Emaar Builders',
    location: 'Blue Area, Islamabad'
  },
  {
    id: 5,
    title: 'The Haven Residencies',
    category: 'Residential',
    description: 'An elegant high-rise luxury apartment complex that seamlessly combines comfortable modern living with high-end premium community facilities. Features spacious penthouses and apartments, built-in kitchen appliances, private balconies with views, fully-equipped health clubs, children recreational play zones, high-speed elevator arrays, and professional 24/7 building management and concierge operations.',
    images: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070'
    ],
    year: '2025',
    client: 'Haven Developments Ltd',
    location: 'F-10 Markaz, Islamabad'
  },
  {
    id: 6,
    title: 'Industrial Park Infrastructure',
    category: 'Civil Works',
    description: 'An extensive heavy civil engineering and infrastructure development project covering over 100 acres. Included large-scale earthworks, high-load industrial grade concrete roads, integrated drainage networks, fire hydrant loops, high-capacity electrical grids, underground wastewater pipe corridors, and robust structural foundations for heavy manufacturing plants.',
    images: [
      'https://images.unsplash.com/photo-1518005020481-4235e1284f18?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070'
    ],
    year: '2023',
    client: 'National Industrial Zone (NIZ)',
    location: 'Industrial Area, Rawalpindi'
  }
];
