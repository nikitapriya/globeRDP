import { useEffect, useState } from "react";

const TypewriterText = () => {
  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Netherlands",
    "Germany",
  ];

  const [textIndex, setTextIndex] = useState(0); // country index
  const [charIndex, setCharIndex] = useState(0); // character index
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = countries[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 30);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before delete
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      // Move to next country
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % countries.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <p className="text-xl md:text-4xl mb-4 text-orange-500">
      {displayText}
      <span className="fast-cursor  text-4xl text-white">|</span>
    </p>
  );
};

export default TypewriterText;
