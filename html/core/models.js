class Page {
  constructor({ label, icon, contentId }) {
    this.label = label;
    this.icon = icon;
    this.contentId = contentId;
  }

  draw() {
    return `
      <a href="#" class="flex gap-1 text-xl hover:text-gray-500 transition-colors" onclick="changePage('${this.contentId}');">
        <i data-lucide="${this.icon}"></i>
        ${this.label}
      </a>
    `;
  }
}
