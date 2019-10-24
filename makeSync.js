const request = require('request');

function sleep(ms){
  return new Promise(resolve=>{
    setTimeout(resolve,ms)
  })
}

async function test(){
  let flag = true;
  try{
    request({options},function(err, res, body) {
      //Your code
      flag = false;
    })
    while(flag){
      await sleep(1000);
    }
  } catch (e){
    console.log(e);
  }
}

(async() => {
  try {
    await test();
  }
  catch(e) {
    console.log(e);
  }
})();
