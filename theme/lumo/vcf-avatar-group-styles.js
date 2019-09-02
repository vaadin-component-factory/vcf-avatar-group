import '@vaadin/vaadin-lumo-styles/sizing';

const theme = document.createElement('dom-module');
theme.id = 'vcf-avatar-group-lumo';
theme.setAttribute('theme-for', 'vcf-avatar-group');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
