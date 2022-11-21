const stats = (arr) => {
  total = {
    Total: arr.length,
    Unique: new Set(arr.map((element) => element.href)).size,
  };

  return total;
};

const statsAndValidate = (arr) => {
  const broken = arr.filter((links) => links.ok === "FAIL").length;
  total = {
    Total: arr.length,
    Unique: new Set(arr.map((element) => element.href)).size,
    Broken: broken,
  };

  return total;
};

module.exports = {
  stats,
  statsAndValidate,
};
