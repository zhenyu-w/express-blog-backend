import{E as e}from"./vendor.479a7dc9.js";const u=s=>{const r=e(!1),a=e(!1),t=e();return{trigger:async(...o)=>{try{r.value=!0,await s(...o)}catch(n){a.value=!0,t.value=n}finally{r.value=!1}},loading:r,isError:a,error:t}};export{u};
