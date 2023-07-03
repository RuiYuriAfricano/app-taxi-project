export const formatDate = (dateString = "") => {
  const date = dateString?.split("/");

  if (date?.length < 3) return "";

  return new Date(`${date[2]}-${date[1]}-${date[0]}`).toISOString();
};

export const validateEmail = (email) => {
  // Regular expression pattern for email validation
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Return true if the email matches the pattern, false otherwise
  return pattern.test(email);
};
