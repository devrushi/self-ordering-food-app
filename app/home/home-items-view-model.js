const observableModule = require("tns-core-modules/data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Masala Dosa",
                description: "Description for Item 1",
                imagesrc : "https://www.vhv.rs/dpng/d/175-1751297_indian-food-png-hd-transparent-png.png",
                rate : "100.00"
            },
            {
                name: "Idli Sambar",
                description: "Description for Item 2",
                imagesrc :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp8PnqKL5IuajMexFt1F7FXr4z_f95Wjw1ez5I5sa14rTwCm2R&usqp=CAU",
                rate : "80.00"

            },
            {
                name: "South Indian Thali",
                description: "Description for Item 3",
                imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYyYf12ckg-yszYnFjHKCdtlk4dEotDS9GWG64dUMmZH0y76db&usqp=CAU",
                rate : "200.00"
            }
           
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
