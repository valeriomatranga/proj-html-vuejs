let app = new Vue({
    
    el:'#app',

    data:{
        menu:[
            {
                link: "Home",
                tag: "",
            },
            {
                link:"Culinary History",
                tag:"",
            },
            {
                link:"Our Team",
                tag:"",
            },
            {
                link:"Takeout",
                tag:"New",
            },
            {
                link: "Bulletin",
                tag: "",
            },
            {
                link:"Reservation",
                tag:"",
            },
        ],
        hors:[
            {
                name:"ahi salmon nigiri",
                price: 48,
                ingredients:"Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit lacinia. "
            },
            {
                name:"umi masu salad",
                price: 21,
                ingredients:"Mollis ornare sit sapien, sodales. Cursus duis proin sempr quisque."
            },
            {
                name:"temaki with crab",
                price: 32,
                ingredients:"Ac vel, risus ornare senectus placerat duis amet dictumst tellus."
            },
            {
                name:"california rolls",
                price: 22,
                ingredients:"Ac vel, risus ornare senectus placerat duis amet dictumst tellus."
            },
            {
                name:"ahi fusion nigiri",
                price: 40,
                ingredients:"Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit lacinia. "
            },

        ],
        course:[
            {
                name:"braised abalone",
                price:52,
                ingredients:"Mollis ornare sit sapien, sodales. Cursus duis proin sempr quisque."
            },
            {
                name:"twice cooked pork",
                price:21,
                ingredients:"Ac vel, risus ornare senectus placerat duis amet dictumst tellus."
            },
            {
                name:"kungu pao chicken",
                price:32,
                ingredients:"Quis duis sit dictum aliquam a velit enim. Tellus in sit augue aliquam."
            },
            {
                name:"char siu e sushis",
                price:48,
                ingredients:"Feugiat rhoncus ipsum tristique purus diam, et dolor molestie."
            },
            {
                name:"french ranch",
                price:60,
                ingredients:"Mollis ornare sit sapien, sodales. Cursus duis proin sempr quisque."
            },

        ],
        desserts:[
            {
                name:"chocolate ball cake",
                price:13,
                ingredients:"In pellentesque in felis massa vehicula. In sed euismod ut."
            },
            {
                name:"lime pie with crust",
                price:14,
                ingredients:"Mollis ornare sit sapien, sodales. Cursus duis proin sempr quisque."
            },
            {
                name:"rasberry pear cake",
                price:18,
                ingredients:"Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit."
            },
            {
                name:"cafè au lait",
                price:6,
                ingredients:"Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit."
            },
            {
                name:"parfait au chocolat",
                price:13,
                ingredients:"In pellentesque in felis massa vehicula. In sed euismod ut."
            },

        ]

    },

});