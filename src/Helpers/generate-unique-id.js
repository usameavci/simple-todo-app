const generateUniqueId = () => (Math.random() * 1e32).toString(36).toUpperCase().replace(/0/g, '');

export default generateUniqueId;
