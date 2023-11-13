# React Custom Hooks

## Rules of hooks
[Dokumentasi Rules of hooks](https://legacy.reactjs.org/docs/hooks-rules.html)
### Background story
Hooks itu baru ada di react 16.8(2018an), sebelum itu sebenernya pas kita bikin komponen menggunakan react itu lebih susah, karena belom ada hooks. Hooks itu mempermudah pembuatan komponen
<br>
<br>
Sebelum 16.8 , react komponen cara bikinnya ada 2 cara yaitu
- Class component = disebut smart component karena hanya dia yang punya state & lifecyle
- Function component = disebut dumb component , nah setelah 16.8 ,gara-gara ada hooks function component bisa ada state & lifecylenya

### What is hooks?
Sebuah function yang membuat functional component react punya fitur2 seperti layaknya class component
cara penggunaan hooks itu ada 2
- Only call hooks at the top level
```
import { useEffect, useState } from "react";

export default function Home(){
    const [item,setItem] = useState([]) // this is the right one (top level)

    const fetchData = () => {
        const [data, setData] = useState([])
    } // DON'T DO THIS!!!!!!!

    if(true) {
        const [loading, setLoading] = useState(true)
    } // DON'T DO THIS!!!!!!!

    for(let i = 0; i < 10; i++) {
        const [data2, setDat2] = useState([])
    } // DON'T DO THIS!!!!!!!
}
```
- Only call hooks from react function / custom hooks

## Custom hooks
Hooks buatan kita sendiri, kapan butuh kita buat hooks sendiri? ketika code kita redundant.
<br>
<br>
Cara bikin custom hooks :
- Bikin folder dalam src -> hooks
- Bikin sebuah file yang akan berisi function react, kenapa function react? karena kita akan panggil hooks react disini
- Yang membedakan function react biasa dengan function react custom hooks, didepannya menggunakan prefix "use"
- Pindahkan codingan yang redundant, dan sesuaikan data yang dibutuhkan melewati param
- Return sebuah object / array data utamanya


## Referensi
https://usehooks.com
<br>
https://usehooks-ts.com
