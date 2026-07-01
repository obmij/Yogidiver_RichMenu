/**
 * ======================================================
 * Google Form
 * ======================================================
 */

const FormService={};

FormService.create=function(){

    const form=

        FormApp.create(

            CONFIG.FORM_TITLE

        );

    form.addTextItem()

        .setTitle("Course")

        .setRequired(true);

    form.addTextItem()

        .setTitle("中文姓名")

        .setRequired(true);

    form.addTextItem()

        .setTitle("English Name")

        .setRequired(true);

    form.addTextItem()

        .setTitle("Email")

        .setRequired(true);

    form.addTextItem()

        .setTitle("Phone")

        .setRequired(true);

    form.addDateItem()

        .setTitle("Preferred Date")

        .setRequired(true);

    form.addParagraphTextItem()

        .setTitle("Medical Conditions");

    Logger.log(form.getPublishedUrl());

    Logger.log(form.getId());

    return form;

};

const form = FormApp.create(CONFIG.FORM_TITLE);

AppProperties.set(
  "FORM_ID",
  form.getId()
);

AppProperties.set(
  "FORM_URL",
  form.getPublishedUrl()
);