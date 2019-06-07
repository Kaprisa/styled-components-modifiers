## Modifiers for styled components

### Example

```js
import applyStyleModifiers from 'flexible-styled-components-modifiers';
import styled from 'styled-components';

/* 
    globalModifiers - modifiers that will be applied for all components,
    which uses applyStyleModifiersWithGlobal
 */

const globalModifiers = {
  m: {
      prop: 'margin',
      values: {
          '': 'margin',
          t: 'margin-top',
          b: 'margin-bottom',
          r: 'margin-right',
          l: 'margin-left'
      }
  },
  p: 'padding: ',
  flex: 'flex: ',
  w: 'width: ',
  h: 'height: ',
  color: (props, value) => `background-color: ${props.theme[value] || value};`,
  fontColor: (props, value) => `color: ${props.theme[value] || value};`
}

const applyStyleModifiersWithGlobal = applyStyleModifiers(globalModifiers)

/*
    Pay attention to the package flexible-styled-flex
*/

const flexModifiers = {
    jc: {
        prop: 'justify-content',
        values: {
            c: 'center',
            sb: 'space-between',
            sa: 'space-around',
            fe: 'flex-end',
            fs: 'flex-start',
        },
    },
    ai: {
        prop: 'align-items',
        values: {
            s: 'stretch',
            c: 'center',
            b: 'baseline',
            fs: 'flex-start',
            fe: 'flex-end',
        },
    },
    fd: {
        prop: 'flex-direction',
        values: {
            c: 'column',
            r: 'row',
            rr: 'row-reverse',
            cr: 'column-reverse',
        },
    },
    fww: 'flex-wrap: wrap;'
}

const applyFlexModifiers = applyStyleModifiersWithGlobal(flexModifiers);

const Flex = styled.div`
    display: flex;
    ${applyFlexModifiers}
`

const MyComponent = <Flex jcc aic w="100px">;

/*
    MyComponent = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
    `
 */
```
