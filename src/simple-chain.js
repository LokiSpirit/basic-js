const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    nodes: [],

    getLength() {
        return this.nodes.length;
    },

    addLink(value) {
        if (value === undefined) this.nodes.push('( )');
        else this.nodes.push(value);
        return this;
    },
    removeLink(position) {
            if (Number.isInteger(position) && position > 0 && position <= this.nodes.length) {
                this.nodes.splice(position - 1, 1);
                return this;
            } else {
              this.nodes.length = 0;
                throw new Error("You can't remove incorrect link!");
            }
    },

    reverseChain() {
        this.nodes.reverse();
        return this;
    },

    finishChain() {
        let chain = this.nodes.map(item => '( ' + item + ' )').join('~~');
      this.nodes.length = 0;
        return chain;
    }
};

module.exports = {
  chainMaker
};
