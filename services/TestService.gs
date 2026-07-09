const TestService = {
  run() {
    const checks = [];

    this.check(checks, 'CONFIG object exists', typeof CONFIG === 'object');
    this.check(checks, 'LINE token property key configured', CONFIG.LINE_CHANNEL_ACCESS_TOKEN_KEY === 'LINE_CHANNEL_ACCESS_TOKEN');
    this.check(checks, 'Rich menu size is 2500 x 1686', CONFIG.RICH_MENU_WIDTH === 2500 && CONFIG.RICH_MENU_HEIGHT === 1686);

    const areas = RichMenuService.areas();
    this.check(checks, 'Rich menu has 6 tappable areas', areas.length === 6, areas.length + ' areas found');
    this.check(checks, 'Rich menu uses postback actions only', areas.every(area => area.action && area.action.type === 'postback'));
    this.check(checks, 'Rich menu bounds cover expected size', this.boundsAreValid(areas), JSON.stringify(areas.map(area => area.bounds)));
    this.check(checks, 'Rich menu postback values match webhook routes', this.postbacksAreValid(areas), areas.map(area => area.action.data).join(', '));

    this.check(checks, 'Course data exists', !!COURSES.casual && !!COURSES.professional && !!COURSES.guided);
    this.check(checks, 'Booking courses exist', Array.isArray(BOOKING_COURSES) && BOOKING_COURSES.length >= 4);
    this.check(checks, 'Info pages exist', !!INFO_PAGES.pretrip && !!INFO_PAGES.online);

    this.check(checks, 'Casual Flex payload builds', this.canBuild(() => FlexBuilder.course(COURSES.casual)));
    this.check(checks, 'Professional Flex payload builds', this.canBuild(() => FlexBuilder.course(COURSES.professional)));
    this.check(checks, 'Guided pricing Flex payload builds', this.canBuild(() => PricingBuilder.card(COURSES.guided)));
    this.check(checks, 'Booking carousel payload builds', this.canBuild(() => CarouselBuilder.booking(BOOKING_COURSES)));
    this.check(checks, 'Pretrip info payload builds', this.canBuild(() => FlexBuilder.info(INFO_PAGES.pretrip)));
    this.check(checks, 'Online experience payload builds', this.canBuild(() => FlexBuilder.info(INFO_PAGES.online)));

    const failed = checks.filter(item => !item.pass);
    return {
      ok: failed.length === 0,
      checkedAt: new Date().toISOString(),
      failed: failed.length,
      checks: checks
    };
  },

  check(checks, name, pass, details) {
    checks.push({
      name: name,
      pass: !!pass,
      details: details || ''
    });
  },

  canBuild(factory) {
    try {
      const payload = factory();
      JSON.stringify(payload);
      return !!payload && (payload.type === 'bubble' || payload.type === 'carousel');
    } catch (error) {
      Logger.log(error.stack || error);
      return false;
    }
  },

  boundsAreValid(areas) {
    if (!Array.isArray(areas) || areas.length !== 6) return false;
    const expected = [
      { x: 0, y: 0, width: 833, height: 843 },
      { x: 833, y: 0, width: 833, height: 843 },
      { x: 1666, y: 0, width: 834, height: 843 },
      { x: 0, y: 843, width: 833, height: 843 },
      { x: 833, y: 843, width: 833, height: 843 },
      { x: 1666, y: 843, width: 834, height: 843 }
    ];

    return expected.every((expectedBounds, index) => {
      const actual = areas[index].bounds;
      return actual.x === expectedBounds.x &&
        actual.y === expectedBounds.y &&
        actual.width === expectedBounds.width &&
        actual.height === expectedBounds.height;
    });
  },

  postbacksAreValid(areas) {
    const expected = ['menu=casual', 'menu=pro', 'menu=guided', 'menu=booking', 'menu=pretrip', 'menu=online'];
    return expected.every((value, index) => areas[index].action && areas[index].action.data === value);
  }
};
