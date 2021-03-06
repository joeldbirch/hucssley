module.exports = {
  extractor(content) {
    const tags = ['html', ...(
      content.match(/<([A-Za-z0-9-]+).*?>/g) || []
    ).map(str => str.replace(/<([A-Za-z0-9-]+).*?>/g, '$1'))];

    return [...tags, ...content.match(/[A-Za-z0-9-_:&@%.<>/()]+/g) || []];
  },
};
