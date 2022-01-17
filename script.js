var arr = []

        document.querySelector("form").addEventListener("submit", dom);
        function dom(event) {
            var map = new Map()
            event.preventDefault()
            var name = document.querySelector("#name").value
            var ed = document.querySelector("#ed").value
            var s1st = document.querySelector("#s1st").value
            var s2nd = document.querySelector("#s2nd").value
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            td1.textContent = name
            var td2 = document.createElement("td")
            td2.textContent = ed
            var td3 = document.createElement("td")
            td3.textContent = s1st
            var td4 = document.createElement("td")
            td4.textContent = s2nd
            var td5 = document.createElement("td")
            td5.textContent = averageCal(+s1st, +s2nd)
            tr.append(td1, td2, td3, td4, td5)
            document.querySelector("tbody").append(tr)
            {
                // map.set("name", name)
                // map.set("ed", ed)
                // map.set("s1st", s1st)
                // map.set("s2nd", s2nd)
                // map.set("avg", averageCal(+s1st, +s2nd))
            }
            map.name = name
            map.ed = ed
            map.s1st = s1st
            map.s2nd = s2nd
            map.avg = averageCal(+s1st, +s2nd)
            arr.push(map)
            document.querySelector("#asc").addEventListener("click", ascending);
            document.querySelector("#dsc").addEventListener("click", descending);
            
        }
        function averageCal(a, b) {
            return (a + b) / 2 | 0
        }
        function ascending() {
            arr.sort(function (a, b) {
                return a.avg - b.avg
            })
            appends(arr)
            
        }
        
        
        function descending() {
            arr.sort(function (a, b) {
                return b.avg - a.avg
            })
            appends(arr)
        }

        // for adding sorted element in table
        function appends(arr) {
            // console.log(arr[0].name,arr[0].ed,arr[0].s1st,arr[0].s2nd,arr[0].avg)
            var tr = document.getElementsByTagName("tr")
            for(var i=1 ;i<=tr.length ;i++){
                tr[i].children[0].textContent = arr[i-1].name
                tr[i].children[1].textContent = arr[i-1].ed
                tr[i].children[2].textContent = arr[i-1].s1st
                tr[i].children[3].textContent = arr[i-1].s2nd
                tr[i].children[4].textContent = arr[i-1].avg
            }
            return 1
        }
