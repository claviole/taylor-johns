import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import Placeholder from "../components/common/Placeholder";

// Cache for Firebase image URLs
const urlCache = new Map();

/**
 * Get a local image path
 * @param {string} category - The image category (hero, albums, etc.)
 * @param {string} filename - The image filename
 * @returns {string} - The path to the image
 */
export const getLocalImage = (category, filename) => {
  return `/images/${category}/${filename}`;
};

/**
 * Get an image URL from Firebase Storage
 * @param {string} path - The path to the image in Storage
 * @returns {Promise<string>} - A promise that resolves to the download URL
 */
export const getFirebaseImage = async (path) => {
  // Check if URL is already in cache
  if (urlCache.has(path)) {
    return urlCache.get(path);
  }

  try {
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);

    // Cache the URL
    urlCache.set(path, url);

    return url;
  } catch (error) {
    console.error("Error fetching image from Firebase:", error);
    // Use placeholder instead
    return null;
  }
};

/**
 * Get either a Placeholder component or an image URL
 * @param {string} type - The type of placeholder (hero, album, feed, etc.)
 * @param {string} alt - Alt text for the image
 * @param {string} height - Optional height for the placeholder
 * @returns {React.Component} - A Placeholder component
 */
export const getPlaceholder = (type, alt, height) => {
  return <Placeholder type={type} alt={alt} height={height} />;
};

/**
 * Preload a set of Firebase images to cache their URLs
 * @param {Array<string>} paths - Array of image paths in Firebase Storage
 */
export const preloadFirebaseImages = async (paths) => {
  const promises = paths.map((path) => getFirebaseImage(path));
  await Promise.all(promises);
};

export default {
  getLocalImage,
  getFirebaseImage,
  getPlaceholder,
  preloadFirebaseImages,
};
