// const fromObject = require("tns-core-modules/data/observable").fromObject;

// function onNavigatingTo(args) {
//     const page = args.object;

//     page.bindingContext = args.context;
// }

// function onBackButtonTap(args) {
//     const view = args.object;
//     const page = view.page;

//     page.frame.goBack();
// }
// var count =0;
// function onAdd(args){
//     const add = args.view.bindingContext;
//     const page = args.object;
    
//     count++;
//     var totalPrice = count * add.rate;
//     console.log(totalPrice);
//     const source = fromObject({
//         totalPrice: totalPrice,
//         count:count
//     });

//     page.bindingContext = source;
//     // alert(args.view.bindingContext);
// }
// exports.onAdd = onAdd;

// exports.onNavigatingTo = onNavigatingTo;
// exports.onBackButtonTap = onBackButtonTap;

