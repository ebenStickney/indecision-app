'use strict';

console.log('app.js is running!');

var section = {
    title: 'Indecision App',
    subtitle: 'Put you fate into the hands of your computer!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        section.options.push(option);
        e.target.elements.option.value = '';
    };
    renderOptionList();
};
var onDelete = function onDelete() {
    section.options = [];
    renderOptionList();
};

var appRoot = document.getElementById('app');

var renderOptionList = function renderOptionList() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            section.title
        ),
        section.subtitle && React.createElement(
            'p',
            null,
            section.subtitle
        ),
        React.createElement(
            'p',
            null,
            section.options.length > 0 ? 'Here are your options:' : 'Quick, give yourself something to do!'
        ),
        React.createElement(
            'p',
            null,
            section.options.length
        ),
        React.createElement(
            'button',
            { onClick: onDelete },
            'Remove All Options!'
        ),
        React.createElement(
            'ol',
            null,
            section.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: option },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderOptionList();

///As of today
