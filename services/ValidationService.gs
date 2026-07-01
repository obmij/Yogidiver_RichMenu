const ValidationService = {
  run() {
    const results = [];

    results.push(this.check('CONFIG exists', () => !!CONFIG && !!CONFIG.APP_NAME));
    results.push(this.check('Booking courses exist', () => Array.isArray(BOOKING_COURSES) && BOOKING_COURSES.length >= 4));
    results.push(this.check('Rich menu has 6 areas', () => RichMenuService.areas().length === 6));
    results.push(this.check('Casual Flex builds', () => FlexBuilder.course(COURSES.casual).type === 'bubble'));
    results.push(this.check('Professional Flex builds', () => FlexBuilder.course(COURSES.professional).type === 'bubble'));
    results.push(this.check('Guided pricing builds', () => PricingBuilder.card(COURSES.guided).type === 'bubble'));
    results.push(this.check('Booking carousel builds', () => CarouselBuilder.booking(BOOKING_COURSES).contents.length === BOOKING_COURSES.length));
    results.push(this.check('Pretrip info builds', () => FlexBuilder.info(INFO_PAGES.pretrip).type === 'bubble'));
    results.push(this.check('Online info builds', () => FlexBuilder.info(INFO_PAGES.online).type === 'bubble'));

    results.forEach(result => Logger.log(result.status + ' ' + result.name));

    const failed = results.filter(result => result.status !== 'PASS');
    if (failed.length) {
      throw new Error('Validation failed: ' + failed.map(result => result.name).join(', '));
    }

    return results;
  },

  check(name, fn) {
    try {
      return {
        name,
        status: fn() ? 'PASS' : 'FAIL'
      };
    } catch (error) {
      return {
        name,
        status: 'FAIL',
        error: String(error)
      };
    }
  }
};
