import { MdOutlineWebAsset } from "react-icons/md";

const Service = ({ service }) => {
  return (
    <div
      className="
      relative
      group
      p-6
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-md
      transition-all
      duration-300
      hover:border-primary
      hover:-translate-y-2
      hover:shadow-xl
      hover:shadow-primary/10
    "
    >
      {/* Icon */}
      <div
        className="
        w-12
        h-12
        mb-4
        flex
        items-center
        justify-center
        rounded-xl
        bg-primary/10
        text-primary
        group-hover:bg-primary
        group-hover:text-white
        transition-all
        duration-300
      "
      >
        <MdOutlineWebAsset className="text-2xl" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed text-sm">
        {service.description}
      </p>
    </div>
  );
};

export default Service;
