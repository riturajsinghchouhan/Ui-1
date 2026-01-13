import React from 'react'
import Card from './componets/card'
import User from './componets/user'
const App = ()=>{
  // const arr =[
  //   {name:'ritu',age:21},
  //   {name:'raj',age:23},
  //   {name:'Singh',age:20},
  //   {name:'Chouhan',age:24},
  // ];


  const cardData = [
  {
    id: 1,
    company: "Amazon",
    time: "5 days ago",
    role: "Senior UI UX Designer Level",
    tags: ["Part Time", "Senior Level"],
    salary: "$1300",
    location: "Mumbai, India",
    image: "https://imgs.search.brave.com/IUSd4evm5QEEmWUlPx9rTefBlcpzf7HU-FtLCmTL8es/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzkxLzU5LzIx/LzM2MF9GXzE2OTE1/OTIxODZfdXNBNkVz/Q2o3WDVtNjNWeUZx/TUNzaEpGYXBvSHB3/SUwuanBn"
  },
  {
    id: 2,
    company: "Google",
    time: "2 days ago",
    role: "Frontend React Developer",
    tags: ["Full Time", "Mid Level"],
    salary: "$1800",
    location: "Bangalore, India",
    image: "https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc"
  },
  {
    id: 3,
    company: "Microsoft",
    time: "1 week ago",
    role: "UI Engineer",
    tags: ["Remote", "Junior Level"],
    salary: "$1100",
    location: "Pune, India",
    image: "https://imgs.search.brave.com/qv1jEHQMJruWbrXIW9cQMDq9NesV0WTkxogPzG0SL1M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q0L2Vm/LzE1L2Q0ZWYxNTUx/N2YwNGJjMGI2MDAy/M2Y2YTQ1MzhlZDVk/LmpwZw"
  },
  {
    id: 4,
    company: "Netflix",
    time: "3 days ago",
    role: "Product Designer",
    tags: ["Full Time", "Senior Level"],
    salary: "$2000",
    location: "Remote",
    image: "https://imgs.search.brave.com/cZlmV7HtblhC8DQojqdGVCc3s2N_QG07ckU9R_5qef0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/MTE2LzM0MC9zbWFs/bC9uZXRmbGl4LWxv/Z28taWNvbi1mcmVl/LXBuZy5wbmc"
  },
  {
    id: 5,
    company: "Meta",
    time: "6 days ago",
    role: "UX Researcher",
    tags: ["Contract", "Mid Level"],
    salary: "$1500",
    location: "Hyderabad, India",
    image: "https://imgs.search.brave.com/QpQQaUkD0bIAekvPR1Y9cIRFHxNbH1rwZlIsi2kz2D4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MjEwLzg5MC9zbWFs/bC9tZXRhLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtbWV0YS1sb2dv/LW1ldGEtbG9nby1m/cmVlLWRvd25sb2Fk/LWZyZWUtcG5nLnBu/Zw"
  },
  {
    id: 6,
    company: "Apple",
    time: "4 days ago",
    role: "Visual Designer",
    tags: ["Full Time", "Senior Level"],
    salary: "$2200",
    location: "Delhi, India",
    image: "https://imgs.search.brave.com/iiNhtEpI6h-Lbclgbvi0V7krkysc-gmlRcBuMxIpI_A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTgv/MjE2LzEyMi9zbWFs/bC9zdHlsaXplZC1h/cHBsZS1jbGlwYXJ0/LXdpdGgtYml0ZS1h/YnN0cmFjdC1kZXNp/Z24tZnJlZS1wbmcu/cG5n"
  },
  {
    id: 7,
    company: "Adobe",
    time: "2 weeks ago",
    role: "UX Writer",
    tags: ["Remote", "Mid Level"],
    salary: "$1400",
    location: "Remote",
    image: "https://imgs.search.brave.com/AakO1sm1U09mv-kcXqoWYLUcVRVl-qsl4f0g8XNa9VU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MTE4LzU0NC9zbWFs/bC9hZG9iZS1hZnRl/ci1lZmZlY3RzLWNj/LWljb24tYXBwLWxv/Z28tZWRpdGFibGUt/dHJhbnNwYXJlbnQt/YmFja2dyb3VuZC1w/cmVtaXVtLXNvY2lh/bC1tZWRpYS1kZXNp/Z24tZm9yLWRpZ2l0/YWwtZG93bmxvYWQt/ZnJlZS1wbmcucG5n"
  },
  {
    id: 8,
    company: "Swiggy",
    time: "1 day ago",
    role: "UI Designer",
    tags: ["Full Time", "Junior Level"],
    salary: "$900",
    location: "Bangalore, India",
    image: "https://imgs.search.brave.com/AA22_Xq3KE47Zvn7woISr4A8ZsSYeJweKyS_1yNwZgU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/ODUwLzcwNS9zbWFs/bC9zd2lnZ3ktYXBw/LWljb24td2l0aC10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLWZy/ZWUtcG5nLnBuZw"
  },
  {
    id: 9,
    company: "Zomato",
    time: "3 days ago",
    role: "Product UI Designer",
    tags: ["Part Time", "Mid Level"],
    salary: "$1200",
    location: "Delhi, India",
    image: "https://imgs.search.brave.com/Ub-iFTKQwYYng03VcTKK3qD-R0LVaVc47ryM8vrjIgo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/OTc1LzY2NS9zbWFs/bC96b21hdG8tbG9n/by16b21hdG8taWNv/bi10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc"
  },
  {
    id: 10,
    company: "Flipkart",
    time: "1 week ago",
    role: "UX Designer",
    tags: ["Full Time", "Senior Level"],
    salary: "$1700",
    location: "Noida, India",
    image: "https://imgs.search.brave.com/jX-SSLrcN3nPBOOA_4hFXai_hl8H475l0KkpueOhQAU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWZsaXBrYXJ0LWlj/b24tc3ZnLWRvd25s/b2FkLXBuZy0yMjY1/OTQucG5nP2Y9d2Vi/cCZ3PTI1Ng"
  }
];


  return (
  <>

  <div className='parent'>
   {cardData.map(function(elem){
    return <>
                <Card company={elem.company}
                 img={elem.image} 
                 tag1={elem.tags}
                 time={elem.time}
                 location={elem.location}
                 role={elem.role}
                 salary={elem.salary}
                />
                </>
   
   })}
   
  </div>

  </>)
}

export default App;