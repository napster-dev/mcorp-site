import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, HardHat, LandPlot, Hammer, Recycle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Residential Development',
      description: 'Creating luxury living spaces that blend modern aesthetics with functional comfort.',
      icon: <Home size={40} className="text-rust" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: 'Commercial Spaces',
      description: 'Innovative and efficient commercial buildings that redefine urban landscapes.',
      icon: <Building2 size={40} className="text-rust" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069",
    },
    {
      title: 'Civil Works & Infrastructure',
      description: 'Robust engineering and large-scale infrastructure projects that stand the test of time.',
      icon: <HardHat size={40} className="text-rust" />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: 'Real Estate Development',
      description: 'Strategic planning and development of premium properties and land.',
      icon: <LandPlot size={40} className="text-rust" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073",
    },
    {
      title: 'Remodeling & Renovation',
      description: 'Transforming existing structures into modern masterpieces with precision.',
      icon: <Hammer size={40} className="text-rust" />,
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2070",
    },
    {
      title: 'Sustainable Construction',
      description: 'Eco-friendly building practices focused on innovation and environmental responsibility.',
      icon: <Recycle size={40} className="text-rust" />,
      image: "https://images.unsplash.com/photo-1518005020481-4235e1284f18?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-surface transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">Our Specialties</span>
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-heading leading-tight">
              Precision Engineering Meets <span className="italic text-gradient-rust font-light">Visionary Design</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted font-light max-w-sm mb-4"
          >
            At MCORP, we deliver excellence through a wide spectrum of specialized construction and development services.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] overflow-hidden bg-background border border-border-subtle transition-colors duration-500"
            >
              {/* Background Image with Hover Effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="mb-6 transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-heading mb-3 group-hover:text-rust transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="w-12 h-px bg-rust/50 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Number/Index overlay */}
              <div className="absolute top-8 right-8 text-4xl font-poppins font-black text-heading/5 group-hover:text-rust/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
