const n=t=>new Promise(e=>setTimeout(e,t*1e3)),s=(t,e)=>{let o=0;return(...a)=>{Date.now()-o>=e&&(t.apply(null,a),o=Date.now())}};export{s as t,n as w};
