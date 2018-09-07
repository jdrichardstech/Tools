Async tests don't complete right away

Jest must be informed that the test is done.

There are seral ways to do that:

1. done() callback is passed to the test
   it('async done test',done=>{
   setTimeout(done, 100)
   })
2. return a promise from the test
   it('return promise test', ()=>{
   return new Promise(resolve=>setTimeout(resolve, 1500))
   })
3. pass an async function to it
   it('async await',()=>{
   async() =>{
   await delay(100)
   }
   })

   \*\*\* delay is a method specific to saga and must be imported. i assume i could also use setTimeout herre.
