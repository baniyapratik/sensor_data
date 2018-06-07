const async = require('async');
const fsp = require('fs-extra');
const fs = require('fs');
var path = require('path');
var staticBasepath = '/Users/prabaniy/Documents/mdt_sensor_data/';

async function get_filename() {
  try {
    const names = await fsp.readdir(staticBasepath);
    console.log('Get ', names[0]);
    return names[0];
  } catch (e) {
    console.log('error: ', e);
  }
}
async function validate_json(fileLoc) {
  try {
    await JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

async function get_value() {
  var fileName = await get_filename(); //get the file name

  var fileLoc = await path.resolve(staticBasepath);
  var data = '';
  fileLoc = await path.join(fileLoc, fileName);
  console.log('File Location', fileLoc);

  try {
    data = await fsp.readFile(fileLoc, 'utf8');
    console.log(data);
  } catch (e) {
    console.log('Error: ', e.stack);
  }

  return data;
}

var distinct = {};
function getNames(root, callback) {
  fs.readdir(root, function(err, list) {
    console.log('List is', list);
    if (err) return callback(err);

    async.each(
      list,
      function(file, done) {
        fs.stat(file, function(stat) {
          if (err) return done(err);
          console.log('File is..', file);
          console.log('Stat is..', stat);
          done();
        });
      },
      function(err) {
        // called when all done or error
        callback(err, distinct);
      }
    );
  });
}
//getNames(staticBasepath, function(distinct) {
//  console.log(distinct);
//});
exports.get_value = get_value;
exports.validate_json = validate_json;
