const { default: axios } = require("axios");

module.exports = function (RED) {
  function addNode(config) {
    RED.nodes.createNode(this, config);
    let node = this;
    node.on("input", function (msg) {
      axios.put();
    });
  }
  RED.nodes.registerType("add", addNode);
};
