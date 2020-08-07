/**
 * ===============[ TABLE OF CONTENTS ]===============
 * 1. Functions
 *   1.1 generateRandomNumber()
 *   1.2 shuffle_array()
 *   1.3 runEffect()
 *   1.4 AlertMessage()
 ******************************************************/
import $ from "jquery";

var Utils = {
  /**
   * 1.1 generateRandomNumber
   * @param {int} min
   * @param {max} max
   */
  generateRandomNumber: function (min = 0, max = 10) {
    return Math.floor(Math.random() * Math.floor(+max - +min)) + +min;
  },

  /**
   * 1.2 shuffle_array
   * @param {array} some_array
   * @return {array} some_array - returns the shuffled version.
   */
  shuffle_array: function (some_array) {
    return some_array.sort(() => Math.random() - 0.5);
  },
};

export default Utils;
