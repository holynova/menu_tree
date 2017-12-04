import TreeModel from 'tree-model';
import $ from 'jquery';
import utils from './utils';

const log = console.log.bind(console);

class Menu {
  constructor(menuData, $container) {
    this.menuData = menuData;
    this.$container = $container;
    const tree = new TreeModel();
    this.root = tree.parse(this.menuData);
    this.render();
  }
  // render_test() {
  //   const make = (node) => {
  //     if (node.hasChildren()) {
  //       const $submenu = $('<ul class=\'submenu\'></ul>');
  //       const $menuItem = $(`
  //       <li class ='node'>
  //         <div class='title' >${node.model.title}</div>
  //       </li>`);
  //     } else {
  //       const $menuItem = $(`<li class = 'end-node'><div class='title' >${node.model.title}</div></li>`);
  //     }
  //   };
  //   this.root.walk(make);
  // }
  render() {
    function createMenu(treeData, $root) {
      if (treeData) {
        // log('title = ', treeData.title);
        if (treeData.children) {
          const $submenu = $('<ul class=\'submenu\'></ul>');
          const $menu = $(`
          <li class ='node menu-${treeData.title}'>
            <div class='title' >${treeData.title}</div>
          </li>`);
          $menu.append($submenu);
          $root.append($menu);

          for (let i = 0; i < treeData.children.length; i += 1) {
            const child = treeData.children[i];
            createMenu(child, $submenu);
          }
        } else {
          $root.append(`<li class = 'end-node menu-${treeData.title}'>
          <div class='title' >${treeData.title}</div>
          </li>`);
        }
      }
    }
    //=-----------------
    createMenu(this.menuData, this.$container);
  }
  findOpenKeys(title) {
    const foundNode = this.root.first(node => node.model.title === title);
    const paths = foundNode.getPath();
    return paths.map(p => p.title);
  }
  findSelectedKeys(title) {
  
  }
  findAndPaint(title) {
    const foundNode = this.root.first(node => node.model.title === title);
    const paths = foundNode.getPath();

    paths.map((path) => {
      const selector = `li.menu-${path.model.title}>.title`;
      log($(selector).length);
      $(selector).css({ color: 'red' });
      // log(path.model.title);
      return true;
    });
  }
}

export default Menu;
