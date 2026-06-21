import Link from "next/link";

const Project = ({ project, featured = false }) => {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-zinc-900
        shadow-xl
        h-[300px]
        ${featured ? "lg:w-[65%]" : "lg:w-[31%]"}
        md:w-[48%]
        w-full
      `}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-all
          duration-500
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
          backdrop-blur-[2px]
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
        "
      />

      {/* Featured Badge */}
      {featured && (
        <div
          className="
            absolute
            top-4
            left-4
            z-20
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            bg-primary
            text-white
          "
        >
          Featured Project
        </div>
      )}

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-10
          w-full
          p-5
          opacity-0
          translate-y-5
          group-hover:opacity-100
          group-hover:translate-y-0
          transition-all
          duration-300
        "
      >
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

        <p className="text-gray-300 text-sm mb-4">
          {project?.description?.slice(0, 80)}...
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project?.tech?.map((tech) => (
            <span
              key={project?.slug}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-white/10
                border
                border-white/10
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4
              py-2
              rounded-lg
              bg-primary
              text-white
              font-medium
              hover:scale-105
              transition
            "
          >
            Visit Live
          </a>

          <Link
            href={project?.github}
            className="
              px-4
              py-2
              rounded-lg
              border
              border-white/20
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
