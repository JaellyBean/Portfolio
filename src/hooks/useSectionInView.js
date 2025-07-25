import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Custom hook for section in-view detection
 * @param {Object} options - Configuration options
 * @param {string} options.margin - Margin for triggering in-view (default: "-100px")
 * @param {boolean} options.once - Whether to trigger only once (default: true)
 * @returns {Object} - { ref, isInView }
 */
const useSectionInView = (options = {}) => {
  const { margin = "-100px", once = true } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return { ref, isInView };
};

export default useSectionInView;
