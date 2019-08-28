# &lt;vcf-avatar-group&gt;

## Installation

Install `vcf-avatar-group`:

```sh
npm i @vaadin-component-factory/vcf-avatar-group --save
```

## Usage

Once installed, import it in your application:

```js
import '@vaadin-component-factory/vcf-avatar-group/vcf-avatar-group.js';
```

And use it:

```html
<vcf-avatar-group></vcf-avatar-group>
```

```javascript
const people = [
  { name: 'Dave' },
  { abbr: 'JD' },
  { name: 'Hannah' },
  { image: 'https://randomuser.me/api/portraits/women/5.jpg', name: 'Jane' }
];
const avatarGroup = document.querySelector('vcf-avatar-group');
avatarGroup.items = people;
```

For each item, you can provide a `name`, `abbr`, or `image`. Please refer to [vcf-avatar-item](https://github.com/vaadin-component-factory/vcf-avatar-item#usage) for more info.

You can set a `max` attribute to limit how many avatar items are shown. By default, the limit is 4.

## Running demo

1. Fork the `vcf-avatar-group` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vcf-avatar-group` directory, run `npm install` to install dependencies.

1. Run `npm start` to open the demo.

## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.

## License

Commercial Vaadin Add-on License version 3 (CVALv3). For license terms, see LICENSE.

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
