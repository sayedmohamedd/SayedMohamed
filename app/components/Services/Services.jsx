import { services } from "@/app/utlis/data";
import Service from "./Service";

const Services = () => {
  return (
    <section id="services" className="py-20 flex items-center">
      <div className="w-full bg-dark lg:rounded-r-3xl">
        <div className="container mx-auto px-5 md:px-10 lg:px-14 py-10 text-white">
          {/* Title */}
          <h2 className="text-4xl font-medium border-l-8 px-3 mb-12 border-primary">
            Services
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Service service={service} key={service.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
