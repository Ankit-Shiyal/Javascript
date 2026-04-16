const image =
    [
        "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
        "https://images.pexels.com/photos/31989599/pexels-photo-31989599.jpeg",
        "https://images.pexels.com/photos/32569408/pexels-photo-32569408.jpeg?_gl=1*mvsm1o*_ga*MzQxMTgyNTcxLjE3NzYzMTcxNzY.*_ga_8JE65Q40S6*czE3NzYzMTcxNzYkbzEkZzEkdDE3NzYzMTcyMTkkajE3JGwwJGgw",
        "https://images.pexels.com/photos/29100868/pexels-photo-29100868.jpeg?_gl=1*1tyb7qw*_ga*MzQxMTgyNTcxLjE3NzYzMTcxNzY.*_ga_8JE65Q40S6*czE3NzYzMTcxNzYkbzEkZzEkdDE3NzYzMTcyMTkkajE3JGwwJGgw",
        "https://images.pexels.com/photos/18787171/pexels-photo-18787171.jpeg?_gl=1*1u14l7y*_ga*MzQxMTgyNTcxLjE3NzYzMTcxNzY.*_ga_8JE65Q40S6*czE3NzYzMTcxNzYkbzEkZzEkdDE3NzYzMTcyMTkkajE3JGwwJGgw",
        "https://images.pexels.com/photos/32584961/pexels-photo-32584961.jpeg?_gl=1*lnh5xu*_ga*MzQxMTgyNTcxLjE3NzYzMTcxNzY.*_ga_8JE65Q40S6*czE3NzYzMTcxNzYkbzEkZzEkdDE3NzYzMTgyOTAkajQxJGwwJGgw",
        "https://images.pexels.com/photos/13757163/pexels-photo-13757163.jpeg?_gl=1*l1u4g0*_ga*MzQxMTgyNTcxLjE3NzYzMTcxNzY.*_ga_8JE65Q40S6*czE3NzYzMTcxNzYkbzEkZzEkdDE3NzYzMTgzMTckajE0JGwwJGgw"
    ]


let btnPri = document.getElementById("pri")
let btnNext = document.getElementById("next")
let natureIMG = document.getElementById("img")

let index = 0

natureIMG.src = image[index];



function priIMG() {

    index--
    if (index < 0) {
        index = image.length - 1
    }
    natureIMG.src = image[index]

}
function nextIMG() {
    index++
    if (index >= image.length) {
        index = 0
    }
    natureIMG.src = image[index]
}

setInterval(()=>{

nextIMG()},3000
)