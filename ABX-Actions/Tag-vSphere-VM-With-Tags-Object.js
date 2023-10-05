exports.handler = function handler(context, inputs) {
  let tagsAsString = inputs.customProperties.yamlTags;
  let tagsJsonObject = JSON.parse(tagsAsString);
  let outputs = {};
  outputs.tags = inputs.tags;
  
  console.log("Entering ABX action with commited changes");
  
  console.log("==========================================");
  console.log("inputs.tags:");
  console.log(inputs.tags);
  console.log("==========================================");
  console.log("tagsAsString:");
  console.log(tagsAsString);
  console.log("==========================================");
  console.log("tagsJsonObject:");
  console.log(tagsJsonObject);
  console.log("==========================================");
  
  Object.keys(tagsJsonObject).forEach(key => {
      outputs.tags[key] = tagsJsonObject[key];
      console.log("key: " + key + "  /  value: " + tagsJsonObject[key]);
  }); 
 

  return outputs;
};
