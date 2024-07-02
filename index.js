exports.findMatching = function(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  };
  
  exports.fuzzyMatch = function(drivers, letters) {
    return drivers.find(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  };
  
  exports.matchName = function(drivers, name) {
    return drivers.includes(name);
  };
  