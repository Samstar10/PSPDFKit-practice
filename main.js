import "./assets/dist/pspdfkit.js"
import { PSPDFKit } from "./assets/dist/pspdfkit.js";

// document.addEventListener("DOMContentLoaded", async function() {


//     try{
//         const instance = await PSPDFKit.load({
//             container: "#pdf-container",
//             document: "document.pdf",
//         })

//         const searchInput = document.getElementById("search-input")
//         searchInput.addEventListener("input", function() {
//             const searchText = searchInput.ariaValueMax.trim().toLowerCase()
//             if(searchText.length > 0) {
//                 instance.search(searchText)
//             }
//         })
//     }catch(error){
//         console.log("Error initializing PSPDFKit:", error)
//     }
// })

const baseUrl = `${window.location.protocol}//${window.location.host}/assets/`;

PSPDFKit.load({
    baseUrl,
    container: "#pdf-container",
    document: "document.pdf"
})
.then(instance => {
    console.log("PSPDFKit loaded", instance)
})
.catch(error => {
    console.log(error.message)
})