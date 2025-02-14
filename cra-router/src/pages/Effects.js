import React, {
  useState,
  // useEffect,
  useRef,
  useInsertionEffect,
  useLayoutEffect,
  // useOptimistic,
} from "react";

// const LikeButton = () => {
//   const [likes, setLikes] = useState(100); // Initial likes from server
//   const [optimisticLikes, addOptimisticLike] = useOptimistic(likes);

//   const handleLike = async () => {
//     addOptimisticLike(optimisticLikes + 1); // Instant UI update

//     try {
//       await fakeApiRequest(); // Simulate server update
//       setLikes((prev) => prev + 1); // Confirm update if success
//     } catch {
//       alert("Failed to like!"); // Rollback if request fails
//       addOptimisticLike(likes); // Reset to previous state
//     }
//   };

//   return (
//     <div>
//       <p>Likes: {optimisticLikes}</p>
//       <button onClick={handleLike}>Like </button>
//     </div>
//   );
// };

// // Simulating an API call (50% chance of failure)
// const fakeApiRequest = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.5 ? resolve() : reject();
//     }, 1000);
//   });
// };

export default function Hooks() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    setWidth(boxRef.current.offsetWidth); // Get width before paint
  }, []);

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .dynamic-style {
        color: red;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup on unmount
    };
  }, []);

  return (
    <div style={{ padding: "1em" }}>
      <div
        ref={boxRef}
        style={{ width: "50%", background: "red", padding: "20px" }}
      ></div>
      <p>Box Width: {width}px</p>
      <p className="dynamic-style">Styled with useInsertionEffect</p>
      {/* <LikeButton /> */}
    </div>
  );
}
