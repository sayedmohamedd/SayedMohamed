import { skills } from "@/app/utlis/data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-5 py-20">
        <h2 className="text-4xl font-medium border-l-8 px-3 mb-12 border-primary text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                transition-all
                duration-300
                hover:border-primary
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-primary/10
              "
            >
              <div className="text-4xl mb-4">{skill.icon}</div>

              <h3 className="text-white text-lg font-semibold">{skill.name}</h3>

              <p className="text-gray-400 text-sm mt-1">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
