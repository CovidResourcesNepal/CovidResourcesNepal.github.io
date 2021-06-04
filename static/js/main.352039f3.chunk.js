(this.webpackJsonpcovidresourcesnepal=this.webpackJsonpcovidresourcesnepal||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(12),o=a.n(n),i=a(21),c=a(22),l=a(27),d=a(26),h=a(13),j=a(8),u=a(10),m=a(9),b=a(14),p=a(23),g=a(24),f=a(1);var x=function(e){var t=e.members.map((function(e,t){return Object(f.jsx)(m.a,{xs:6,md:4,children:Object(f.jsxs)(b.a,{className:"team-card",children:[e.name,Object(f.jsx)("br",{}),e.hasOwnProperty("email")?e.email:"",e.hasOwnProperty("linkedin")?(a=e.linkedin,Object(f.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(f.jsx)(p.a,{icon:g.a})})):""]})},t);var a}));return Object(f.jsx)(u.a,{className:"justify-content-around",children:t})},O=(a(38),a(39),a(45)),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={team:{core:[],steering:[]},resourceShow:!1,disclaimerShow:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("data/team.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({team:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.resourceShow,s=t.disclaimerShow;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)(h.a,{className:"section Homepage-bg",fluid:!0,children:[Object(f.jsxs)("div",{className:"top-hero",children:[Object(f.jsx)("h1",{id:"hero-text",children:"COVID Resources for Nepal"}),Object(f.jsx)("p",{id:"hero-subtitle",children:"A common source for resources, donation campaigns, support systems, and Nepal\u2019s response to COVID-19 in one place"})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsxs)(m.a,{children:[Object(f.jsx)(j.a,{variant:"primary",size:"lg",target:"_blank",href:"https://docs.google.com/spreadsheets/d/1BQZvGqM3Ao48A6lHo_U1yfkFzb8DWPPnqhExFd6X8-8/edit#gid=570437755",children:"Fundraisers"}),Object(f.jsx)("div",{className:"button-info",children:"List of organizations seeking donations"})]}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(j.a,{variant:"primary",size:"lg",target:"_blank",onClick:function(t){return e.setState({resourceShow:!0})},children:"Resources"}),Object(f.jsxs)("div",{className:"button-info",children:["List of available resources ",Object(f.jsx)("br",{})," (medical, food, mental health, others)"]})]}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(j.a,{variant:"primary",size:"lg",target:"_blank",href:"https://www.change.org/p/urge-us-government-to-send-emergency-covid-19-vaccine-humanitarian-aid-to-nepal",children:"Vaccine Petition"}),Object(f.jsx)("div",{className:"button-info",children:"Link to sign a petition"})]})]}),Object(f.jsx)(u.a,{})]}),Object(f.jsxs)(h.a,{className:"section Homepage-help",fluid:!0,children:[Object(f.jsx)("h1",{className:"section-header",children:"How you can help"}),Object(f.jsxs)(u.a,{className:"justify-content-around align-items-stretch help-cards-container",children:[Object(f.jsx)(m.a,{sm:12,md:6,lg:4,children:Object(f.jsxs)(b.a,{body:!0,className:"help-card",children:[Object(f.jsx)("h3",{children:"Donate"}),Object(f.jsx)("p",{children:"We have compiled a list of fundraisers trying to appeal to a larger community and allocate funds to support Nepal in tackling and minimizing the effects of the Covid-19. These fundraisers are supporting initiatives on the ground that are related to medical needs, food distribution, delivery of home isolation kits among many others. We have tried to give a brief overview of each campaign. Please feel free to scroll through and support these fundraisers to the best of your ability. Every donation counts, every little effort adds up."}),Object(f.jsx)("div",{className:"spacer"}),Object(f.jsx)("div",{className:"button-container",children:Object(f.jsx)(j.a,{variant:"outline-primary",target:"_blank",href:"https://docs.google.com/spreadsheets/d/1BQZvGqM3Ao48A6lHo_U1yfkFzb8DWPPnqhExFd6X8-8/edit#gid=570437755",children:"Donate"})})]})}),Object(f.jsx)(m.a,{sm:12,md:6,lg:4,children:Object(f.jsxs)(b.a,{body:!0,className:"help-card",children:[Object(f.jsx)("h3",{children:"Add to the Database"}),Object(f.jsx)("p",{children:"Our volunteers have worked day and night to compile the data that we have. However, we believe there are many more resources, campaigns, and fundraisers that need to be listed alongside. If you know of one, whether it be resources, campaigns or any support systems, please use the form below to let us know."}),Object(f.jsx)("div",{className:"spacer"}),Object(f.jsx)("div",{className:"button-container",children:Object(f.jsx)(j.a,{variant:"outline-primary",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScbwDZCkG8iiacpJb5rFBH71EC3wUExG_q-D2o_mAUpLlhHGQ/viewform",children:"Add Resource"})}),Object(f.jsx)("div",{className:"button-container mt-3",children:Object(f.jsx)(j.a,{variant:"outline-primary",target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLScDVTkpMDasRZEMy7zk-ALjH4ARE8AZlR5inpIc8opPbMdIHg/viewform",children:"Suggest Changes"})})]})}),Object(f.jsx)(m.a,{sm:12,md:6,lg:4,children:Object(f.jsxs)(b.a,{body:!0,className:"help-card",children:[Object(f.jsx)("h3",{children:"Sign Vaccine Petition"}),Object(f.jsx)("p",{children:"Only about 4% of the population has received at least one dose of the Covid-19 vaccine and it is unlikely Nepal will receive more vaccines from its primary source, India, in the near future provided the crisis India itself is going through. So, countries like the US could really help fight this pandemic in Nepal by donating vaccines to the Government of Nepal. This will forestall immeasurable devastation for the people of Nepal. Please sign this petition organized by Nepal Rising to urge the US Department of State to support vaccine donations to Nepal."}),Object(f.jsx)("div",{className:"spacer"}),Object(f.jsx)("div",{className:"button-container",children:Object(f.jsx)(j.a,{variant:"outline-primary",target:"_blank",href:"https://www.change.org/p/urge-us-government-to-send-emergency-covid-19-vaccine-humanitarian-aid-to-nepal",children:"Sign Petition"})})]})})]})]}),Object(f.jsxs)(h.a,{className:"section Homepage-about pb-5",children:[Object(f.jsx)("h1",{className:"section-header",children:"About us"}),Object(f.jsx)("div",{className:"Homepage-about-paragraph",children:"We are a group of Nepali students and young professionals trying to integrate all the resources dedicated to Nepal\u2019s response to Covid-19 in one place. We hope that this platform can make the search for various types of resources and impactful fundraisers effective, including those people/organizations that need to address emergency situations in a short amount of time."})]}),Object(f.jsxs)(h.a,{className:"section homepage-team pt-0 pb-5",children:[Object(f.jsx)("h3",{className:"section-header",children:"Core Team"}),Object(f.jsx)(x,{members:this.state.team.core})]}),Object(f.jsxs)(h.a,{className:"section homepage-team pt-0",children:[Object(f.jsx)("h3",{className:"section-header",children:"Team Leads"}),Object(f.jsx)(x,{members:this.state.team.steering})]}),Object(f.jsx)("footer",{className:"footer",children:Object(f.jsx)(h.a,{children:Object(f.jsxs)(u.a,{className:"justify-content-between",children:[Object(f.jsx)(m.a,{xs:12,md:"auto",children:"\xa9 Covid Resources Nepal"}),Object(f.jsxs)(m.a,{xs:12,md:"auto",children:["Contact: ",Object(f.jsx)("a",{href:"mailto:covidresourcesnepal@gmail.com",target:"_blank",rel:"noreferrer",children:"covidresourcesnepal@gmail.com"})]}),Object(f.jsx)(m.a,{xs:12,md:"auto",children:Object(f.jsx)("div",{onClick:function(t){return e.setState({disclaimerShow:!0})},className:"btn-cursor",children:"Disclaimer"})})]})})}),Object(f.jsxs)(O.a,{show:a,onHide:function(t){return e.setState({resourceShow:!1})},centered:!0,children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{className:"resources-title",children:"Links to Resources"})}),Object(f.jsxs)(O.a.Body,{children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/16ynrRYS3Qg6dVRG7UdQ2Gp4OdBpQ7doGdiCIkXdG9-0/edit#gid=0",className:"resource-buttons",target:"_blank",variant:"outline-primary",children:"General Info on Covid-19"})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/1MwqmhNEFfw_7b_BVYiTiQUHKAUxgx1jp3maTT5qqmo8/edit#gid=0",className:"resource-buttons",target:"_blank",variant:"outline-primary",children:"Helpline Resources"})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/12gKTeQR5Ma7Fmw0JorVLjKyJZdp0V1ZxyArLQCcYyK0/edit#gid=0",className:"resource-buttons",target:"_blank",variant:"outline-primary",children:"Mental Health Resources"})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(j.a,{href:"https://docs.google.com/spreadsheets/d/1S7JcDkfHdxu_iEZU5RklNT8buKCGv68vjetNKIg0nws/edit#gid=0",className:"resource-buttons",target:"_blank",variant:"outline-primary",children:"Food Resources"})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(j.a,{href:"https://www.covidconnectnp.org/",className:"resource-buttons",target:"_blank",variant:"outline-primary",children:"Medical Resources"})})]})]}),Object(f.jsxs)(O.a,{show:s,onHide:function(t){return e.setState({disclaimerShow:!1})},centered:!0,size:"lg",children:[Object(f.jsx)(O.a.Header,{closeButton:!0,children:Object(f.jsx)(O.a.Title,{children:"Disclaimers"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsxs)("ol",{children:[Object(f.jsx)("li",{children:"Please note that the information curated here are gathered publicly and we do not own, operate or control the helpline numbers or apps listed here. We try our best to verify the information but cannot make recommendations or guarantee any advice you might receive from these sources."}),Object(f.jsx)("li",{children:'If you are a professional or part of an organization offering services for free/at subsidized rates or know someone who does and want to get added to this list, please use the "Add to our database" link on our website.'}),Object(f.jsxs)("li",{children:["We are continuously updating this list and if you have any information/suggestion that does not fall under #2 above,  please email us at ",Object(f.jsx)("a",{href:"mailto:covidresourcesnepal@gmail.com",target:"_blank",rel:"noreferrer",children:"covidresourcesnepal@gmail.com"}),' with the subject line "Name of Category for the Information" For eg: "Suggestion: Food Resources"']})]})})]})]})}}]),a}(r.a.Component),y=(a(41),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),s(e),r(e),n(e),o(e)}))});o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),y()}},[[42,1,2]]]);
//# sourceMappingURL=main.352039f3.chunk.js.map