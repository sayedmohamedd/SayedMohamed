// "use client";
// import { motion } from "framer-motion";

// const Logo = () => {
//   return (
//     <motion.div
//       initial={{ y: "10vh", opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//     >
//       <h1 className="text-center text-2xl font-semibold">
//         Sayed<span className="ml-1.5 text-primary">Mo</span>
//       </h1>
//       <p className="text-xl font-medium">Full Stack Developer</p>
//     </motion.div>
//   );
// };

// export default Logo;

"use client";

import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h1 className="text-center text-2xl font-bold">
        Sayed<span className="text-primary">.Mo</span>
      </h1>

      <p className="text-sm text-center text-gray-400 mt-1">
        Full Stack Developer
      </p>
    </motion.div>
  );
};

export default Logo;
