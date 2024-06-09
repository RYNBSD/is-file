/**
 * Make sure that the first element is true 
 */
exports.validateReturns = (result) => {
  for (let i = 0; i < result.length; i++) {
    if (i === 0) expect(result[i].valid).toBeTruthy()
    else expect(result[i].valid).toBeFalsy()
  }
};
