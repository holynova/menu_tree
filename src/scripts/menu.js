import TreeModel from 'tree-model';
import $ from 'jquery';

class Menu {
  constructor(menuData, $container) {
    this.menuData = menuData;
    this.$container = $container;
    const tree = new TreeModel();
    this.root = tree.parse(this.menuData);
  }
  render() {
    const make = (node) => {
      if (node.hasChildren()) {
        const $submenu = $('<ul class=\'submenu\'></ul>');
        const $menuItem = $(`
        <li class ='node'>
          <div class='title' >${node.model.title}</div>
        </li>`);
      } else {
        const $menuItem = $(`<li class = 'end-node'><div class='title' >${node.model.title}</div></li>`);
      }
    };
    this.root.walk(make);
  }
}
