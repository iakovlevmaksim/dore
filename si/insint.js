/**
 * Creates a new proposed size using the specified width and height.
 * Validates that width and height are positive numbers.
 *
 * @param {number} width - The width of the proposed size.
 * @param {number} height - The height of the proposed size.
 * @returns {Object} An object representing the proposed size, or an error message if invalid.
 */
function createProposedSize(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Width and height must be numbers');
  }
  if (width <= 0 || height <= 0) {
    throw new Error('Width and height must be positive numbers');
  }
  
  return {
    width: width,
    height: height
  };
}

// Example usage:
try {
  const proposedSize = createProposedSize(800, 600);
  console.log(proposedSize); // { width: 800, height: 600 }
} catch (error) {
  console.error(error.message);
}
