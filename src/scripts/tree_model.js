import TreeModel from 'tree-model';
import utils from './utils';

const { log } = utils;
function testTreeModel() {
  const tree = new TreeModel();
  const data = [
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
  ];
  const rootData = { title: 'root', children: data };
  const root = tree.parse(rootData);
  log('root', root);
  const fisrtNode = root.first(node => node.model.title === 'p1132');
  log('fisrtNode', fisrtNode.model.title);

  const nodes = fisrtNode.getPath(node => node.model.title === 'p1132');
  log(nodes.length);
  nodes.map((node) => {
    log(node.model.title);
    return true;
  });
}


export default testTreeModel;
