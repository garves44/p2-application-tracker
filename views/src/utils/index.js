/**
 * ===============[ TABLE OF CONTENTS ]===============
 * 1. Functions
 *   1.1 generateRandomNumber()
 *   1.2 shuffle_array()
 *   1.3 AlertMessage()
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

  /**
   * 1.3 AlertMessage()
   * @param {string} message - Message to go in the alert box
   * @param {string} addThisClass - defaults to empty string. Can be info, danger, or success.
   */
  AlertMessage: function (
    message = "",
    addThisClass = "info",
    appendAfterElement,
  ) {
    $("#alert_message").remove();

    var alertElement = $("<div>")
      .addClass("col-12 alert")
      .attr("id", "alert_message");

    // RESET Alert Message
    if (message === "") {
      $("#main-section .first-row").empty();
      return;
    } else if (addThisClass === "info") {
      // Default alert
      addThisClass = "alert-info";
    } else if (addThisClass === "danger") {
      addThisClass = "alert-danger";
    } else if (addThisClass === "success") {
      addThisClass = "alert-success";
    }

    // IF same alert message keeps getting spammed then add ! and change color red
    if (
      $("#alert-messages").html() !== undefined &&
      $("#alert-messages").html() === message
    ) {
      message += "!";
      addThisClass = "alert-danger";
    }

    // Add the new class
    alertElement.addClass(addThisClass);

    // Display the alert message
    alertElement.html(message);

    if (appendAfterElement === undefined) {
      appendAfterElement = $("#main-section");
    }

    appendAfterElement.prepend(alertElement);
    return;
  },
};

export default Utils;
