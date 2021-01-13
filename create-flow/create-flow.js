const { default: axios } = require("axios");

module.exports = function (RED) {
  function createFlowNode(config) {
    RED.nodes.createNode(this, config);
    let node = this;
    node.on("input", function (msg) {
      axios
        .post("http://127.0.0.1:1880/flow", {
          label: config.flowName,
          nodes: [],
          configs: [],
        })
        .then((res) => {
          console.log(res);
          node.send({ status: "success" });
        })
        .catch((err) => {
          console.error(err);
          node.send({ status: "error" });
        });
    });
  }
  RED.nodes.registerType("create-flow", createFlowNode);
};
