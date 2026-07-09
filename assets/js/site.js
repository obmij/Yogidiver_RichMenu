const YogiDiverJ = (() => {
  const products = {
    course: [
      { id: 'owd', name: 'Open Water Diver (eLearning) 3 天 2 夜', price: 15000, note: '需先完成線上學習與考核後，才能進行平靜水域與海域實習課程。' },
      { id: 'aow', name: 'Advanced Open Water Diver', price: 10000, note: '進階開放水域課程。' },
      { id: 'other', name: '其餘課程｜專人聯繫安排', price: 0, note: 'Rescue Diver、Master Scuba Diver、Dive Master、OWSI、MSDT 請與專人聯繫。' }
    ],
    dive: [
      { id: 'guided', name: '導覽潛水｜2 人開團', price: 800, note: '以每潛／每氣瓶計價。' },
      { id: 'skin', name: 'Skin Dive｜至多 2 人', price: 2000, note: 'Skin Dive 至多 2 人。' }
    ]
  };

  const translations = {
    'zh-Hans': {
      navCourses: '潜水课程', navGuided: '导览潜水', navBooking: '线上预约', navContact: '联系',
      heroEyebrow: '水肺训练｜导览潜水｜线上体验', heroTitle: 'YogiDiver 优潜人', heroText: '以小班制、清楚节奏与安全决策，完成从 Open Water Diver 到专业级培训的完整潜水路径。', bookNow: '立即预订', viewPretrip: '查看行前须知', startTwo: '2 人即可开团', perDive: '导览潜水每潜／每气瓶起'
    },
    en: {
      navCourses: 'Courses', navGuided: 'Guided Diving', navBooking: 'Booking', navContact: 'Contact',
      heroEyebrow: 'Scuba training｜Guided diving｜Online experience', heroTitle: 'YogiDiver', heroText: 'Small-group scuba training and guided dives from Open Water Diver to professional development.', bookNow: 'Book now', viewPretrip: 'Pre-trip guide', startTwo: 'Starts from 2 guests', perDive: 'Guided dive per dive / cylinder'
    },
    ja: {
      navCourses: 'ダイビング講習', navGuided: 'ガイドダイブ', navBooking: 'オンライン予約', navContact: 'お問い合わせ',
      heroEyebrow: 'スクーバ講習｜ガイドダイブ｜オンライン体験', heroTitle: 'YogiDiver', heroText: '少人数制で安全重視のダイビング講習とガイドを提供します。', bookNow: '予約する', viewPretrip: '事前案内', startTwo: '2名から催行', perDive: 'ガイドダイブ 1本／1シリンダー'
    }
  };

  const money = value => new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD', maximumFractionDigits: 0 }).format(value);
  const $ = id => document.getElementById(id);

  function setupLanguage() {
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('[data-lang]').forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        const dict = translations[button.dataset.lang] || {};
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.dataset.i18n;
          if (dict[key]) el.textContent = dict[key];
        });
      });
    });
  }

  function setupBooking() {
    if (!$('bookingType') || !$('product') || !$('total')) return;

    const populateProducts = () => {
      const type = $('bookingType').value;
      $('product').innerHTML = products[type].map(product => `<option value="${product.id}">${product.name}</option>`).join('');
      calculateTotal();
    };

    const calculateTotal = () => {
      const type = $('bookingType').value;
      const product = products[type].find(item => item.id === $('product').value);
      const people = Number($('people').value) || 1;
      const cylinders = Number($('cylinders').value) || 1;
      const gearDays = Number($('gearDays').value) || 0;
      const computerDays = Number($('computerDays').value) || 0;
      let total = 0;

      if (type === 'course') {
        total = product.price * people;
      } else {
        total = product.id === 'guided' ? product.price * cylinders * people : product.price * people;
        total += gearDays * 1200;
        if (!(product.id === 'guided' && cylinders >= 3)) total += computerDays * 500;
      }

      $('total').textContent = money(total);
      $('bookingNote').textContent = product.note + (type === 'dive' && product.id === 'guided' && cylinders >= 3 ? ' 同日 3 氣瓶導潛已折抵電腦表租借。' : '');
    };

    document.querySelectorAll('#bookingForm input, #bookingForm select').forEach(el => el.addEventListener('input', calculateTotal));
    $('bookingType').addEventListener('change', populateProducts);
    document.querySelectorAll('[data-payment]').forEach(button => button.addEventListener('click', () => alert(`${button.dataset.payment}：正式上線需串接商家金流憑證。`)));
    if ($('date')) $('date').valueAsDate = new Date();
    populateProducts();
  }

  function init() {
    setupLanguage();
    setupBooking();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', YogiDiverJ.init);
