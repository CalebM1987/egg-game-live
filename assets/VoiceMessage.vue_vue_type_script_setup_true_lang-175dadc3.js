import{d as t,h as c,o as i,c as d,t as m,i as l,s}from"./index-e6e63f52.js";const r={class:"voice-message"},g=t({__name:"VoiceMessage",props:{message:{},voiceName:{default:"Eddy (English (US))"},beep:{type:Boolean,default:!0}},setup(e){const a=new Audio(new URL(""+new URL("beep-c21c011c.wav",import.meta.url).href,self.location).href),n=async()=>{e.beep?(a.addEventListener("ended",async()=>{await l(200),s(e.message,e.voiceName)}),await a.play()):s(e.message,e.voiceName)};return c(()=>{n()}),(o,u)=>(i(),d("div",r,m(o.message),1))}});export{g as _};
