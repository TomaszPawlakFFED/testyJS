Feature('testContactForm');

Scenario('test something', ({ I }) => {
    I.amOnPage("/");
    I.fillField('Name', 'testest');
    I.fillField('Email', 'tomek.pawlak59+4i0214@wp.pl');
    I.fillField('Comment', 'example coment');
    I.click('Submit');
    I.see('Message Sent (go back)');
});

Feature('testContactForm');

Scenario('test something', ({ I }) => {
    I.amOnPage("/");
    I.fillField('Name', 'testest');
    I.fillField('Email', 'tomek.pawlak59+4i0214@wp.pl');
    I.fillField('Comment', 'example coment');
    I.click('Submit');
    I.see('Message Sent (go back)');
});
