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
          -webkit-mask-image: url(/assets/avatar-mask.svg);
          mask-image: url(/assets/avatar-mask.svg);
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
    return '0.1.2';
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
      avatar.name = this.items[i].name;
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
