const scrambler =  {

  /**
   * Scramble a message and return the result.
   * @param selector <String>: JQuery selector to be used to find a message element's value.
   * @returns <String>: Return the scrambled message as an HTML string.
   */
  scramble(selector) {
    const message =  $(selector).val();
    const chars = '!@#$%^&*(){}0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const random = (max, min) => Math.round(Math.random() * (max - min) + min);
    let charCount = 0;
    const maxLineLength = 100;

    return  message.split('').reduce((acc, val) => {
      let newVals  = `<span hidden="">${val}</span>`;
      const numOfChars = random(75, 7);

      for (let i = 0; i <= numOfChars; i++) {
        newVals += `<span>${chars[random(0, chars.length-1)]}</span>`;
        charCount++;
        if(charCount % maxLineLength === 0) newVals += '<br/>';
      }
      return acc += newVals;
    }, '' );
  },

  /**
   *
   * @param selector <String>: JQuery selector to be used to find message characters in scrambled HTML.
   * @returns <String>: Returns the message unscrambled.
   */
  unscramble(selector) {
    return $(selector).map(function () {
      return $(this).text();
    }).get().join('');
  }
};