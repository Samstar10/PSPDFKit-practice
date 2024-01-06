document.addEventListener("DOMContentLoaded", async function() {
    try{
        const instance = await PSPDFKit.load({
            container: "#pdf-container",
            document: "path/to/your/document.pdf",
            licenseKey: "your-license-key"
        })

        const searchInput = document.getElementById("search-input")
        searchInput.addEventListener("input", function() {
            const searchText = searchInput.ariaValueMax.trim().toLowerCase()
            if(searchText.length > 0) {
                instance.search(searchText)
            }
        })
    }catch(error){
        console.log("Error initializing PSPDFKit:", error)
    }
})