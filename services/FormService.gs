const FormService = {
  ensure() {
    const existingId = AppProperties.get('FORM_ID');
    if (existingId) {
      try {
        const form = FormApp.openById(existingId);
        AppProperties.set('FORM_URL', form.getPublishedUrl());
        return form;
      } catch (error) {
        AppProperties.remove('FORM_ID');
        AppProperties.remove('FORM_URL');
      }
    }

    const form = FormApp.create(CONFIG.FORM_TITLE);
    form.setDescription('YogiDiver course and trip booking form.');

    form.addListItem()
      .setTitle('Course')
      .setChoiceValues(BOOKING_COURSES.map(item => item.title).concat(['Professional Course Consultation']))
      .setRequired(true);

    form.addTextItem().setTitle('中文姓名').setRequired(true);
    form.addTextItem().setTitle('English Name').setRequired(true);
    form.addTextItem().setTitle('Email').setRequired(true);
    form.addTextItem().setTitle('Phone').setRequired(true);
    form.addDateItem().setTitle('Preferred Date').setRequired(true);
    form.addParagraphTextItem().setTitle('Medical Conditions / Notes');

    AppProperties.set('FORM_ID', form.getId());
    AppProperties.set('FORM_URL', form.getPublishedUrl());

    return form;
  },

  getUrl() {
    const url = AppProperties.get('FORM_URL');
    if (url) return url;

    const form = this.ensure();
    const formUrl = form.getPublishedUrl();
    AppProperties.set('FORM_URL', formUrl);
    return formUrl;
  }
};
