const observableModule = require("tns-core-modules/data/observable");
const HomeItemsViewModel = require("./home-items-view-model");
// const view ="";
function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}
var total =[];
var totalAmount =0;
function onItemTap(args) {
     const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;
// alert(tappedItem.rate);
    // page.frame.navigate({
    //     moduleName: "home/home-item-detail/home-item-detail-page",
    //     context: tappedItem,
    //     animated: true,
    //     transition: {
    //         name: "slide",
    //         duration: 200,
    //         curve: "ease"
    //     }
    // });
    const promptOptions = {
        title: tappedItem.name,
        defaultText: 0,
        message: "Enter number of "+tappedItem.name+" items",
        okButtonText: "Confirm Order",
        cancelButtonText: "Cancel Order",
        cancelable: true,
        inputType: "number", // email, number, text, password, or email
        capitalizationType: "none", // all, none, sentences or words
        
    };
    prompt(promptOptions).then((result) => {
        var itemTotalcost = tappedItem.rate * result.text;
       
        total.push(itemTotalcost);
        // console.log(typeof(itemTotalcost));
         totalAmount =  total.reduce((a,b)=>a+b,0);
        // console.log(total);
        if(result.text != ""){
            alert(`You added, ${result.text} items for Rs. ${itemTotalcost}`);
            
        }
        var printTotal = page.getViewById('totalBillAmount');
        printTotal.text = "Rs. "+ totalAmount
        // alert(printTotal.text);
    });
   
    
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
 
