"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <h2>{error.message}</h2>
      <button
        onClick={
          () => reset() // Attempt to recover by trying to re-render the segment
        }
      >
        Try again
      </button>
    </>
  );
}
