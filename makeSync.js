function sleep(ms){
  return new Promise(resolve=>{
    setTimeout(resolve,ms)
  })
}

const test = class {
  constructor() {
  }
  async then(resolve, reject) {
    try {
      let status = true;
     // for(let i = 0; i < 20; i++) {
        request({options},
        function(err, res) {
          if(!err) {
            if(res.statusCode == 200) {
            }
          }
          if(??) status = false;
        })
        .catch(function (err) {
          if(??) status = false;
        });
    //  }

      while(status) {
        await sleep(1000);
      };
      resolve();
    }
    catch(e) {
      log(e);
    }
  }
};

(async() => {
  try {
    let equisde = await new test();
  }
  catch(e) {
    log(e);
  }
})();
