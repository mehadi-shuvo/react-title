import { useEffect } from "react";
import { UseTitleOptions } from "./types";

const useTitle = (title: string, options: UseTitleOptions = {}) => {
  const {
    defaultTitle = "My App", // Default title
    prefix = "",
    suffix = "",
    separator = " / ",
    template = "{title}", // Default template
  } = options;

  useEffect(() => {
    // Determine the final title
    let finalTitle = title || defaultTitle;

    // Apply prefix and suffix
    if (prefix) finalTitle = `${prefix}${separator}${finalTitle}`;
    if (suffix) finalTitle = `${finalTitle}${separator}${suffix}`;

    // Apply template (e.g., "{page} - {appName}")
    finalTitle = template.replace("{title}", finalTitle);

    // Set the document title
    document.title = finalTitle;

    // Restore the previous title on unmount
    return () => {
      document.title = defaultTitle;
    };
  }, [title, defaultTitle, prefix, suffix, separator, template]);
};

export default useTitle;
