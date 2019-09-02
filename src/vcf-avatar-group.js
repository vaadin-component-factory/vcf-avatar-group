/* eslint-disable max-len */
import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin';
import { ElementMixin } from '@vaadin/vaadin-element-mixin';
import '@vaadin-component-factory/vcf-avatar-item';

class VcfAvatarGroup extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        vcf-avatar-item,
        :host ::slotted(vcf-avatar-item) {
          flex: none;
        }

        vcf-avatar-item:not(:last-child),
        :host ::slotted(vcf-avatar-item:not(:last-child)) {
          margin-right: calc(var(--lumo-size-s) / -4);
          -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzQtLjk3NTc2NTc1Yy02Ljk5MTE1NDIgMi40NzEwMTg0NC0xMiA5LjEzODQ1Mjc5LTEyIDE2Ljk3NTc2NTc1IDAgNy44MzczMTMgNS4wMDg4NDU4IDE0LjUwNDc0NzMgMTIgMTYuOTc1NzY1OHYxLjAyNDIzNDJoLTM2di0zNmgzNnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
          mask-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzQtLjk3NTc2NTc1Yy02Ljk5MTE1NDIgMi40NzEwMTg0NC0xMiA5LjEzODQ1Mjc5LTEyIDE2Ljk3NTc2NTc1IDAgNy44MzczMTMgNS4wMDg4NDU4IDE0LjUwNDc0NzMgMTIgMTYuOTc1NzY1OHYxLjAyNDIzNDJoLTM2di0zNmgzNnoiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
        }
      </style>
      <slot></slot>
    `;
  }

  static get is() {
    return 'vcf-avatar-group';
  }

  static get version() {
    return '0.2.1';
  }

  static get properties() {
    return {
      items: {
        type: Array,
        observer: 'itemsUpdated'
      },
      max: {
        type: Number,
        value: 4
      }
    };
  }

  itemsUpdated() {
    this.innerHTML = '';

    const shown = this.items.length > this.max ? this.max - 1 : this.items.length;

    for (let i = 0; i < shown; i++) {
      const avatar = document.createElement('vcf-avatar-item');
      this.items[i].name && avatar.setAttribute('name', this.items[i].name);
      this.items[i].abbr && avatar.setAttribute('abbr', this.items[i].abbr);
      this.items[i].image && avatar.setAttribute('image', this.items[i].image);
      this.appendChild(avatar);
    }

    if (this.items.length > shown) {
      const avatar = document.createElement('vcf-avatar-item');
      avatar.abbr = '+' + (this.items.length - shown);
      const names = this.items.map(item => item.name);
      avatar.name = names.join(', ');
      this.appendChild(avatar);
    }
  }
}

customElements.define(VcfAvatarGroup.is, VcfAvatarGroup);

/**
 * @namespace Vaadin
 */
window.Vaadin.VcfAvatarGroup = VcfAvatarGroup;

if (window.Vaadin.runIfDevelopmentMode) {
  window.Vaadin.runIfDevelopmentMode('vaadin-license-checker', VcfAvatarGroup);
}
