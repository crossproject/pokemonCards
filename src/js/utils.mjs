export async function renderWithTemplate (templateFn,
    parentElement,
    data,
    callback,
    position = "afterbegin",
    clear = true){
// Renders products using a template

// If clear is true, then clean the parentElement
if (clear) parentElement.innerHTML = "";

const htmlData =  await templateFn(data);

parentElement.insertAdjacentHTML(position, htmlData);
if(callback) {
callback(data);
}
}