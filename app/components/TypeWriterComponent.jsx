// "use client";
// import { Typewriter } from "react-simple-typewriter";

// const TypeWriterComponent = () => {
//   return (
//     <p className="text-2xl mb-2">
//       A
//       <span className="text-primary ml-2">
//         <Typewriter
//           words={[
//             "Full Stack MERN Developer",
//             "Next.js Developer",
//             "Shopify Developer",
//           ]}
//           loop={true}
//           cursor
//           cursorStyle="_"
//           typeSpeed={80}
//           deleteSpeed={50}
//           delaySpeed={1500}
//         />
//       </span>
//     </p>
//   );
// };

// export default TypeWriterComponent;

"use client";

import { Typewriter } from "react-simple-typewriter";

const TypeWriterComponent = () => {
  return (
    <p className="text-2xl md:text-3xl font-medium">
      <span className="text-primary">
        <Typewriter
          words={[
            "Full Stack MERN Developer",
            "Next.js Developer",
            "Shopify Developer",
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </p>
  );
};

export default TypeWriterComponent;
