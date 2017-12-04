import $ from 'jquery';
import TreeModel from 'tree-model';
import '../styles/normalize.scss';
import '../styles/style.scss';
import utils from './utils';
import testTreeModel from './tree_model';
import Menu from './menu';

const { log } = utils;

function createMenu(tree, $root) {
  // const $root = $(domStr);
  if (tree && Array.isArray(tree) && tree.length > 0) {
    for (let i = 0; i < tree.length; i += 1) {
      const node = tree[i];
      // 生成本层菜单
      if (node.children) {
        // 生成ul
        const $submenu = $('<ul class=\'submenu\'></ul>');
        const $menu = $(`
        <li class ='node'>
          <div class='title' >${node.title}</div>
        </li>`);
        $menu.append($submenu);
        $root.append($menu);
        createMenu(node.children, $submenu);
      } else {
        // 生成li
        $root.append(`<li class = 'end-node'><div class='title' >${node.title}</div></li>`);
        // return false;
      }
    }
  }
}

function showMenu(root, $dom) {
}
function findByTitle(tree, title) {
  // 遍历这棵树, 对比title
  // 将路径染红

}
function paint() {

}

function main() {
  log('ready');
  const treeData = {
    title: 'root',
    children: [
      {
        title: 'p1',
        children: [
          {
            title: 'p11',
            children: [
              { title: 'p111' },
              { title: 'p112' },
              {
                title: 'p113',
                children: [
                  { title: 'p1131' },
                  {
                    title: 'p1132',
                    children: [
                      { title: 'p11321' },
                      { title: 'p11322' },
                      { title: 'p11323' },
                    ],
                  },
                  { title: 'p1133' },
                ],
              },
            ],
          },
          { title: 'p12' },
          { title: 'p13' },
        ],
      },
      {
        title: 'p2',
        children: [
          {
            title: 'p21',
            children: [
              { title: 'p211' },
            ],
          },
        ],
      },
    ],
  };

  const m = new Menu(treeData, $('ul.root'));
  m.findAndPaint('p211');
  // m.render();
  // createMenu(tree, $('ul.root'));
  // testTreeModel();
}

main();

